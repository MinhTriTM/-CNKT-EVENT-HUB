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
Câu chuẩn BTC: **ĐỔI MỚI SÁNG TẠO — HÒA NHỊP TƯƠNG LAI — CÔNG NGHỆ VÌ CỘNG ĐỒNG.** Thông điệp của chương trình kết nối tinh thần Nghị quyết 57-NQ/TW về phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia với vai trò đóng góp của sinh viên CN&KT cho cộng đồng. Đây là diễn giải giáo dục của chương trình, không phải khẩu hiệu hay trích dẫn chính thức của Trường, Khoa, Đảng bộ hoặc Chính phủ. Có 7 mảnh và 10 từ: Trạm 1: ĐỔI MỚI · 2: SÁNG TẠO · 3: HÒA NHỊP · 4: TƯƠNG LAI · 5: CÔNG NGHỆ · 6: VÌ · 7: CỘNG ĐỒNG.
Bản phát cho đội không mã hóa trực tiếp từng từ. Mỗi mảnh là một dữ kiện ngữ nghĩa để đội tự gọi tên khái niệm, sau đó ghép thành ba vế. Chỉ tiếp nhận đáp án sau đủ 7 dấu xác nhận.
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
Bộ mật thư ba lớp cần thời gian phối hợp. Đề xuất: 6 phút chơi + 5 phút giải + 10 phút di chuyển/chờ = 21 phút/lượt. 7 lượt = 147 phút. Khởi đầu dự kiến 15:10, hết lượt 7 lúc 17:37; lượt cuối dùng phần di chuyển để về A9. Thay đổi cấu hình sau khi đi thử.
Hoán vị chỉ bảo đảm phân công một đội/trạm/lượt. Nếu các đội bắt đầu lệch hoặc tự chuyển sớm, bảo đảm này không còn mô tả thực tế. Dùng đồng hồ và hiệu lệnh chung, điểm chờ riêng, giới hạn chơi và quy tắc DNF.
Đội thua tại A9 làm thử thách nhẹ 45–60 giây rồi đi trạm 4; sáu đội còn lại nhận 1, 2, 3, 5, 6, 7. Toàn bộ thời gian triển khai phải hoàn tất TRƯỚC giờ chung. Nếu đội 4 chưa đến, BTC dịch giờ chung; không cho sáu đội chơi sớm.
Mã Python độc lập, không cần pandas: [scripts/xep-lich-k26.py](../scripts/xep-lich-k26.py).

### Lịch minh họa: đội n bắt đầu trạm n
| Lượt | Giờ | Đội 1 | Đội 2 | Đội 3 | Đội 4 | Đội 5 | Đội 6 | Đội 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| 1 | 15:10–15:31 | T1 | T2 | T3 | T4 | T5 | T6 | T7 |
| 2 | 15:31–15:52 | T2 | T3 | T7 | T5 | T1 | T4 | T6 |
| 3 | 15:52–16:13 | T3 | T7 | T6 | T1 | T2 | T5 | T4 |
| 4 | 16:13–16:34 | T7 | T6 | T4 | T2 | T3 | T1 | T5 |
| 5 | 16:34–16:55 | T6 | T4 | T5 | T3 | T7 | T2 | T1 |
| 6 | 16:55–17:16 | T4 | T5 | T1 | T7 | T6 | T3 | T2 |
| 7 | 17:16–17:37 | T5 | T1 | T2 | T6 | T4 | T7 | T3 |
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
Bảng này chỉ dùng cho lớp A để tìm trạm tiếp theo. Lớp B là mảnh ngữ nghĩa: đọc kỹ dữ kiện, gọi tên khái niệm phù hợp, ghi đáp án riêng của đội và giữ lại để ghép cuối. Khi ghép, ưu tiên nghĩa của cả thông điệp thay vì cố ghép theo số chữ. Những thông tin về văn bản chính sách đã được in trực tiếp trên phiếu; không cần truy cập mạng.
Bảng địa điểm D00–D07 ở mục 3 được phát cùng. Chỉ giải theo quy ước in trên giấy; không yêu cầu thuộc lòng kiến thức chuyên ngành hoặc dùng mạng.

## 6. Toàn bộ 49 mật thư

### C01 — Trung tâm → Trạm 1
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · ATBASH + XOAY

OT — Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
“Gương chữ cái” nghĩa là A↔Z, B↔Y. Sau đó xoay tiến đúng số La Mã: II.

NW — INPPBKIOXY

KIỂM CHỨNG — Đảo ngược chuỗi NW → soi gương bảng chữ → xoay tiến II. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: KHỞI HÀNH.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Atbash + dịch vòng được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Đây là lời chúc xuất phát, không mang đáp án cuối.

### C02 — Trung tâm → Trạm 2
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · MORSE + ĐẢO KHỐI

OT — Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Hãy chia vai: người nhìn, người tính, người ghi.
Em đừng vội tin kết quả đầu tiên vừa tìm được.
Từ đầu dòng cho biết cách đọc: NGHE. Dấu / ngăn chữ, | ngăn khối; hãy đổi Morse, nối các khối theo thứ tự in rồi đọc ngược toàn bộ chuỗi.

NW — ../.-/..../-- | .-/.-./-/-. | ./-..

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: KHỞI HÀNH.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Morse + đảo khối được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Đây là lời chúc xuất phát, không mang đáp án cuối.

### C03 — Trung tâm → Trạm 3
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · Ô VUÔNG 5×5

OT — Từng bước đúng quan trọng hơn một đáp án vội vàng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Lấy chữ đầu: TOA DO. Dùng bảng Polybius: 11=A, 12=B… 15=E; 21=F… 55=Z (I/J chung ô).

NW — 11 12 32 11 42 44 33 15 14

KIỂM CHỨNG — Giải tọa độ rồi đọc chuỗi theo chiều ngược lại. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: KHỞI HÀNH.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Polybius + hoán vị tọa độ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Đây là lời chúc xuất phát, không mang đáp án cuối.

### C04 — Trung tâm → Trạm 4
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · BACON

OT — Người giữ khóa không nên tự giải một mình.
Hãy chia vai: người nhìn, người tính, người ghi.
Im lặng quan sát, rồi mới chọn bước tiếp theo.
Phía trước không xa, nhưng không dành cho người hấp tấp.
Hãy chia vai: người nhìn, người tính, người ghi.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Người giữ khóa không nên tự giải một mình.
Chữ đầu nói NHI PHAN. Quy ước S=0, D=1; mỗi 5 dấu là một chữ A=00000… Z=11001.

