# Teambuilding K26 — bộ mật thư và điều phối
Bản biên soạn 10/09/2026. Dành cho Ban tổ chức Khoa Công nghệ và Kỹ thuật, Trường Đại học Đồng Tháp. Nội dung đáp án trong tài liệu này không phát nguyên bộ cho người chơi.
105 sinh viên, 7 đội, dự kiến 15 người/đội. Tập trung 14:45 ngày 13/09/2026 tại A9 theo thông tin BTC cung cấp. Thời gian lượt chơi và thể lệ bổ sung bên dưới là phương án đề xuất để BTC chốt.

## 1. Phân biệt 49 hướng và số phiếu thực tế
- 7 hướng trung tâm → trạm 1–7.
- 42 hướng trạm i → trạm j với i khác j.
- Tổng ngân hàng yêu cầu: 49 hướng. Thêm 7 biến thể trạm cuối → A9.
- Một đội đi đúng 7 trạm nhận 1 phiếu xuất phát + 6 phiếu chuyển trạm + 1 phiếu về A9 = 8 phiếu. Cả 7 đội có 56 lượt phát.
- Nếu dùng 7 mẫu chung theo vòng xoay: 7 mẫu phần mảnh ghép × 7 đội = 49 lần thu mảnh; vẫn cần 7 phiếu xuất phát riêng.
- Trong vòng cố định, chỉ 7 hướng chuyển trạm của vòng được sử dụng; mỗi hướng xuất hiện 6 lần trong 42 lần chuyển trạm. Không phát tất cả 49 hướng cho mỗi đội.

## 2. Cơ chế hai lớp và lời giải cuối
Lớp A dẫn đến địa điểm tiếp theo. Lớp B trả mảnh của TRẠM VỪA HOÀN THÀNH. Thiết kế này bảo đảm đội xuất phát ở trạm nào cũng thu đủ 7 mảnh. Phiếu xuất phát cho lời chúc KHỞI HÀNH, không tính vào câu cuối. Phiếu cuối thay lớp A thành về A9 nhưng giữ lớp B của trạm cuối.
Câu đề xuất: **KẾT NỐI ĐAM MÊ — BẢN LĨNH TIÊN PHONG.** Đây là thông điệp dùng cho trò chơi, không khẳng định là khẩu hiệu chính thức của trường/khoa. Có 7 mảnh nhưng 8 từ: KẾT | NỐI | ĐAM | MÊ | BẢN | LĨNH | TIÊN PHONG.
Câu khá dễ đoán khi đã có vài mảnh; chỉ tiếp nhận đáp án sau đủ 7 dấu xác nhận. Nếu thông điệp đã xuất hiện trên vé hoặc truyền thông, nên chọn câu cuối khác trước ngày tổ chức. Ngân hàng dưới đây là 7 nhóm phương pháp với tham số theo hướng đi, không phải 49 kỹ thuật khác nhau.
Mã Cxy và Ri0 dành riêng cho BTC, vì chúng tiết lộ hướng. Bản phát người chơi dùng số phiếu theo đội/lượt. Không phát trước cả bộ 8 thẻ; phiếu B không in sẵn số thứ tự trong câu.

## 3. Địa điểm và GPS
Tọa độ do người dùng cung cấp, chưa khảo sát thực địa. Sơ đồ đính kèm là minh họa, không georeference.
| Mã | Trò chơi | Địa điểm | GPS |
| --- | --- | --- | --- |
| D00 | Trung tâm | Sân A9 | 10.419312, 105.644340 |
| D01 | Vượt đầm lầy | Sân đá banh | 10.420777, 105.644399 |
| D02 | Ra-đa dẫn đường | Khu T | 10.419337, 105.645022 |
| D03 | Tháp ly tốc độ | Trước tòa H2 | 10.419688, 105.644049 |
| D04 | Tìm bi trong hồ | Hồ bơi | 10.422329, 105.640870 |
| D05 | Bảo vệ bong bóng | Đường chạy C1 | 10.421667, 105.641517 |
| D06 | Chuyền vòng | Sân C2, giữa C1–C2 | 10.422046, 105.641630 |
| D07 | Truy tìm kho báu | Sân bóng rổ, gần B4 | 10.421665, 105.642891 |

## 4. Lịch không trùng trạm
Đầu vào là một hoán vị 1–7, mỗi đội bắt đầu tại một trạm khác nhau. Với vòng bất kỳ gồm đủ 7 trạm, trạm của đội ở lượt r là phần tử tại (vị trí xuất phát trong vòng + r) modulo 7.
Vòng gốc: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 1. Vòng đề xuất theo tọa độ: **1 → 2 → 3 → 7 → 6 → 4 → 5 → 1**.
Tính Haversine từ tọa độ đã cho: A9→4 khoảng 507 m; 3→4 khoảng 455 m. Vòng đề xuất có chặng thẳng dài nhất khoảng 330 m. Đây là khoảng cách đường chim bay, không phải chiều dài lối đi thực tế và không chứng minh không va chạm. Cần khảo sát cổng, đường đi, khu chờ và lối giao nhau.
Giả định đi bộ 1 m/s thì 455 m đã cần khoảng 7 phút 35 giây theo đường thẳng; do đó không chốt 4 phút di chuyển chỉ từ mã Python ban đầu.
Đề xuất: 6 phút chơi + 2 phút giải + 10 phút di chuyển/chờ = 18 phút/lượt. 7 lượt = 126 phút. Khởi đầu dự kiến 15:10, hết lượt 7 lúc 17:16; lượt cuối dùng phần di chuyển để về A9. Thay đổi cấu hình sau khi đi thử.
Hoán vị chỉ bảo đảm phân công một đội/trạm/lượt. Nếu các đội bắt đầu lệch hoặc tự chuyển sớm, bảo đảm này không còn mô tả thực tế. Dùng đồng hồ và hiệu lệnh chung, điểm chờ riêng, giới hạn chơi và quy tắc DNF.
Đội thua tại A9 làm thử thách nhẹ 45–60 giây rồi đi trạm 4; sáu đội còn lại nhận 1, 2, 3, 5, 6, 7. Toàn bộ thời gian triển khai phải hoàn tất TRƯỚC giờ chung. Nếu đội 4 chưa đến, BTC dịch giờ chung; không cho sáu đội chơi sớm.
Mã Python độc lập, không cần pandas: [scripts/xep-lich-k26.py](../scripts/xep-lich-k26.py).

