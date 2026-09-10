"""Non-destructive SQLite contract checks against real migrations and query strings."""
import json
import re
import sqlite3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
db = sqlite3.connect(":memory:")
db.execute("PRAGMA foreign_keys=ON")
journal = json.loads((ROOT / "drizzle/meta/_journal.json").read_text())
for entry in journal["entries"]:
    db.executescript((ROOT / "drizzle" / (entry["tag"] + ".sql")).read_text())

db.execute("""INSERT INTO events (id,slug,title,short_title,event_type,audience,description,venue,capacity,registration_open,status,created_at,updated_at)
 VALUES ('test','test','Test event','Test','Test','K26','Test','A9',105,1,'REGISTRATION_OPEN','now','now')""")
source = (ROOT / "app/api/registrations/route.ts").read_text()
sql = re.search(r'run\("(INSERT INTO registrations.*?)",crypto', source).group(1)
def register(i):
    return db.execute(sql, (f"r{i}", f"TICKET-{i}", "test", str(260000+i), "Test Student", "26IT1", "0900000000", "test@example.invalid", "same-time", "same-time", "test")).rowcount

assert sum(register(i) for i in range(120)) == 105, "Must stop at capacity 105"
assert db.execute("SELECT COUNT(*) FROM registrations").fetchone()[0] == 105
# Shared timestamp is allowed after the migration removes the accidental unique index.
assert db.execute("SELECT COUNT(DISTINCT created_at) FROM registrations").fetchone()[0] == 1
db.execute("UPDATE registrations SET status='CANCELLED' WHERE id='r0'")
try:
    register(1)
    raise AssertionError("Duplicate student should be rejected")
except sqlite3.IntegrityError:
    pass
assert register(120) == 1, "Cancellation frees one seat"
db.execute("UPDATE events SET registration_open=0 WHERE id='test'")
db.execute("UPDATE registrations SET status='CANCELLED' WHERE id='r2'")
assert register(121) == 0, "Closed event must reject registration"
checkin_sql = re.search(r'run\("(INSERT OR IGNORE INTO check_ins.*?)",crypto', (ROOT / "app/api/hub/[...path]/route.ts").read_text()).group(1)
assert db.execute(checkin_sql, ("ci1","r1","now","test@example.invalid")).rowcount == 1
assert db.execute(checkin_sql, ("ci2","r1","later","test@example.invalid")).rowcount == 0
db.execute("INSERT INTO teams (id,event_id,name) VALUES ('t1','test','Team 1')")
db.execute("INSERT INTO event_stations (id,event_id,station_number,title,description) VALUES ('s1','test',1,'Station 1','Test')")
score_sql = re.search(r'run\("(INSERT INTO scores.*?)",crypto', (ROOT / "app/api/hub/[...path]/route.ts").read_text()).group(1)
db.execute(score_sql, ("score1","t1","s1",20,"initial","judge@example.invalid","now"))
db.execute(score_sql, ("score2","t1","s1",30,"corrected","judge@example.invalid","later"))
assert db.execute("SELECT COUNT(*),SUM(points) FROM scores").fetchone() == (1,30)
assert db.execute("PRAGMA foreign_key_check").fetchall() == []
print("PASS: migrations, capacity 105, shared timestamps, duplicate MSSV, cancelled-seat release, closed registration, idempotent check-in, score update, foreign keys.")