NW — SSSDD SSDSS SDDSD DSSDD DSSSD SSSSS SDDSS SSSSD SDDDS SDDSD

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: KHỞI HÀNH.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Bacon + chữ nhị phân được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Đây là lời chúc xuất phát, không mang đáp án cuối.

### C05 — Trung tâm → Trạm 5
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · HÀM AFFINE

OT — Mỗi ký tự đều có lý do xuất hiện trên phiếu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Lúc còn phân vân, hãy trở về điểm bắt đầu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Chữ đầu: MODULO. Đánh A=0…Z=25. Trên bản mã dùng C=(5P+8) mod 26; hãy tìm P, rồi đọc ngược.

NW — QIVQIPZVCX

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: KHỞI HÀNH.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Affine + kiểm tra cơ số được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Đây là lời chúc xuất phát, không mang đáp án cuối.

### C06 — Trung tâm → Trạm 6
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · LƯỚI CỘT

OT — Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Từng bước đúng quan trọng hơn một đáp án vội vàng.
Lấy chữ đầu: DOC COT. Bản mã gồm 4 cột, phát theo thứ tự cột 2 → 4 → 1 → 3. Mỗi cột đọc từ trên xuống; X cuối chỉ là đệm.

NW — EAU TSX DRA NMX

KIỂM CHỨNG — Ghép lại lưới theo thứ tự 2–4–1–3, đọc từng hàng. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: KHỞI HÀNH.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Lưới cột + đọc đường đi được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Đây là lời chúc xuất phát, không mang đáp án cuối.

### C07 — Trung tâm → Trạm 7
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · VIGENÈRE

OT — Khi những dấu hiệu nối lại, lối đi sẽ hiện ra.
Hãy chia vai: người nhìn, người tính, người ghi.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Lấy chữ đầu bốn dòng đầu làm khóa.

NW — A=0…Z=25. Với khóa lặp K, giải P = C − K:
NLBTBHABKF

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: KHỞI HÀNH.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Vigenère + khóa thơ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Đây là lời chúc xuất phát, không mang đáp án cuối.

### C12 — Trạm 1 → Trạm 2
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · HÀM AFFINE

OT — Mỗi ký tự đều có lý do xuất hiện trên phiếu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Lúc còn phân vân, hãy trở về điểm bắt đầu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Chữ đầu: MODULO. Đánh A=0…Z=25. Trên bản mã dùng C=(5P+8) mod 26; hãy tìm P, rồi đọc ngược.

NW — WIRQIPZVCX

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Phiếu nguồn: 57-NQ/TW · Bộ Chính trị · 22/12/2024. Hãy gọi tên hành động làm cái đang có trở nên tốt hơn, khác hơn và hiệu quả hơn. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: ĐỔI MỚI.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Affine + kiểm tra cơ số được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Xem 57-NQ/TW như dữ kiện gợi nghĩa, không cần nhớ nguyên văn tiêu đề.

### C13 — Trạm 1 → Trạm 3
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · LƯỚI CỘT

OT — Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Từng bước đúng quan trọng hơn một đáp án vội vàng.
Lấy chữ đầu: DOC COT. Bản mã gồm 4 cột, phát theo thứ tự cột 2 → 4 → 1 → 3. Mỗi cột đọc từ trên xuống; X cuối chỉ là đệm.

NW — EAX TBX DRA NMX

KIỂM CHỨNG — Ghép lại lưới theo thứ tự 2–4–1–3, đọc từng hàng. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Phiếu nguồn: 57-NQ/TW · Bộ Chính trị · 22/12/2024. Hãy gọi tên hành động làm cái đang có trở nên tốt hơn, khác hơn và hiệu quả hơn. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: ĐỔI MỚI.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Lưới cột + đọc đường đi được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Xem 57-NQ/TW như dữ kiện gợi nghĩa, không cần nhớ nguyên văn tiêu đề.

### C14 — Trạm 1 → Trạm 4
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · VIGENÈRE

OT — Khi những dấu hiệu nối lại, lối đi sẽ hiện ra.
Hãy chia vai: người nhìn, người tính, người ghi.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Lấy chữ đầu bốn dòng đầu làm khóa.

NW — A=0…Z=25. Với khóa lặp K, giải P = C − K:
NLBTBHABYU

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Phiếu nguồn: 57-NQ/TW · Bộ Chính trị · 22/12/2024. Hãy gọi tên hành động làm cái đang có trở nên tốt hơn, khác hơn và hiệu quả hơn. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: ĐỔI MỚI.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Vigenère + khóa thơ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Xem 57-NQ/TW như dữ kiện gợi nghĩa, không cần nhớ nguyên văn tiêu đề.

### C15 — Trạm 1 → Trạm 5
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · ATBASH + XOAY

OT — Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
“Gương chữ cái” nghĩa là A↔Z, B↔Y. Sau đó xoay tiến đúng số La Mã: III.

NW — QCPQCLJPYZ

KIỂM CHỨNG — Đảo ngược chuỗi NW → soi gương bảng chữ → xoay tiến III. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Phiếu nguồn: 57-NQ/TW · Bộ Chính trị · 22/12/2024. Hãy gọi tên hành động làm cái đang có trở nên tốt hơn, khác hơn và hiệu quả hơn. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: ĐỔI MỚI.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Atbash + dịch vòng được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Xem 57-NQ/TW như dữ kiện gợi nghĩa, không cần nhớ nguyên văn tiêu đề.

### C16 — Trạm 1 → Trạm 6
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · MORSE + ĐẢO KHỐI

OT — Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Hãy chia vai: người nhìn, người tính, người ghi.
Em đừng vội tin kết quả đầu tiên vừa tìm được.
Từ đầu dòng cho biết cách đọc: NGHE. Dấu / ngăn chữ, | ngăn khối; hãy đổi Morse, nối các khối theo thứ tự in rồi đọc ngược toàn bộ chuỗi.

NW — ..-/.-/.../-- | .-/.-./-/-. | ./-..

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Phiếu nguồn: 57-NQ/TW · Bộ Chính trị · 22/12/2024. Hãy gọi tên hành động làm cái đang có trở nên tốt hơn, khác hơn và hiệu quả hơn. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: ĐỔI MỚI.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Morse + đảo khối được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Xem 57-NQ/TW như dữ kiện gợi nghĩa, không cần nhớ nguyên văn tiêu đề.

### C17 — Trạm 1 → Trạm 7
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · Ô VUÔNG 5×5

OT — Từng bước đúng quan trọng hơn một đáp án vội vàng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Lấy chữ đầu: TOA DO. Dùng bảng Polybius: 11=A, 12=B… 15=E; 21=F… 55=Z (I/J chung ô).

NW — 54 11 12 32 11 42 44 33 15 14