### Lịch minh họa: đội n bắt đầu trạm n
| Lượt | Giờ | Đội 1 | Đội 2 | Đội 3 | Đội 4 | Đội 5 | Đội 6 | Đội 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| 1 | 15:10–15:28 | T1 | T2 | T3 | T4 | T5 | T6 | T7 |
| 2 | 15:28–15:46 | T2 | T3 | T7 | T5 | T1 | T4 | T6 |
| 3 | 15:46–16:04 | T3 | T7 | T6 | T1 | T2 | T5 | T4 |
| 4 | 16:04–16:22 | T7 | T6 | T4 | T2 | T3 | T1 | T5 |
| 5 | 16:22–16:40 | T6 | T4 | T5 | T3 | T7 | T2 | T1 |
| 6 | 16:40–16:58 | T4 | T5 | T1 | T7 | T6 | T3 | T2 |
| 7 | 16:58–17:16 | T5 | T1 | T2 | T6 | T4 | T7 | T3 |
### Phiếu phát theo từng đội trong ví dụ
| Đội | Xuất phát | Sáu phiếu chuyển | Phiếu về |
| --- | --- | --- | --- |

| 1 | C01 | C12, C23, C37, C76, C64, C45 | R50 |
| 2 | C02 | C23, C37, C76, C64, C45, C51 | R10 |
| 3 | C03 | C37, C76, C64, C45, C51, C12 | R20 |
| 4 | C04 | C45, C51, C12, C23, C37, C76 | R60 |
| 5 | C05 | C51, C12, C23, C37, C76, C64 | R40 |
| 6 | C06 | C64, C45, C51, C12, C23, C37 | R70 |
| 7 | C07 | C76, C64, C45, C51, C12, C23 | R30 |
## 5. Bảng tra phát kèm người chơi
A1Z26: A=1 B=2 C=3 D=4 E=5 F=6 G=7 H=8 I=9 J=10 K=11 L=12 M=13 N=14 O=15 P=16 Q=17 R=18 S=19 T=20 U=21 V=22 W=23 X=24 Y=25 Z=26. Morse: N=-. O=--- I=.. . Nguyên tố: H=1 He=2 Li=3 Be=4 B=5 C=6 N=7 Al=13. Quy ước DNA của trò chơi: A=00 C=01 G=10 T=11. Tiếng Anh: ONE=1 TWO=2 THREE=3 FOUR=4 FIVE=5 SIX=6 SEVEN=7. ASCII: E=69 G=71 H=72 I=73 N=78 O=79 P=80 T=84. Caesar: bảng A–Z quay vòng. Nhị phân: các vị trí từ phải sang trái là 1, 2, 4, 8, 16, 32, 64, 128.
Bảng địa điểm D00–D07 ở mục 3 được phát cùng. Chỉ giải theo quy ước in trên giấy; không yêu cầu thuộc lòng kiến thức chuyên ngành hoặc dùng mạng.

## 6. Toàn bộ 49 mật thư

### C01 — Trung tâm → Trạm 1
**Mặt người chơi — A:** Tìm số nguyên n trong 1–7: 3n + 2 = 5. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: KHOI HANH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Chuyển 2 sang vế phải, chia 3; đọc chuỗi từ phải sang trái.

### C02 — Trung tâm → Trạm 2
**Mặt người chơi — A:** Tìm số nguyên n trong 1–7: 3n + 2 = 8. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: KHOI HANH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Chuyển 2 sang vế phải, chia 3; đọc chuỗi từ phải sang trái.

### C03 — Trung tâm → Trạm 3
**Mặt người chơi — A:** Tìm số nguyên n trong 1–7: 3n + 2 = 11. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: KHOI HANH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Chuyển 2 sang vế phải, chia 3; đọc chuỗi từ phải sang trái.

### C04 — Trung tâm → Trạm 4
**Mặt người chơi — A:** Tìm số nguyên n trong 1–7: 3n + 2 = 14. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: KHOI HANH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Chuyển 2 sang vế phải, chia 3; đọc chuỗi từ phải sang trái.

### C05 — Trung tâm → Trạm 5
**Mặt người chơi — A:** Tìm số nguyên n trong 1–7: 3n + 2 = 17. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: KHOI HANH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Chuyển 2 sang vế phải, chia 3; đọc chuỗi từ phải sang trái.

### C06 — Trung tâm → Trạm 6
**Mặt người chơi — A:** Tìm số nguyên n trong 1–7: 3n + 2 = 20. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: KHOI HANH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Chuyển 2 sang vế phải, chia 3; đọc chuỗi từ phải sang trái.

### C07 — Trung tâm → Trạm 7
**Mặt người chơi — A:** Tìm số nguyên n trong 1–7: 3n + 2 = 23. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: KHOI HANH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Chuyển 2 sang vế phải, chia 3; đọc chuỗi từ phải sang trái.

### C12 — Trạm 1 → Trạm 2
**Mặt người chơi — A:** Tìm n: 2n + 3 = 7. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Tính theo thứ tự: (3² + 2), √25, (4 × 5). Đổi số thành chữ với A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: KET.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Các số của mảnh ghép là 11, 5, 20.

### C13 — Trạm 1 → Trạm 3
**Mặt người chơi — A:** Tìm n: 2n + 3 = 9. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Tính theo thứ tự: (3² + 2), √25, (4 × 5). Đổi số thành chữ với A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: KET.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Các số của mảnh ghép là 11, 5, 20.

