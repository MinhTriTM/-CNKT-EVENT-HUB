"""Lịch đồng bộ; giờ địa phương Việt Nam. Không chứng minh an toàn đường đi."""
import csv
from datetime import datetime, timedelta

def tao_lich(tram_khoi_dau, bat_dau="2026-09-13 15:10", vong=(1, 2, 3, 7, 6, 4, 5), phut_choi=6, phut_giai=2, phut_di=10, doi_thua=None):
    for values in (tram_khoi_dau, vong):
        if len(values) != 7 or any(type(x) is not int for x in values) or set(values) != set(range(1, 8)):
            raise ValueError("Cần đúng bảy trạm khác nhau từ 1 đến 7.")
    if any(type(x) is not int for x in (phut_choi, phut_giai, phut_di)) or phut_choi < 1 or phut_giai < 0 or phut_di < 1:
        raise ValueError("Thời lượng không hợp lệ.")
    if doi_thua is not None and (type(doi_thua) is not int or not 1 <= doi_thua <= 7 or tram_khoi_dau[doi_thua - 1] != 4):
        raise ValueError("Đội thua phải xuất phát tại trạm 4.")
    start = datetime.strptime(bat_dau, "%Y-%m-%d %H:%M")
    span = phut_choi + phut_giai + phut_di
    rows = []
    for luot in range(7):
        begin = start + timedelta(minutes=luot * span)
        row = {"Lượt": luot + 1, "Bắt đầu": begin.strftime("%d/%m/%Y %H:%M"), "Hết lượt": (begin + timedelta(minutes=span)).strftime("%H:%M")}
        for doi, tram in enumerate(tram_khoi_dau, 1):
            row[f"Đội {doi}"] = vong[(vong.index(tram) + luot) % 7]
        rows.append(row)
    return rows

if __name__ == "__main__":
    try:
        starts = [int(x.strip()) for x in input("Trạm bắt đầu của 7 đội, phân cách bằng dấu phẩy: ").split(",")]
        loser = int(input("Số đội thua ở trung tâm (1–7): "))
        rows = tao_lich(starts, doi_thua=loser)
        with open("lich-k26.csv", "w", encoding="utf-8-sig", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=rows[0].keys())
            writer.writeheader()
            writer.writerows(rows)
        for row in rows:
            print(" | ".join(f"{k}: {v}" for k, v in row.items()))
        print("Đã xuất lich-k26.csv. Hết lượt 7, tất cả về A9.")
    except ValueError as exc:
        print("Không tạo lịch:", exc)
        raise SystemExit(1)