KIỂM CHỨNG — Giải tọa độ rồi đọc chuỗi theo chiều ngược lại. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Phiếu nguồn: 57-NQ/TW · Bộ Chính trị · 22/12/2024. Hãy gọi tên hành động làm cái đang có trở nên tốt hơn, khác hơn và hiệu quả hơn. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: ĐỔI MỚI.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Polybius + hoán vị tọa độ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Xem 57-NQ/TW như dữ kiện gợi nghĩa, không cần nhớ nguyên văn tiêu đề.

### C21 — Trạm 2 → Trạm 1
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · VIGENÈRE

OT — Khi những dấu hiệu nối lại, lối đi sẽ hiện ra.
Hãy chia vai: người nhìn, người tính, người ghi.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Lấy chữ đầu bốn dòng đầu làm khóa.

NW — A=0…Z=25. Với khóa lặp K, giải P = C − K:
NLBTBHAMYA

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Một bản phác thảo chỉ thật sự có ý nghĩa khi biến thành cách làm hoặc giá trị chưa từng có. Hãy gọi tên năng lực tạo ra điều mới ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: SÁNG TẠO.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Vigenère + khóa thơ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm tên của năng lực biến ý tưởng thành giá trị mới.

### C23 — Trạm 2 → Trạm 3
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · MORSE + ĐẢO KHỐI

OT — Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Hãy chia vai: người nhìn, người tính, người ghi.
Em đừng vội tin kết quả đầu tiên vừa tìm được.
Từ đầu dòng cho biết cách đọc: NGHE. Dấu / ngăn chữ, | ngăn khối; hãy đổi Morse, nối các khối theo thứ tự in rồi đọc ngược toàn bộ chuỗi.

NW — .-/-.../--/.- | .-./-/-./. | -..

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Một bản phác thảo chỉ thật sự có ý nghĩa khi biến thành cách làm hoặc giá trị chưa từng có. Hãy gọi tên năng lực tạo ra điều mới ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: SÁNG TẠO.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Morse + đảo khối được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm tên của năng lực biến ý tưởng thành giá trị mới.

### C24 — Trạm 2 → Trạm 4
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · Ô VUÔNG 5×5

OT — Từng bước đúng quan trọng hơn một đáp án vội vàng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Lấy chữ đầu: TOA DO. Dùng bảng Polybius: 11=A, 12=B… 15=E; 21=F… 55=Z (I/J chung ô).

NW — 33 34 12 32 11 42 44 33 15 14

KIỂM CHỨNG — Giải tọa độ rồi đọc chuỗi theo chiều ngược lại. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Một bản phác thảo chỉ thật sự có ý nghĩa khi biến thành cách làm hoặc giá trị chưa từng có. Hãy gọi tên năng lực tạo ra điều mới ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: SÁNG TẠO.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Polybius + hoán vị tọa độ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm tên của năng lực biến ý tưởng thành giá trị mới.

### C25 — Trạm 2 → Trạm 5
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · BACON

OT — Người giữ khóa không nên tự giải một mình.
Hãy chia vai: người nhìn, người tính, người ghi.
Im lặng quan sát, rồi mới chọn bước tiếp theo.
Phía trước không xa, nhưng không dành cho người hấp tấp.
Hãy chia vai: người nhìn, người tính, người ghi.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Người giữ khóa không nên tự giải một mình.
Chữ đầu nói NHI PHAN. Quy ước S=0, D=1; mỗi 5 dấu là một chữ A=00000… Z=11001.

NW — SSSDD SSDSS SDDSD DSSDD DSSSD SSSSS SDDSS SDDSD SSSSS SDDSS

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Một bản phác thảo chỉ thật sự có ý nghĩa khi biến thành cách làm hoặc giá trị chưa từng có. Hãy gọi tên năng lực tạo ra điều mới ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: SÁNG TẠO.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Bacon + chữ nhị phân được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm tên của năng lực biến ý tưởng thành giá trị mới.

### C26 — Trạm 2 → Trạm 6
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · HÀM AFFINE

OT — Mỗi ký tự đều có lý do xuất hiện trên phiếu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Lúc còn phân vân, hãy trở về điểm bắt đầu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Chữ đầu: MODULO. Đánh A=0…Z=25. Trên bản mã dùng C=(5P+8) mod 26; hãy tìm P, rồi đọc ngược.

NW — EIUQIPZVCX

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Một bản phác thảo chỉ thật sự có ý nghĩa khi biến thành cách làm hoặc giá trị chưa từng có. Hãy gọi tên năng lực tạo ra điều mới ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: SÁNG TẠO.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Affine + kiểm tra cơ số được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm tên của năng lực biến ý tưởng thành giá trị mới.

### C27 — Trạm 2 → Trạm 7
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · LƯỚI CỘT

OT — Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Từng bước đúng quan trọng hơn một đáp án vội vàng.
Lấy chữ đầu: DOC COT. Bản mã gồm 4 cột, phát theo thứ tự cột 2 → 4 → 1 → 3. Mỗi cột đọc từ trên xuống; X cuối chỉ là đệm.

NW — EAY TBX DRA NMX

KIỂM CHỨNG — Ghép lại lưới theo thứ tự 2–4–1–3, đọc từng hàng. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Một bản phác thảo chỉ thật sự có ý nghĩa khi biến thành cách làm hoặc giá trị chưa từng có. Hãy gọi tên năng lực tạo ra điều mới ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: SÁNG TẠO.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Lưới cột + đọc đường đi được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm tên của năng lực biến ý tưởng thành giá trị mới.

### C31 — Trạm 3 → Trạm 1
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · Ô VUÔNG 5×5

OT — Từng bước đúng quan trọng hơn một đáp án vội vàng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Lấy chữ đầu: TOA DO. Dùng bảng Polybius: 11=A, 12=B… 15=E; 21=F… 55=Z (I/J chung ô).

NW — 44 34 32 32 11 42 44 33 15 14

KIỂM CHỨNG — Giải tọa độ rồi đọc chuỗi theo chiều ngược lại. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Trong dàn nhạc, nhiều nhạc cụ không mất bản sắc nhưng cùng một nhịp để tạo thành giai điệu. Gọi tên trạng thái phối hợp ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: HÒA NHỊP.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Polybius + hoán vị tọa độ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm một trạng thái nhiều người cùng chung nhịp, không phải “đoàn kết”.

### C32 — Trạm 3 → Trạm 2
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · BACON