### C14 — Trạm 1 → Trạm 4
**Mặt người chơi — A:** Tìm n: 2n + 3 = 11. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Tính theo thứ tự: (3² + 2), √25, (4 × 5). Đổi số thành chữ với A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: KET.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Các số của mảnh ghép là 11, 5, 20.

### C15 — Trạm 1 → Trạm 5
**Mặt người chơi — A:** Tìm n: 2n + 3 = 13. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Tính theo thứ tự: (3² + 2), √25, (4 × 5). Đổi số thành chữ với A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: KET.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Các số của mảnh ghép là 11, 5, 20.

### C16 — Trạm 1 → Trạm 6
**Mặt người chơi — A:** Tìm n: 2n + 3 = 15. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Tính theo thứ tự: (3² + 2), √25, (4 × 5). Đổi số thành chữ với A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: KET.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Các số của mảnh ghép là 11, 5, 20.

### C17 — Trạm 1 → Trạm 7
**Mặt người chơi — A:** Tìm n: 2n + 3 = 17. Đi đến D0n trong bảng địa điểm.
**Mặt người chơi — B:**

Tính theo thứ tự: (3² + 2), √25, (4 × 5). Đổi số thành chữ với A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: KET.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Các số của mảnh ghép là 11, 5, 20.

### C21 — Trạm 2 → Trạm 1
**Mặt người chơi — A:** Một dao động có chu kỳ T = 2 giây. Trong 2 giây có bao nhiêu chu kỳ hoàn chỉnh? Gọi kết quả là n, đi đến D0n.
**Mặt người chơi — B:**

Dùng bảng Morse: -. / --- / .. . Dấu / phân cách chữ cái.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: NOI.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Số chu kỳ = thời gian / chu kỳ. Morse lần lượt là N, O, I.

### C23 — Trạm 2 → Trạm 3
**Mặt người chơi — A:** Một dao động có chu kỳ T = 2 giây. Trong 6 giây có bao nhiêu chu kỳ hoàn chỉnh? Gọi kết quả là n, đi đến D0n.
**Mặt người chơi — B:**

Dùng bảng Morse: -. / --- / .. . Dấu / phân cách chữ cái.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: NOI.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Số chu kỳ = thời gian / chu kỳ. Morse lần lượt là N, O, I.

### C24 — Trạm 2 → Trạm 4
**Mặt người chơi — A:** Một dao động có chu kỳ T = 2 giây. Trong 8 giây có bao nhiêu chu kỳ hoàn chỉnh? Gọi kết quả là n, đi đến D0n.
**Mặt người chơi — B:**

Dùng bảng Morse: -. / --- / .. . Dấu / phân cách chữ cái.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: NOI.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Số chu kỳ = thời gian / chu kỳ. Morse lần lượt là N, O, I.

### C25 — Trạm 2 → Trạm 5
**Mặt người chơi — A:** Một dao động có chu kỳ T = 2 giây. Trong 10 giây có bao nhiêu chu kỳ hoàn chỉnh? Gọi kết quả là n, đi đến D0n.
**Mặt người chơi — B:**

Dùng bảng Morse: -. / --- / .. . Dấu / phân cách chữ cái.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: NOI.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Số chu kỳ = thời gian / chu kỳ. Morse lần lượt là N, O, I.

### C26 — Trạm 2 → Trạm 6
**Mặt người chơi — A:** Một dao động có chu kỳ T = 2 giây. Trong 12 giây có bao nhiêu chu kỳ hoàn chỉnh? Gọi kết quả là n, đi đến D0n.
**Mặt người chơi — B:**

Dùng bảng Morse: -. / --- / .. . Dấu / phân cách chữ cái.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: NOI.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Số chu kỳ = thời gian / chu kỳ. Morse lần lượt là N, O, I.

### C27 — Trạm 2 → Trạm 7
**Mặt người chơi — A:** Một dao động có chu kỳ T = 2 giây. Trong 14 giây có bao nhiêu chu kỳ hoàn chỉnh? Gọi kết quả là n, đi đến D0n.
**Mặt người chơi — B:**

Dùng bảng Morse: -. / --- / .. . Dấu / phân cách chữ cái.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: NOI.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Số chu kỳ = thời gian / chu kỳ. Morse lần lượt là N, O, I.

### C31 — Trạm 3 → Trạm 1
**Mặt người chơi — A:** Tìm số hiệu nguyên tử Z của H. Đặt n = Z, đi đến D0n. Dùng bảng nguyên tố được phát.
**Mặt người chơi — B:**

Lấy số hiệu nguyên tử Z của Be, H, Al rồi đổi A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: DAM.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Be=4, H=1, Al=13.

### C32 — Trạm 3 → Trạm 2
**Mặt người chơi — A:** Tìm số hiệu nguyên tử Z của He. Đặt n = Z, đi đến D0n. Dùng bảng nguyên tố được phát.
**Mặt người chơi — B:**

Lấy số hiệu nguyên tử Z của Be, H, Al rồi đổi A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: DAM.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Be=4, H=1, Al=13.

### C34 — Trạm 3 → Trạm 4
**Mặt người chơi — A:** Tìm số hiệu nguyên tử Z của Be. Đặt n = Z, đi đến D0n. Dùng bảng nguyên tố được phát.
**Mặt người chơi — B:**

Lấy số hiệu nguyên tử Z của Be, H, Al rồi đổi A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: DAM.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Be=4, H=1, Al=13.

### C35 — Trạm 3 → Trạm 5
**Mặt người chơi — A:** Tìm số hiệu nguyên tử Z của B. Đặt n = Z, đi đến D0n. Dùng bảng nguyên tố được phát.
**Mặt người chơi — B:**

Lấy số hiệu nguyên tử Z của Be, H, Al rồi đổi A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: DAM.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Be=4, H=1, Al=13.

### C36 — Trạm 3 → Trạm 6
**Mặt người chơi — A:** Tìm số hiệu nguyên tử Z của C. Đặt n = Z, đi đến D0n. Dùng bảng nguyên tố được phát.
**Mặt người chơi — B:**

Lấy số hiệu nguyên tử Z của Be, H, Al rồi đổi A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: DAM.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Be=4, H=1, Al=13.

### C37 — Trạm 3 → Trạm 7
**Mặt người chơi — A:** Tìm số hiệu nguyên tử Z của N. Đặt n = Z, đi đến D0n. Dùng bảng nguyên tố được phát.
**Mặt người chơi — B:**

Lấy số hiệu nguyên tử Z của Be, H, Al rồi đổi A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: DAM.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Be=4, H=1, Al=13.

### C41 — Trạm 4 → Trạm 1
**Mặt người chơi — A:** Quy ước A=00, C=01, G=10, T=11. Đổi AC thành số nhị phân 4 bit rồi thập phân n. Đi đến D0n.
**Mặt người chơi — B:**

Quy ước riêng của trò chơi: A=00, C=01, G=10, T=11. Giải ATC / ACC thành hai số nhị phân, đổi sang thập phân rồi A1Z26. Không dùng mã di truyền hay nguyên tắc bổ sung DNA.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: ME.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** ATC = 001101 = 13; ACC = 000101 = 5.

### C42 — Trạm 4 → Trạm 2
**Mặt người chơi — A:** Quy ước A=00, C=01, G=10, T=11. Đổi AG thành số nhị phân 4 bit rồi thập phân n. Đi đến D0n.
**Mặt người chơi — B:**

Quy ước riêng của trò chơi: A=00, C=01, G=10, T=11. Giải ATC / ACC thành hai số nhị phân, đổi sang thập phân rồi A1Z26. Không dùng mã di truyền hay nguyên tắc bổ sung DNA.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: ME.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** ATC = 001101 = 13; ACC = 000101 = 5.

### C43 — Trạm 4 → Trạm 3
**Mặt người chơi — A:** Quy ước A=00, C=01, G=10, T=11. Đổi AT thành số nhị phân 4 bit rồi thập phân n. Đi đến D0n.
**Mặt người chơi — B:**

Quy ước riêng của trò chơi: A=00, C=01, G=10, T=11. Giải ATC / ACC thành hai số nhị phân, đổi sang thập phân rồi A1Z26. Không dùng mã di truyền hay nguyên tắc bổ sung DNA.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: ME.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** ATC = 001101 = 13; ACC = 000101 = 5.

### C45 — Trạm 4 → Trạm 5
**Mặt người chơi — A:** Quy ước A=00, C=01, G=10, T=11. Đổi CC thành số nhị phân 4 bit rồi thập phân n. Đi đến D0n.
**Mặt người chơi — B:**

Quy ước riêng của trò chơi: A=00, C=01, G=10, T=11. Giải ATC / ACC thành hai số nhị phân, đổi sang thập phân rồi A1Z26. Không dùng mã di truyền hay nguyên tắc bổ sung DNA.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: ME.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** ATC = 001101 = 13; ACC = 000101 = 5.

### C46 — Trạm 4 → Trạm 6
**Mặt người chơi — A:** Quy ước A=00, C=01, G=10, T=11. Đổi CG thành số nhị phân 4 bit rồi thập phân n. Đi đến D0n.
**Mặt người chơi — B:**

Quy ước riêng của trò chơi: A=00, C=01, G=10, T=11. Giải ATC / ACC thành hai số nhị phân, đổi sang thập phân rồi A1Z26. Không dùng mã di truyền hay nguyên tắc bổ sung DNA.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: ME.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** ATC = 001101 = 13; ACC = 000101 = 5.

### C47 — Trạm 4 → Trạm 7
**Mặt người chơi — A:** Quy ước A=00, C=01, G=10, T=11. Đổi CT thành số nhị phân 4 bit rồi thập phân n. Đi đến D0n.
**Mặt người chơi — B:**

Quy ước riêng của trò chơi: A=00, C=01, G=10, T=11. Giải ATC / ACC thành hai số nhị phân, đổi sang thập phân rồi A1Z26. Không dùng mã di truyền hay nguyên tắc bổ sung DNA.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: ME.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** ATC = 001101 = 13; ACC = 000101 = 5.

### C51 — Trạm 5 → Trạm 1
**Mặt người chơi — A:** Đếm số từ ngăn bởi khoảng trắng trong dòng “BẠN”. Gọi kết quả là n, đi đến D0n.
**Mặt người chơi — B:**

Đọc chữ đầu từng dòng, giữ nguyên thứ tự:
Bền lòng vượt hết chông gai.
Ai cùng chung sức, đường dài hóa gần.
Nắm tay viết tiếp mùa xuân.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: BAN.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Đọc B, A, N ở đầu ba dòng.

### C52 — Trạm 5 → Trạm 2
**Mặt người chơi — A:** Đếm số từ ngăn bởi khoảng trắng trong dòng “BẠN CÙNG”. Gọi kết quả là n, đi đến D0n.
**Mặt người chơi — B:**

Đọc chữ đầu từng dòng, giữ nguyên thứ tự:
Bền lòng vượt hết chông gai.
Ai cùng chung sức, đường dài hóa gần.
Nắm tay viết tiếp mùa xuân.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: BAN.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Đọc B, A, N ở đầu ba dòng.

### C53 — Trạm 5 → Trạm 3
**Mặt người chơi — A:** Đếm số từ ngăn bởi khoảng trắng trong dòng “BẠN CÙNG NHAU”. Gọi kết quả là n, đi đến D0n.
**Mặt người chơi — B:**

Đọc chữ đầu từng dòng, giữ nguyên thứ tự:
Bền lòng vượt hết chông gai.
Ai cùng chung sức, đường dài hóa gần.
Nắm tay viết tiếp mùa xuân.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: BAN.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Đọc B, A, N ở đầu ba dòng.