OT — Người giữ khóa không nên tự giải một mình.
Hãy chia vai: người nhìn, người tính, người ghi.
Im lặng quan sát, rồi mới chọn bước tiếp theo.
Phía trước không xa, nhưng không dành cho người hấp tấp.
Hãy chia vai: người nhìn, người tính, người ghi.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Người giữ khóa không nên tự giải một mình.
Chữ đầu nói NHI PHAN. Quy ước S=0, D=1; mỗi 5 dấu là một chữ A=00000… Z=11001.

NW — SSSDD SSDSS SDDSD DSSDD DSSSD SSSSS SDDSS SSDDD SSSSS SDSSS

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Trong dàn nhạc, nhiều nhạc cụ không mất bản sắc nhưng cùng một nhịp để tạo thành giai điệu. Gọi tên trạng thái phối hợp ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: HÒA NHỊP.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Bacon + chữ nhị phân được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm một trạng thái nhiều người cùng chung nhịp, không phải “đoàn kết”.

### C34 — Trạm 3 → Trạm 4
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · LƯỚI CỘT

OT — Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Từng bước đúng quan trọng hơn một đáp án vội vàng.
Lấy chữ đầu: DOC COT. Bản mã gồm 4 cột, phát theo thứ tự cột 2 → 4 → 1 → 3. Mỗi cột đọc từ trên xuống; X cuối chỉ là đệm.

NW — EAN TBX DRO NMX

KIỂM CHỨNG — Ghép lại lưới theo thứ tự 2–4–1–3, đọc từng hàng. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Trong dàn nhạc, nhiều nhạc cụ không mất bản sắc nhưng cùng một nhịp để tạo thành giai điệu. Gọi tên trạng thái phối hợp ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: HÒA NHỊP.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Lưới cột + đọc đường đi được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm một trạng thái nhiều người cùng chung nhịp, không phải “đoàn kết”.

### C35 — Trạm 3 → Trạm 5
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · VIGENÈRE

OT — Khi những dấu hiệu nối lại, lối đi sẽ hiện ra.
Hãy chia vai: người nhìn, người tính, người ghi.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Lấy chữ đầu bốn dòng đầu làm khóa.

NW — A=0…Z=25. Với khóa lặp K, giải P = C − K:
NLBTBHANKT

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Trong dàn nhạc, nhiều nhạc cụ không mất bản sắc nhưng cùng một nhịp để tạo thành giai điệu. Gọi tên trạng thái phối hợp ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: HÒA NHỊP.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Vigenère + khóa thơ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm một trạng thái nhiều người cùng chung nhịp, không phải “đoàn kết”.

### C36 — Trạm 3 → Trạm 6
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · ATBASH + XOAY

OT — Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
“Gương chữ cái” nghĩa là A↔Z, B↔Y. Sau đó xoay tiến đúng số La Mã: V.

NW — KEMSENLRAB

KIỂM CHỨNG — Đảo ngược chuỗi NW → soi gương bảng chữ → xoay tiến V. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Trong dàn nhạc, nhiều nhạc cụ không mất bản sắc nhưng cùng một nhịp để tạo thành giai điệu. Gọi tên trạng thái phối hợp ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: HÒA NHỊP.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Atbash + dịch vòng được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm một trạng thái nhiều người cùng chung nhịp, không phải “đoàn kết”.

### C37 — Trạm 3 → Trạm 7
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · MORSE + ĐẢO KHỐI

OT — Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Hãy chia vai: người nhìn, người tính, người ghi.
Em đừng vội tin kết quả đầu tiên vừa tìm được.
Từ đầu dòng cho biết cách đọc: NGHE. Dấu / ngăn chữ, | ngăn khối; hãy đổi Morse, nối các khối theo thứ tự in rồi đọc ngược toàn bộ chuỗi.

NW — -.--/.-/-.../-- | .-/.-./-/-. | ./-..

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Trong dàn nhạc, nhiều nhạc cụ không mất bản sắc nhưng cùng một nhịp để tạo thành giai điệu. Gọi tên trạng thái phối hợp ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: HÒA NHỊP.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Morse + đảo khối được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm một trạng thái nhiều người cùng chung nhịp, không phải “đoàn kết”.

### C41 — Trạm 4 → Trạm 1
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · LƯỚI CỘT

OT — Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Từng bước đúng quan trọng hơn một đáp án vội vàng.
Lấy chữ đầu: DOC COT. Bản mã gồm 4 cột, phát theo thứ tự cột 2 → 4 → 1 → 3. Mỗi cột đọc từ trên xuống; X cuối chỉ là đệm.

NW — EAT TMX DRO NMX

KIỂM CHỨNG — Ghép lại lưới theo thứ tự 2–4–1–3, đọc từng hàng. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Câu hỏi của trạm không hỏi “hôm qua ta đã làm gì?”, mà hỏi “ngày mai ta muốn đến đâu?”. Hãy gọi tên hướng nhìn về phía trước. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: TƯƠNG LAI.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Lưới cột + đọc đường đi được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm một cụm hai tiếng chỉ hướng nhìn về phía ngày mai.

### C42 — Trạm 4 → Trạm 2
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · VIGENÈRE

OT — Khi những dấu hiệu nối lại, lối đi sẽ hiện ra.
Hãy chia vai: người nhìn, người tính, người ghi.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Lấy chữ đầu bốn dòng đầu làm khóa.

NW — A=0…Z=25. Với khóa lặp K, giải P = C − K:
NLBTBHAHKP

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Câu hỏi của trạm không hỏi “hôm qua ta đã làm gì?”, mà hỏi “ngày mai ta muốn đến đâu?”. Hãy gọi tên hướng nhìn về phía trước. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: TƯƠNG LAI.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Vigenère + khóa thơ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm một cụm hai tiếng chỉ hướng nhìn về phía ngày mai.

### C43 — Trạm 4 → Trạm 3
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · ATBASH + XOAY

OT — Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
“Gương chữ cái” nghĩa là A↔Z, B↔Y. Sau đó xoay tiến đúng số La Mã: VI.

NW — FETFOMSBC

KIỂM CHỨNG — Đảo ngược chuỗi NW → soi gương bảng chữ → xoay tiến VI. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Câu hỏi của trạm không hỏi “hôm qua ta đã làm gì?”, mà hỏi “ngày mai ta muốn đến đâu?”. Hãy gọi tên hướng nhìn về phía trước. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: TƯƠNG LAI.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Atbash + dịch vòng được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm một cụm hai tiếng chỉ hướng nhìn về phía ngày mai.

### C45 — Trạm 4 → Trạm 5
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · Ô VUÔNG 5×5

OT — Từng bước đúng quan trọng hơn một đáp án vội vàng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Lấy chữ đầu: TOA DO. Dùng bảng Polybius: 11=A, 12=B… 15=E; 21=F… 55=Z (I/J chung ô).

NW — 32 11 33 32 11 42 44 33 15 14