### C54 — Trạm 5 → Trạm 4
**Mặt người chơi — A:** Đếm số từ ngăn bởi khoảng trắng trong dòng “BẠN CÙNG NHAU BƯỚC”. Gọi kết quả là n, đi đến D0n.
**Mặt người chơi — B:**

Đọc chữ đầu từng dòng, giữ nguyên thứ tự:
Bền lòng vượt hết chông gai.
Ai cùng chung sức, đường dài hóa gần.
Nắm tay viết tiếp mùa xuân.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: BAN.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Đọc B, A, N ở đầu ba dòng.

### C56 — Trạm 5 → Trạm 6
**Mặt người chơi — A:** Đếm số từ ngăn bởi khoảng trắng trong dòng “BẠN CÙNG NHAU BƯỚC QUA THỬ”. Gọi kết quả là n, đi đến D0n.
**Mặt người chơi — B:**

Đọc chữ đầu từng dòng, giữ nguyên thứ tự:
Bền lòng vượt hết chông gai.
Ai cùng chung sức, đường dài hóa gần.
Nắm tay viết tiếp mùa xuân.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: BAN.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Đọc B, A, N ở đầu ba dòng.

### C57 — Trạm 5 → Trạm 7
**Mặt người chơi — A:** Đếm số từ ngăn bởi khoảng trắng trong dòng “BẠN CÙNG NHAU BƯỚC QUA THỬ THÁCH”. Gọi kết quả là n, đi đến D0n.
**Mặt người chơi — B:**

Đọc chữ đầu từng dòng, giữ nguyên thứ tự:
Bền lòng vượt hết chông gai.
Ai cùng chung sức, đường dài hóa gần.
Nắm tay viết tiếp mùa xuân.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: BAN.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Đọc B, A, N ở đầu ba dòng.

### C61 — Trạm 6 → Trạm 1
**Mặt người chơi — A:** Your next destination is station ONE. Đổi số tiếng Anh thành n và tra D0n.
**Mặt người chơi — B:**

Three steps back reveal the word. Giải OLQK bằng bảng chữ cái A–Z, quay vòng khi cần.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: LINH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Lùi từng chữ 3 vị trí: O→L, L→I, Q→N, K→H.

### C62 — Trạm 6 → Trạm 2
**Mặt người chơi — A:** Your next destination is station TWO. Đổi số tiếng Anh thành n và tra D0n.
**Mặt người chơi — B:**

Three steps back reveal the word. Giải OLQK bằng bảng chữ cái A–Z, quay vòng khi cần.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: LINH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Lùi từng chữ 3 vị trí: O→L, L→I, Q→N, K→H.

### C63 — Trạm 6 → Trạm 3
**Mặt người chơi — A:** Your next destination is station THREE. Đổi số tiếng Anh thành n và tra D0n.
**Mặt người chơi — B:**

Three steps back reveal the word. Giải OLQK bằng bảng chữ cái A–Z, quay vòng khi cần.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: LINH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Lùi từng chữ 3 vị trí: O→L, L→I, Q→N, K→H.

### C64 — Trạm 6 → Trạm 4
**Mặt người chơi — A:** Your next destination is station FOUR. Đổi số tiếng Anh thành n và tra D0n.
**Mặt người chơi — B:**

Three steps back reveal the word. Giải OLQK bằng bảng chữ cái A–Z, quay vòng khi cần.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: LINH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Lùi từng chữ 3 vị trí: O→L, L→I, Q→N, K→H.

### C65 — Trạm 6 → Trạm 5
**Mặt người chơi — A:** Your next destination is station FIVE. Đổi số tiếng Anh thành n và tra D0n.
**Mặt người chơi — B:**

Three steps back reveal the word. Giải OLQK bằng bảng chữ cái A–Z, quay vòng khi cần.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: LINH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Lùi từng chữ 3 vị trí: O→L, L→I, Q→N, K→H.

### C67 — Trạm 6 → Trạm 7
**Mặt người chơi — A:** Your next destination is station SEVEN. Đổi số tiếng Anh thành n và tra D0n.
**Mặt người chơi — B:**

Three steps back reveal the word. Giải OLQK bằng bảng chữ cái A–Z, quay vòng khi cần.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: LINH.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Lùi từng chữ 3 vị trí: O→L, L→I, Q→N, K→H.

### C71 — Trạm 7 → Trạm 1
**Mặt người chơi — A:** Đổi số nhị phân 001 sang thập phân n. Đi đến D0n.
**Mặt người chơi — B:**

Giải ASCII 8 bit: 01010100 01001001 01000101 01001110 / 01010000 01001000 01001111 01001110 01000111. Dấu / phân cách từ.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: TIEN PHONG.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Đổi từng nhóm 8 bit sang mã ASCII; dấu / là khoảng trắng.

### C72 — Trạm 7 → Trạm 2
**Mặt người chơi — A:** Đổi số nhị phân 010 sang thập phân n. Đi đến D0n.
**Mặt người chơi — B:**

Giải ASCII 8 bit: 01010100 01001001 01000101 01001110 / 01010000 01001000 01001111 01001110 01000111. Dấu / phân cách từ.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: TIEN PHONG.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Đổi từng nhóm 8 bit sang mã ASCII; dấu / là khoảng trắng.

### C73 — Trạm 7 → Trạm 3
**Mặt người chơi — A:** Đổi số nhị phân 011 sang thập phân n. Đi đến D0n.
**Mặt người chơi — B:**

Giải ASCII 8 bit: 01010100 01001001 01000101 01001110 / 01010000 01001000 01001111 01001110 01000111. Dấu / phân cách từ.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: TIEN PHONG.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Đổi từng nhóm 8 bit sang mã ASCII; dấu / là khoảng trắng.

### C74 — Trạm 7 → Trạm 4
**Mặt người chơi — A:** Đổi số nhị phân 100 sang thập phân n. Đi đến D0n.
**Mặt người chơi — B:**

Giải ASCII 8 bit: 01010100 01001001 01000101 01001110 / 01010000 01001000 01001111 01001110 01000111. Dấu / phân cách từ.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: TIEN PHONG.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Đổi từng nhóm 8 bit sang mã ASCII; dấu / là khoảng trắng.

### C75 — Trạm 7 → Trạm 5
**Mặt người chơi — A:** Đổi số nhị phân 101 sang thập phân n. Đi đến D0n.
**Mặt người chơi — B:**

Giải ASCII 8 bit: 01010100 01001001 01000101 01001110 / 01010000 01001000 01001111 01001110 01000111. Dấu / phân cách từ.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: TIEN PHONG.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Đổi từng nhóm 8 bit sang mã ASCII; dấu / là khoảng trắng.

### C76 — Trạm 7 → Trạm 6
**Mặt người chơi — A:** Đổi số nhị phân 110 sang thập phân n. Đi đến D0n.
**Mặt người chơi — B:**

Giải ASCII 8 bit: 01010100 01001001 01000101 01001110 / 01010000 01001000 01001111 01001110 01000111. Dấu / phân cách từ.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: TIEN PHONG.
**Gợi ý 1:** Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.
**Gợi ý 2:** Đổi từng nhóm 8 bit sang mã ASCII; dấu / là khoảng trắng.

## 7. Bảy phiếu về A9

### R10 — Trạm 1 → Trung tâm
**A:** Đã thu đủ bảy dấu trạm: trở về sân có ký hiệu A(3²), nơi cả đội đã khởi hành. Tra D00 trên bảng địa điểm.
**B:** Tính theo thứ tự: (3² + 2), √25, (4 × 5). Đổi số thành chữ với A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: KET.
**Gợi ý:** Các số của mảnh ghép là 11, 5, 20.

### R20 — Trạm 2 → Trung tâm
**A:** Đã thu đủ bảy dấu trạm: trở về sân có ký hiệu A(3²), nơi cả đội đã khởi hành. Tra D00 trên bảng địa điểm.
**B:** Dùng bảng Morse: -. / --- / .. . Dấu / phân cách chữ cái.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: NOI.
**Gợi ý:** Số chu kỳ = thời gian / chu kỳ. Morse lần lượt là N, O, I.

### R30 — Trạm 3 → Trung tâm
**A:** Đã thu đủ bảy dấu trạm: trở về sân có ký hiệu A(3²), nơi cả đội đã khởi hành. Tra D00 trên bảng địa điểm.
**B:** Lấy số hiệu nguyên tử Z của Be, H, Al rồi đổi A=1, …, Z=26.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: DAM.
**Gợi ý:** Be=4, H=1, Al=13.

### R40 — Trạm 4 → Trung tâm
**A:** Đã thu đủ bảy dấu trạm: trở về sân có ký hiệu A(3²), nơi cả đội đã khởi hành. Tra D00 trên bảng địa điểm.
**B:** Quy ước riêng của trò chơi: A=00, C=01, G=10, T=11. Giải ATC / ACC thành hai số nhị phân, đổi sang thập phân rồi A1Z26. Không dùng mã di truyền hay nguyên tắc bổ sung DNA.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: ME.
**Gợi ý:** ATC = 001101 = 13; ACC = 000101 = 5.

### R50 — Trạm 5 → Trung tâm
**A:** Đã thu đủ bảy dấu trạm: trở về sân có ký hiệu A(3²), nơi cả đội đã khởi hành. Tra D00 trên bảng địa điểm.
**B:** Đọc chữ đầu từng dòng, giữ nguyên thứ tự:
Bền lòng vượt hết chông gai.
Ai cùng chung sức, đường dài hóa gần.
Nắm tay viết tiếp mùa xuân.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: BAN.
**Gợi ý:** Đọc B, A, N ở đầu ba dòng.

### R60 — Trạm 6 → Trung tâm
**A:** Đã thu đủ bảy dấu trạm: trở về sân có ký hiệu A(3²), nơi cả đội đã khởi hành. Tra D00 trên bảng địa điểm.
**B:** Three steps back reveal the word. Giải OLQK bằng bảng chữ cái A–Z, quay vòng khi cần.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: LINH.
**Gợi ý:** Lùi từng chữ 3 vị trí: O→L, L→I, Q→N, K→H.

### R70 — Trạm 7 → Trung tâm
**A:** Đã thu đủ bảy dấu trạm: trở về sân có ký hiệu A(3²), nơi cả đội đã khởi hành. Tra D00 trên bảng địa điểm.
**B:** Giải ASCII 8 bit: 01010100 01001001 01000101 01001110 / 01010000 01001000 01001111 01001110 01000111. Dấu / phân cách từ.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: TIEN PHONG.
**Gợi ý:** Đổi từng nhóm 8 bit sang mã ASCII; dấu / là khoảng trắng.

## 8. Minigame trung tâm và khiêu chiến
Hình phạt mở màn: tạo dáng chung hoặc hô một câu đồng đội trong 45–60 giây; cho phép phương án thay thế. Không phạt bằng vận động nguy hiểm hay xuống nước. Trạm hồ bơi mặc định tổ chức tìm bi trong chậu tại khu khô được phép, không mặc định sinh viên phải vào hồ.
Sau khi bảy đội quay lại và có đủ dấu, mở lượt giải chung 3 phút. Nếu chưa có lời giải đúng, bốc thăm thứ tự P1–P7 (đây là thứ tự lượt, không phải cố định tên Đội 1–7).
1. Mỗi đội có đúng một lượt khiêu chiến chủ động, chọn bất kỳ đội khác.
2. Một đội có thể nhận khiêu chiến nhiều lần, tối đa sáu lần từ sáu đội còn lại trong 7 trận.
3. Thắng tấn công hoặc phòng thủ: +1 điểm và +1 gợi ý. Thua: 0, không trừ.
4. Đối thủ từ chối: đội khiêu chiến thắng; quyền tấn công riêng của đội từ chối vẫn còn.
5. Mỗi trận chỉ một bên thắng. Hòa: câu phụ 30 giây, sau đó bốc thăm theo thể lệ công bố.
6. Minigame đề xuất: mỗi bên 2 đại diện, cùng bộ ghép 4 mảnh, 60 giây. Chuẩn bị 7 bộ độ khó tương đương.
7. Nếu đã mở khiêu chiến, hoàn tất cả 7 lượt rồi nhận lời giải chung thêm 2 phút để đội lượt sau không mất cơ hội.
8. Một đội tối đa 7 chiến thắng (1 tấn công + 6 phòng thủ). Toàn bộ vòng chỉ có 7 chiến thắng được trao nếu cả 7 trận phân định.
Mỗi đội nhận gợi ý theo số thắng của chính đội đó. Chuẩn bị nhiều bản mỗi gợi ý; không chỉ in tổng cộng 7 tờ. Việc nhận lại trận không được tạo thưởng lần hai. Không tự thêm giới hạn số lần phòng thủ vì trái yêu cầu đã nêu.