KIỂM CHỨNG — Giải tọa độ rồi đọc chuỗi theo chiều ngược lại. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Câu hỏi của trạm không hỏi “hôm qua ta đã làm gì?”, mà hỏi “ngày mai ta muốn đến đâu?”. Hãy gọi tên hướng nhìn về phía trước. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: TƯƠNG LAI.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Polybius + hoán vị tọa độ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm một cụm hai tiếng chỉ hướng nhìn về phía ngày mai.

### C46 — Trạm 4 → Trạm 6
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · BACON

OT — Người giữ khóa không nên tự giải một mình.
Hãy chia vai: người nhìn, người tính, người ghi.
Im lặng quan sát, rồi mới chọn bước tiếp theo.
Phía trước không xa, nhưng không dành cho người hấp tấp.
Hãy chia vai: người nhìn, người tính, người ghi.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Người giữ khóa không nên tự giải một mình.
Chữ đầu nói NHI PHAN. Quy ước S=0, D=1; mỗi 5 dấu là một chữ A=00000… Z=11001.

NW — SSSDD SSDSS SDDSD DSSDD DSSSD SSSSS SDDSS DSSDS SSSSS DSDSS

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Câu hỏi của trạm không hỏi “hôm qua ta đã làm gì?”, mà hỏi “ngày mai ta muốn đến đâu?”. Hãy gọi tên hướng nhìn về phía trước. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: TƯƠNG LAI.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Bacon + chữ nhị phân được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm một cụm hai tiếng chỉ hướng nhìn về phía ngày mai.

### C47 — Trạm 4 → Trạm 7
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · HÀM AFFINE

OT — Mỗi ký tự đều có lý do xuất hiện trên phiếu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Lúc còn phân vân, hãy trở về điểm bắt đầu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Chữ đầu: MODULO. Đánh A=0…Z=25. Trên bản mã dùng C=(5P+8) mod 26; hãy tìm P, rồi đọc ngược.

NW — YINQIPZVCX

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Câu hỏi của trạm không hỏi “hôm qua ta đã làm gì?”, mà hỏi “ngày mai ta muốn đến đâu?”. Hãy gọi tên hướng nhìn về phía trước. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: TƯƠNG LAI.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Affine + kiểm tra cơ số được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm một cụm hai tiếng chỉ hướng nhìn về phía ngày mai.

### C51 — Trạm 5 → Trạm 1
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · MORSE + ĐẢO KHỐI

OT — Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Hãy chia vai: người nhìn, người tính, người ghi.
Em đừng vội tin kết quả đầu tiên vừa tìm được.
Từ đầu dòng cho biết cách đọc: NGHE. Dấu / ngăn chữ, | ngăn khối; hãy đổi Morse, nối các khối theo thứ tự in rồi đọc ngược toàn bộ chuỗi.

NW — -/---/--/-- | .-/.-./-/-. | ./-..

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Từ bản vẽ, dữ liệu, mã nguồn và quy trình, con người tạo ra công cụ giải quyết vấn đề. Gọi tên lĩnh vực biến tri thức thành giải pháp. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: CÔNG NGHỆ.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Morse + đảo khối được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm lĩnh vực đưa tri thức vào công cụ và giải pháp.

### C52 — Trạm 5 → Trạm 2
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · Ô VUÔNG 5×5

OT — Từng bước đúng quan trọng hơn một đáp án vội vàng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Lấy chữ đầu: TOA DO. Dùng bảng Polybius: 11=A, 12=B… 15=E; 21=F… 55=Z (I/J chung ô).

NW — 24 11 23 32 11 42 44 33 15 14

KIỂM CHỨNG — Giải tọa độ rồi đọc chuỗi theo chiều ngược lại. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Từ bản vẽ, dữ liệu, mã nguồn và quy trình, con người tạo ra công cụ giải quyết vấn đề. Gọi tên lĩnh vực biến tri thức thành giải pháp. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: CÔNG NGHỆ.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Polybius + hoán vị tọa độ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm lĩnh vực đưa tri thức vào công cụ và giải pháp.

### C53 — Trạm 5 → Trạm 3
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · BACON

OT — Người giữ khóa không nên tự giải một mình.
Hãy chia vai: người nhìn, người tính, người ghi.
Im lặng quan sát, rồi mới chọn bước tiếp theo.
Phía trước không xa, nhưng không dành cho người hấp tấp.
Hãy chia vai: người nhìn, người tính, người ghi.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Người giữ khóa không nên tự giải một mình.
Chữ đầu nói NHI PHAN. Quy ước S=0, D=1; mỗi 5 dấu là một chữ A=00000… Z=11001.

NW — SSSDD SSDSS SDDSD DSSDD DSSSD SSSSS SDDSS SSSSD SSSSS

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Từ bản vẽ, dữ liệu, mã nguồn và quy trình, con người tạo ra công cụ giải quyết vấn đề. Gọi tên lĩnh vực biến tri thức thành giải pháp. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: CÔNG NGHỆ.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Bacon + chữ nhị phân được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm lĩnh vực đưa tri thức vào công cụ và giải pháp.

### C54 — Trạm 5 → Trạm 4
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · HÀM AFFINE

OT — Mỗi ký tự đều có lý do xuất hiện trên phiếu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Lúc còn phân vân, hãy trở về điểm bắt đầu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Chữ đầu: MODULO. Đánh A=0…Z=25. Trên bản mã dùng C=(5P+8) mod 26; hãy tìm P, rồi đọc ngược.

NW — VANQIPZVCX

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Từ bản vẽ, dữ liệu, mã nguồn và quy trình, con người tạo ra công cụ giải quyết vấn đề. Gọi tên lĩnh vực biến tri thức thành giải pháp. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: CÔNG NGHỆ.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Affine + kiểm tra cơ số được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm lĩnh vực đưa tri thức vào công cụ và giải pháp.

### C56 — Trạm 5 → Trạm 6
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · VIGENÈRE

OT — Khi những dấu hiệu nối lại, lối đi sẽ hiện ra.
Hãy chia vai: người nhìn, người tính, người ghi.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Lấy chữ đầu bốn dòng đầu làm khóa.

NW — A=0…Z=25. Với khóa lặp K, giải P = C − K:
NLBTBHASKB

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Từ bản vẽ, dữ liệu, mã nguồn và quy trình, con người tạo ra công cụ giải quyết vấn đề. Gọi tên lĩnh vực biến tri thức thành giải pháp. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: CÔNG NGHỆ.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Vigenère + khóa thơ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm lĩnh vực đưa tri thức vào công cụ và giải pháp.

### C57 — Trạm 5 → Trạm 7
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · ATBASH + XOAY