### Gợi ý tăng dần
1. Đáp án là một thông điệp đồng đội được sáng tác cho chương trình, không phải địa danh.
2. Thông điệp gồm hai vế, mỗi vế bốn từ.
3. Vế đầu nói về sự gắn kết cùng niềm yêu thích.
4. Vế sau nói về phẩm chất và tinh thần đi đầu.
5. Hai từ cuối là TIÊN PHONG.
6. Vế đầu mở bằng KẾT NỐI; vế sau mở bằng BẢN LĨNH.
7. KẾT NỐI ĐAM MÊ — BẢN LĨNH TIÊN PHONG.

## 9. Điểm và phân hạng
Mỗi trạm đo thời gian từ hiệu lệnh bắt đầu đến khi đạt tiêu chí hoàn thành đã công bố. Không cộng thời gian di chuyển, chờ, giải mật thư, hoặc hình phạt trung tâm. Cùng điều kiện dụng cụ, cùng số người tham gia và cùng trọng tài/quy trình đo.
Sau đủ 7 kết quả tại một trạm: nhanh nhất 7 điểm, rồi 6, 5, 4, 3, 2, 1. Đồng thời gian chia trung bình điểm của các vị trí chiếm chỗ: hai đội nhanh nhất cùng 6,5; đội tiếp theo 5. Nếu bắt buộc điểm nguyên, phải công bố tiêu chí phụ trước.
Hết giới hạn chơi: DNF, 0 điểm. Khi xét thời gian thay thế, đội ít DNF hơn đứng trước; thời gian mỗi DNF bằng giới hạn trạm (ví dụ 360 giây). Như vậy bỏ cuộc sớm không có lợi.
Tổng lực = tổng điểm 7 trạm + số thắng khiêu chiến/phòng thủ. Tối đa lý thuyết 49 + 7 = 56 điểm/đội.
Yêu cầu vừa có xếp điểm vừa xét thời gian khi không giải được mật thư cần được tách rõ. Đề xuất hai giải:
- **Giải Mật thư:** đội giải đúng trước nhóm chưa đúng; dùng bài nhận trong cửa sổ chung. Nếu không đội nào đúng: ít DNF hơn → tổng giây chơi thấp hơn → điểm cao hơn → đồng hạng.
- **Giải Tổng lực:** tổng điểm cao hơn → ít DNF hơn → tổng giây thấp hơn → đồng hạng.
Nếu chỉ trao một giải vô địch, BTC cần chọn thứ tự ưu tiên và công bố trước. Không tuyên bố điểm và thời gian đều là tiêu chí cao nhất. Thời điểm BTC nhập câu trả lời trên website không đồng nhất với thời điểm đội nộp bài; bài nhận cùng lúc không phân hạng theo tốc độ thao tác thư ký.