OT — Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
“Gương chữ cái” nghĩa là A↔Z, B↔Y. Sau đó xoay tiến đúng số La Mã: VII.

NW — IGFUGPNTCD

KIỂM CHỨNG — Đảo ngược chuỗi NW → soi gương bảng chữ → xoay tiến VII. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Từ bản vẽ, dữ liệu, mã nguồn và quy trình, con người tạo ra công cụ giải quyết vấn đề. Gọi tên lĩnh vực biến tri thức thành giải pháp. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: CÔNG NGHỆ.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Atbash + dịch vòng được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Tìm lĩnh vực đưa tri thức vào công cụ và giải pháp.

### C61 — Trạm 6 → Trạm 1
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · HÀM AFFINE

OT — Mỗi ký tự đều có lý do xuất hiện trên phiếu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Lúc còn phân vân, hãy trở về điểm bắt đầu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Chữ đầu: MODULO. Đánh A=0…Z=25. Trên bản mã dùng C=(5P+8) mod 26; hãy tìm P, rồi đọc ngược.

NW — ZAQQIPZVCX

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Mọi giải pháp kỹ thuật cần trả lời: “làm điều này ___ ai, ___ mục đích gì?”. Ghi đúng từ nối biểu đạt động cơ phụng sự, chỉ một tiếng.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: VÌ.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Affine + kiểm tra cơ số được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Câu trả lời chỉ có một tiếng, là từ nối chỉ mục đích / động cơ.

### C62 — Trạm 6 → Trạm 2
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · LƯỚI CỘT

OT — Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Từng bước đúng quan trọng hơn một đáp án vội vàng.
Lấy chữ đầu: DOC COT. Bản mã gồm 4 cột, phát theo thứ tự cột 2 → 4 → 1 → 3. Mỗi cột đọc từ trên xuống; X cuối chỉ là đệm.

NW — EAI THX DRA NMX

KIỂM CHỨNG — Ghép lại lưới theo thứ tự 2–4–1–3, đọc từng hàng. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Mọi giải pháp kỹ thuật cần trả lời: “làm điều này ___ ai, ___ mục đích gì?”. Ghi đúng từ nối biểu đạt động cơ phụng sự, chỉ một tiếng.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: VÌ.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Lưới cột + đọc đường đi được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Câu trả lời chỉ có một tiếng, là từ nối chỉ mục đích / động cơ.

### C63 — Trạm 6 → Trạm 3
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · VIGENÈRE

OT — Khi những dấu hiệu nối lại, lối đi sẽ hiện ra.
Hãy chia vai: người nhìn, người tính, người ghi.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Lấy chữ đầu bốn dòng đầu làm khóa.

NW — A=0…Z=25. Với khóa lặp K, giải P = C − K:
NLBTBHABK

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Mọi giải pháp kỹ thuật cần trả lời: “làm điều này ___ ai, ___ mục đích gì?”. Ghi đúng từ nối biểu đạt động cơ phụng sự, chỉ một tiếng.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: VÌ.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Vigenère + khóa thơ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Câu trả lời chỉ có một tiếng, là từ nối chỉ mục đích / động cơ.

### C64 — Trạm 6 → Trạm 4
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · ATBASH + XOAY

OT — Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
“Gương chữ cái” nghĩa là A↔Z, B↔Y. Sau đó xoay tiến đúng số La Mã: VIII.

NW — UTGVHQOUDE

KIỂM CHỨNG — Đảo ngược chuỗi NW → soi gương bảng chữ → xoay tiến VIII. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Mọi giải pháp kỹ thuật cần trả lời: “làm điều này ___ ai, ___ mục đích gì?”. Ghi đúng từ nối biểu đạt động cơ phụng sự, chỉ một tiếng.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: VÌ.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Atbash + dịch vòng được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Câu trả lời chỉ có một tiếng, là từ nối chỉ mục đích / động cơ.

### C65 — Trạm 6 → Trạm 5
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · MORSE + ĐẢO KHỐI

OT — Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Hãy chia vai: người nhìn, người tính, người ghi.
Em đừng vội tin kết quả đầu tiên vừa tìm được.
Từ đầu dòng cho biết cách đọc: NGHE. Dấu / ngăn chữ, | ngăn khối; hãy đổi Morse, nối các khối theo thứ tự in rồi đọc ngược toàn bộ chuỗi.

NW — --/.-/-./-- | .-/.-./-/-. | ./-..

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Mọi giải pháp kỹ thuật cần trả lời: “làm điều này ___ ai, ___ mục đích gì?”. Ghi đúng từ nối biểu đạt động cơ phụng sự, chỉ một tiếng.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: VÌ.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Morse + đảo khối được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Câu trả lời chỉ có một tiếng, là từ nối chỉ mục đích / động cơ.

### C67 — Trạm 6 → Trạm 7
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · BACON

OT — Người giữ khóa không nên tự giải một mình.
Hãy chia vai: người nhìn, người tính, người ghi.
Im lặng quan sát, rồi mới chọn bước tiếp theo.
Phía trước không xa, nhưng không dành cho người hấp tấp.
Hãy chia vai: người nhìn, người tính, người ghi.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Người giữ khóa không nên tự giải một mình.
Chữ đầu nói NHI PHAN. Quy ước S=0, D=1; mỗi 5 dấu là một chữ A=00000… Z=11001.

NW — SSSDD SSDSS SDDSD DSSDD DSSSD SSSSS SDDSS SSSSD SSSSS DDSSS

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Mọi giải pháp kỹ thuật cần trả lời: “làm điều này ___ ai, ___ mục đích gì?”. Ghi đúng từ nối biểu đạt động cơ phụng sự, chỉ một tiếng.
**Lời giải BTC:** Địa điểm: D07 — Sân bóng rổ, gần B4 (10.421665, 105.642891). Mảnh giữ lại: VÌ.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Bacon + chữ nhị phân được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Câu trả lời chỉ có một tiếng, là từ nối chỉ mục đích / động cơ.

### C71 — Trạm 7 → Trạm 1
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · ATBASH + XOAY

OT — Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
“Gương chữ cái” nghĩa là A↔Z, B↔Y. Sau đó xoay tiến đúng số La Mã: undefined.

NW — PUWWIRPVEF

KIỂM CHỨNG — Đảo ngược chuỗi NW → soi gương bảng chữ → xoay tiến undefined. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Giá trị của giải pháp không dừng ở một cá nhân hay một đội; nó lan tới tập thể cùng sống, học tập và phát triển. Gọi tên chủ thể ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D01 — Sân đá banh (10.420777, 105.644399). Mảnh giữ lại: CỘNG ĐỒNG.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Atbash + dịch vòng được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Câu trả lời chỉ tập thể rộng hơn cá nhân và một nhóm chơi.