## 10. Ý tưởng mở rộng liên môn
Những dòng ghi “mẫu” là khung biên soạn, chưa phải đề phát chính thức. Các dữ kiện biến động như ngành đào tạo, cơ cấu cơ quan, chức danh, nghị quyết, tin tức cần chốt bộ nguồn theo ngày. In dữ kiện trên phiếu để chấm kỹ năng giải và đọc hiểu, tránh phụ thuộc trí nhớ hoặc kết nối mạng.
| Lĩnh vực | Đề / cách tổ chức | Đáp án / lưu ý |
| --- | --- | --- |
| Toán | Giải 3x − 2 = 13; lấy x làm trạm đến. | x=5 → đường chạy C1. |
| Vật lý | Một vật chuyển động đều 2 m/s trong 3 s. Lấy quãng đường theo mét làm n. | s=6 m → sân C2. |
| Hóa | Lấy Z của nguyên tố N trong bảng được phát. | Z=7 → sân bóng rổ gần B4. |
| Sinh | Cho A↔T, G↔C. Viết chuỗi bổ sung của ATGC; lấy số ký tự làm n. | TACG, bốn ký tự → hồ bơi. |
| Văn | Đọc chữ đầu: Sức trẻ chung đường / Ai cùng tiến bước / Nối những ước mơ. Thêm A(3²). | SAN A9 → trung tâm. Thơ mới sáng tác. |
| Anh | Find the court with hoops near B4. | Sân bóng rổ gần B4 → D07. |
| Sử | Thẻ dữ kiện: Quốc khánh Việt Nam 02/09/1945. Lấy chữ số cuối của năm. | 5 → đường chạy C1; in dữ kiện trên thẻ. |
| Địa lý | Trong bảng GPS tám địa điểm, nơi nào có vĩ độ lớn nhất? | 10.422329 → hồ bơi. Không suy ra đường đi từ khoảng cách thẳng. |
| Tin học | Không cần chạy máy: sum([1, 0, 1]) cho kết quả gì? | 2 → Khu T. |
| DThU | Theo phiếu giới thiệu chính thức, trường thành lập ngày 10/01/2003. Lấy chữ số cuối năm. | 3 → trước H2. Nguồn: https://www.dthu.edu.vn/pView.aspx?idmn=8&idp=4 |
| Khoa / ngành | In bảng ngành đã xác nhận từ website khoa, đánh số 1–7; ghép ba mô tả nghề với đúng ngành, đọc ký tự ở cột khóa. | Mẫu biên soạn cần chốt bảng ngành trước khi phát; không tự gán ngành chưa xác minh. Nguồn: https://cnkt.dthu.edu.vn/ |
| Đoàn / Hội | Phát một phiếu thông tin có nguồn, ngày chốt và ba dòng đánh số; câu hỏi tìm đúng dòng chứa tên tổ chức rồi đọc cột khóa. | BTC điền từ khóa đích sau khi xác minh phiếu; không dùng chức danh đương nhiệm từ trí nhớ. |
| Nghị quyết | Thẻ nguồn ghi 57-NQ/TW, ngày 22/12/2024, Bộ Chính trị. Lấy chữ số hàng đơn vị trừ hàng chục của số nghị quyết. | 7−5=2 → Khu T. Không gọi đây là nghị quyết của Chính phủ. |
| Chính phủ / Quốc hội | Đưa hai đoạn văn bản chính thức, mỗi đoạn gắn một chữ; yêu cầu ghép đúng cơ quan ban hành theo dòng đầu rồi đọc chữ. | Mẫu cần điền văn bản cụ thể đã xác minh; chấm khả năng đọc nguồn, không chấm quan điểm. |
| Tin Việt Nam / thế giới | In ba bản tin ngắn có ngày giờ rõ ràng và các nhãn H, O, I; sắp từ cũ đến mới. | BTC chọn thứ tự cho kết quả HOI hoặc đổi nhãn thành từ khóa cần dùng; khóa bộ tin trước ngày tổ chức. |
| Bản đồ trường | Tìm khoảng sân nằm giữa hai khối C1 và C2 trên sơ đồ. | D06; đối chiếu GPS và biển chỉ dẫn thực tế. |
| Đồng Tháp / Việt Nam | Phát bốn thẻ địa danh và tọa độ đã kiểm chứng, gắn ký tự; sắp từ bắc xuống nam. | Sắp theo vĩ độ giảm; đáp án xác định từ chính bộ dữ kiện in, tránh tên hành chính đã đổi. |
| Atbash | A↔Z, B↔Y,… Giải HZM Z9. | SAN A9 → trung tâm. |
| Đảo chuỗi | Đọc ngược 9A NAS. | SAN A9 → trung tâm. |
| Tọa độ lưới | Đánh hàng 1–3, cột A–C trên sơ đồ in; mỗi ô có một ký tự. Đọc các tọa độ BTC cho theo thứ tự. | Mẫu tùy bản in: khóa bảng lưới và chuỗi tọa độ trước; không dùng pixel ảnh làm GPS. |

## 11. Nguồn dùng cho câu dữ kiện
- [Giới thiệu DThU](https://www.dthu.edu.vn/pView.aspx?idmn=8&idp=4): mốc thành lập 10/01/2003, Quyết định 08/2003/QĐ-TTg.
- [Khoa Công nghệ và Kỹ thuật](https://cnkt.dthu.edu.vn/): nguồn để BTC khóa bảng ngành chính thức, không dùng số ngành chưa đối soát trên thẻ chơi.
- [Toàn văn Nghị quyết 57-NQ/TW](https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-quyet-ve-dot-pha-phat-trien-khoa-hoc-cong-nghe-doi-moi-sang-tao-va-chuyen-doi-so-quoc-gia-119241224180048642.htm): ngày 22/12/2024, Bộ Chính trị; không nhầm cơ quan ban hành với website đăng lại.
- GPS và sơ đồ: tài liệu người dùng cung cấp trong cuộc trao đổi. Các khoảng cách là tính toán từ tọa độ, không phải dữ liệu dẫn đường thực địa.

## 12. Các trang đã bổ sung cho website
| Trang | Chức năng |
| --- | --- |
| /admin/dieu-phoi | Chọn trạm xuất phát, đội thua, vòng xoay, thời lượng; xem lịch, lưu, xuất CSV; sơ đồ và liên kết GPS. |
| /admin/mat-thu | Lọc 49 hướng + 7 thẻ về, chọn bộ 8 phiếu theo đội; bật đáp án riêng BTC; bản in ẩn lời giải. |
| /admin/thoi-gian | Ghi/sửa thời gian đội-trạm trước vòng cuối; tính điểm 7..1, đồng hạng và DNF; xuất kết quả. |
| /admin/khieu-chien | Bốc thăm 7 đội, khóa một lượt tấn công/đội, phòng thủ nhiều lần, từ chối = thua; gợi ý theo số thắng; ghi lời giải cuối. |
| /admin/kich-ban | Kịch bản, quy tắc, câu cuối và kho ý tưởng liên môn. |
Các trang chỉ dành cho OWNER/ADMIN. Dữ liệu điều phối được lưu bền trong D1, cập nhật có kiểm tra phiên bản để chống hai BTC ghi đè lẫn nhau. Đáp án ngân hàng được trả từ API có kiểm tra vai trò; mã nguồn repository vẫn chứa đáp án.
Lịch khóa sau kết quả trạm đầu tiên. Kết quả trạm khóa khi có lời giải cuối đầu tiên hoặc bắt đầu bốc thăm. Kết quả trận đã chốt không có màn hình sửa; kiểm tra hai đội trước khi chốt. Ghi kết quả DNF vẫn cho nhận mảnh để đội có thể hoàn tất hành trình; đây là đề xuất thể lệ.
Giới hạn hiện tại: nhập thời gian thủ công, chưa có đồng hồ đồng bộ/QR trạm; chưa tự xác nhận GPS; chưa nhập lời giải trực tiếp từ thiết bị từng đội; bảng Tổng lực mới ở không gian BTC, chưa thay thế bảng điểm chung công khai. Không tự gắn đội vào trạm hay tạo dữ liệu thi đấu giả.