### C72 — Trạm 7 → Trạm 2
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · MORSE + ĐẢO KHỐI

OT — Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Hãy chia vai: người nhìn, người tính, người ghi.
Em đừng vội tin kết quả đầu tiên vừa tìm được.
Từ đầu dòng cho biết cách đọc: NGHE. Dấu / ngăn chữ, | ngăn khối; hãy đổi Morse, nối các khối theo thứ tự in rồi đọc ngược toàn bộ chuỗi.

NW — ../.-/..../-- | .-/.-./-/-. | ./-..

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Giá trị của giải pháp không dừng ở một cá nhân hay một đội; nó lan tới tập thể cùng sống, học tập và phát triển. Gọi tên chủ thể ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D02 — Khu T (10.419337, 105.645022). Mảnh giữ lại: CỘNG ĐỒNG.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Morse + đảo khối được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Câu trả lời chỉ tập thể rộng hơn cá nhân và một nhóm chơi.

### C73 — Trạm 7 → Trạm 3
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · Ô VUÔNG 5×5

OT — Từng bước đúng quan trọng hơn một đáp án vội vàng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Lấy chữ đầu: TOA DO. Dùng bảng Polybius: 11=A, 12=B… 15=E; 21=F… 55=Z (I/J chung ô).

NW — 11 12 32 11 42 44 33 15 14

KIỂM CHỨNG — Giải tọa độ rồi đọc chuỗi theo chiều ngược lại. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Giá trị của giải pháp không dừng ở một cá nhân hay một đội; nó lan tới tập thể cùng sống, học tập và phát triển. Gọi tên chủ thể ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D03 — Trước tòa H2 (10.419688, 105.644049). Mảnh giữ lại: CỘNG ĐỒNG.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Polybius + hoán vị tọa độ được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Câu trả lời chỉ tập thể rộng hơn cá nhân và một nhóm chơi.

### C74 — Trạm 7 → Trạm 4
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · BACON

OT — Người giữ khóa không nên tự giải một mình.
Hãy chia vai: người nhìn, người tính, người ghi.
Im lặng quan sát, rồi mới chọn bước tiếp theo.
Phía trước không xa, nhưng không dành cho người hấp tấp.
Hãy chia vai: người nhìn, người tính, người ghi.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Người giữ khóa không nên tự giải một mình.
Chữ đầu nói NHI PHAN. Quy ước S=0, D=1; mỗi 5 dấu là một chữ A=00000… Z=11001.

NW — SSSDD SSDSS SDDSD DSSDD DSSSD SSSSS SDDSS SSSSD SDDDS SDDSD

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Giá trị của giải pháp không dừng ở một cá nhân hay một đội; nó lan tới tập thể cùng sống, học tập và phát triển. Gọi tên chủ thể ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D04 — Hồ bơi (10.422329, 105.640870). Mảnh giữ lại: CỘNG ĐỒNG.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Bacon + chữ nhị phân được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Câu trả lời chỉ tập thể rộng hơn cá nhân và một nhóm chơi.

### C75 — Trạm 7 → Trạm 5
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · HÀM AFFINE

OT — Mỗi ký tự đều có lý do xuất hiện trên phiếu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Lúc còn phân vân, hãy trở về điểm bắt đầu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Chữ đầu: MODULO. Đánh A=0…Z=25. Trên bản mã dùng C=(5P+8) mod 26; hãy tìm P, rồi đọc ngược.

NW — QIVQIPZVCX

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Giá trị của giải pháp không dừng ở một cá nhân hay một đội; nó lan tới tập thể cùng sống, học tập và phát triển. Gọi tên chủ thể ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D05 — Đường chạy C1 (10.421667, 105.641517). Mảnh giữ lại: CỘNG ĐỒNG.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Affine + kiểm tra cơ số được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Câu trả lời chỉ tập thể rộng hơn cá nhân và một nhóm chơi.

### C76 — Trạm 7 → Trạm 6
**Mặt người chơi — A:** MẬT THƯ 3 LỚP · LƯỚI CỘT

OT — Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Từng bước đúng quan trọng hơn một đáp án vội vàng.
Lấy chữ đầu: DOC COT. Bản mã gồm 4 cột, phát theo thứ tự cột 2 → 4 → 1 → 3. Mỗi cột đọc từ trên xuống; X cuối chỉ là đệm.

NW — EAU TSX DRA NMX

KIỂM CHỨNG — Ghép lại lưới theo thứ tự 2–4–1–3, đọc từng hàng. MÃ ĐÍCH sau cùng có dạng: DEN TRAM <tên-số>. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**Mặt người chơi — B:**

Giá trị của giải pháp không dừng ở một cá nhân hay một đội; nó lan tới tập thể cùng sống, học tập và phát triển. Gọi tên chủ thể ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D06 — Sân C2, giữa C1–C2 (10.422046, 105.641630). Mảnh giữ lại: CỘNG ĐỒNG.
**Gợi ý 1:** Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng Lưới cột + đọc đường đi được ghi đủ dữ kiện trên phiếu.
**Gợi ý 2:** Câu trả lời chỉ tập thể rộng hơn cá nhân và một nhóm chơi.

## 7. Bảy phiếu về A9

### R10 — Trạm 1 → Trung tâm
**A:** MẬT THƯ 3 LỚP · Ô VUÔNG 5×5

OT — Từng bước đúng quan trọng hơn một đáp án vội vàng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Lấy chữ đầu: TOA DO. Dùng bảng Polybius: 11=A, 12=B… 15=E; 21=F… 55=Z (I/J chung ô).

NW — 32 11 44 22 33 45 42 44 15 51

KIỂM CHỨNG — Giải tọa độ rồi đọc chuỗi theo chiều ngược lại. MÃ ĐÍCH sau cùng có dạng: VE TRUNG TAM. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**B:** Phiếu nguồn: 57-NQ/TW · Bộ Chính trị · 22/12/2024. Hãy gọi tên hành động làm cái đang có trở nên tốt hơn, khác hơn và hiệu quả hơn. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: ĐỔI MỚI.
**Gợi ý:** Xem 57-NQ/TW như dữ kiện gợi nghĩa, không cần nhớ nguyên văn tiêu đề.

### R20 — Trạm 2 → Trung tâm
**A:** MẬT THƯ 3 LỚP · LƯỚI CỘT

OT — Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Từng bước đúng quan trọng hơn một đáp án vội vàng.
Lấy chữ đầu: DOC COT. Bản mã gồm 4 cột, phát theo thứ tự cột 2 → 4 → 1 → 3. Mỗi cột đọc từ trên xuống; X cuối chỉ là đệm.

NW — ENM RTX VUA TGX

KIỂM CHỨNG — Ghép lại lưới theo thứ tự 2–4–1–3, đọc từng hàng. MÃ ĐÍCH sau cùng có dạng: VE TRUNG TAM. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**B:** Một bản phác thảo chỉ thật sự có ý nghĩa khi biến thành cách làm hoặc giá trị chưa từng có. Hãy gọi tên năng lực tạo ra điều mới ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: SÁNG TẠO.
**Gợi ý:** Tìm tên của năng lực biến ý tưởng thành giá trị mới.

### R30 — Trạm 3 → Trung tâm
**A:** MẬT THƯ 3 LỚP · MORSE + ĐẢO KHỐI

OT — Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Hãy chia vai: người nhìn, người tính, người ghi.
Em đừng vội tin kết quả đầu tiên vừa tìm được.
Từ đầu dòng cho biết cách đọc: NGHE. Dấu / ngăn chữ, | ngăn khối; hãy đổi Morse, nối các khối theo thứ tự in rồi đọc ngược toàn bộ chuỗi.

NW — --/.-/-/--. | -./..-/.-./- | ./...-

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: VE TRUNG TAM. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**B:** Trong dàn nhạc, nhiều nhạc cụ không mất bản sắc nhưng cùng một nhịp để tạo thành giai điệu. Gọi tên trạng thái phối hợp ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: HÒA NHỊP.
**Gợi ý:** Tìm một trạng thái nhiều người cùng chung nhịp, không phải “đoàn kết”.

### R40 — Trạm 4 → Trung tâm
**A:** MẬT THƯ 3 LỚP · HÀM AFFINE

OT — Mỗi ký tự đều có lý do xuất hiện trên phiếu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Dưới lớp chữ bình thường thường còn một quy tắc khác.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Lúc còn phân vân, hãy trở về điểm bắt đầu.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Chữ đầu: MODULO. Đánh A=0…Z=25. Trên bản mã dùng C=(5P+8) mod 26; hãy tìm P, rồi đọc ngược.

NW — QIZMVEPZCJ

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: VE TRUNG TAM. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**B:** Câu hỏi của trạm không hỏi “hôm qua ta đã làm gì?”, mà hỏi “ngày mai ta muốn đến đâu?”. Hãy gọi tên hướng nhìn về phía trước. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: TƯƠNG LAI.
**Gợi ý:** Tìm một cụm hai tiếng chỉ hướng nhìn về phía ngày mai.

### R50 — Trạm 5 → Trung tâm
**A:** MẬT THƯ 3 LỚP · ATBASH + XOAY

OT — Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Người giữ khóa không nên tự giải một mình.
Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.
“Gương chữ cái” nghĩa là A↔Z, B↔Y. Sau đó xoay tiến đúng số La Mã: VII.

NW — UGNATMPNCL

KIỂM CHỨNG — Đảo ngược chuỗi NW → soi gương bảng chữ → xoay tiến VII. MÃ ĐÍCH sau cùng có dạng: VE TRUNG TAM. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**B:** Từ bản vẽ, dữ liệu, mã nguồn và quy trình, con người tạo ra công cụ giải quyết vấn đề. Gọi tên lĩnh vực biến tri thức thành giải pháp. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: CÔNG NGHỆ.
**Gợi ý:** Tìm lĩnh vực đưa tri thức vào công cụ và giải pháp.

### R60 — Trạm 6 → Trung tâm
**A:** MẬT THƯ 3 LỚP · BACON

OT — Người giữ khóa không nên tự giải một mình.
Hãy chia vai: người nhìn, người tính, người ghi.
Im lặng quan sát, rồi mới chọn bước tiếp theo.
Phía trước không xa, nhưng không dành cho người hấp tấp.
Hãy chia vai: người nhìn, người tính, người ghi.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Người giữ khóa không nên tự giải một mình.
Chữ đầu nói NHI PHAN. Quy ước S=0, D=1; mỗi 5 dấu là một chữ A=00000… Z=11001.

NW — DSDSD SSDSS DSSDD DSSSD DSDSS SDDSD SSDDS DSSDD SSSSS SDDSS

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: VE TRUNG TAM. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**B:** Mọi giải pháp kỹ thuật cần trả lời: “làm điều này ___ ai, ___ mục đích gì?”. Ghi đúng từ nối biểu đạt động cơ phụng sự, chỉ một tiếng.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: VÌ.
**Gợi ý:** Câu trả lời chỉ có một tiếng, là từ nối chỉ mục đích / động cơ.

### R70 — Trạm 7 → Trung tâm
**A:** MẬT THƯ 3 LỚP · VIGENÈRE

OT — Khi những dấu hiệu nối lại, lối đi sẽ hiện ra.
Hãy chia vai: người nhìn, người tính, người ghi.
Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.
Ai giữ được bình tĩnh mới nhìn ra đường đi.
Lấy chữ đầu bốn dòng đầu làm khóa.

NW — A=0…Z=25. Với khóa lặp K, giải P = C − K:
FLHREUUTKT

KIỂM CHỨNG — MÃ ĐÍCH sau cùng có dạng: VE TRUNG TAM. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.
**B:** Giá trị của giải pháp không dừng ở một cá nhân hay một đội; nó lan tới tập thể cùng sống, học tập và phát triển. Gọi tên chủ thể ấy. Ghi một cụm gồm hai tiếng.
**Lời giải BTC:** Địa điểm: D00 — Sân A9 (10.419312, 105.644340). Mảnh giữ lại: CỘNG ĐỒNG.
**Gợi ý:** Câu trả lời chỉ tập thể rộng hơn cá nhân và một nhóm chơi.

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
1. Đáp án là thông điệp định hướng của chương trình, không phải địa danh hay khẩu hiệu chính thức.
2. Bảy trạm tạo thành ba vế: khát vọng tạo điều mới; cách đi cùng thời đại; giá trị dành cho mọi người.
3. Mảnh 1 neo vào văn bản 57-NQ/TW; mảnh 2 là năng lực biến ý tưởng thành giá trị.
4. Mảnh 3–4 nói về cùng nhịp và nhìn về phía trước.
5. Mảnh 5–7 nói về công cụ, động cơ phục vụ và đối tượng thụ hưởng.
6. Đặt các khái niệm theo thứ tự trạm 1 → 7, rồi thêm dấu ngắt hợp lý thành ba vế.
7. Đối chiếu từng khái niệm với hành động, năng lực, trạng thái, tầm nhìn, lĩnh vực, động cơ và chủ thể ở bảy phiếu.

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
