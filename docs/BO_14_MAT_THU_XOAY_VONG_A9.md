# Bộ 14 mật thư xoay vòng + dự phòng A9

## 1. Cách vận hành

### Bộ chính: 7 mật thư chung

Vòng cố định là **1 → 2 → 3 → 7 → 6 → 4 → 5 → 1**. Mỗi trạm giữ một mẫu mật thư; in **7 bản giống nhau/mẫu** để 7 đội đều nhận cùng một nội dung khi hoàn thành trạm đó. Như vậy chỉ biên soạn 7 đề, nhưng vẫn có 49 lượt phát thực tế.

Không phát cả bảy phiếu ngay từ đầu. Quản trò chỉ phát phiếu của trạm vừa hoàn thành sau khi đội được xác nhận kết quả. Đội nộp lại phiếu hoặc đọc đúng mã đích trước khi quản trò xác nhận hướng đi. Cách này ngăn việc xem trước cả lộ trình và biến giải mật thư thành một phần của thử thách.

### Bộ dự phòng: 7 mật thư A9

Sau khi đủ 7 dấu trạm và về A9, nếu chưa đội nào suy luận được câu cuối, BTC phát **B1 → B7** cho tất cả đội cùng lúc, lần lượt từng phiếu, mỗi phiếu cách nhau 90–120 giây. Đây là gợi ý tăng dần, không phải lợi thế riêng cho đội đến sớm. In 7 bản/mẫu để mỗi đội nhận cùng một phiếu.

Không phát tất cả B1–B7 cùng lúc. Sau B4, nếu vẫn chưa có đội nộp bài hợp lệ, mới mở B5–B7.

## 2. Bảng quy ước in kèm đội chơi

| Nhóm mã | Quy ước tối thiểu |
| --- | --- |
| Chữ cái | A=0, B=1, …, Z=25. Bỏ dấu tiếng Việt khi xử lý mã. |
| Vigenère | Mã hóa: `C=P+K (mod 26)`; giải: `P=C-K (mod 26)`. Lặp khóa K. |
| Atbash | A↔Z, B↔Y, C↔X, … |
| Polybius 5×5 | `11=A 12=B 13=C 14=D 15=E / 21=F 22=G 23=H 24=I/J 25=K / 31=L 32=M 33=N 34=O 35=P / 41=Q 42=R 43=S 44=T 45=U / 51=V 52=W 53=X 54=Y 55=Z`. |
| Morse | `A .-; B -...; C -.-.; D -..; E .; F ..-.; G --.; H ....; I ..; K -.-; L .-..; M --; N -.; O ---; P .--.; R .-.; S ...; T -; U ..-; V ...-; X -..-; Y -.--; Z --..`. `/` ngăn chữ, `|` ngăn khối. |
| Bacon | S=0, D=1; mỗi nhóm 5 ký tự là một số nhị phân, A=00000 … Z=11001. |
| Affine | `C=(5P+8) mod 26`; để giải dùng `P=21(C-8) mod 26` vì nghịch đảo của 5 theo modulo 26 là 21. |

## 3. Bảy mật thư xoay vòng

Mỗi phiếu dưới đây chỉ in phần **Người chơi**. Phần **Lời giải BTC** lưu riêng trong tập BTC.

### T1 · Trạm 1 → Trạm 2 · Lưới cột

**Người chơi**

> Đội đừng vội nhìn thấy chữ là đọc ngay.  
> Ô vuông chỉ nói thật khi được trả về đúng vị trí.  
> Cả nhóm hãy chia một người dựng lưới, một người kiểm tra.  
> Cột nào được đọc trước chưa chắc nằm ở bên trái.  
> Ô cuối thừa ra chỉ là đệm.
>
> NW: `NMX / DRA / THX / EAI`
>
> Bản mã gồm 4 cột, mỗi cột dài 3. Bốn khối NW đang được gửi theo thứ tự **cột 3 → cột 1 → cột 4 → cột 2**. Hãy đặt lại vào lưới 3 hàng × 4 cột, rồi đọc theo hàng. Chữ X cuối là đệm.
>
> Kiểm chứng: bản rõ phải có dạng `DEN TRAM <tên số>`.

**Bảng mã trên phiếu**

| Khối nhận | Đặt vào cột |
| --- | ---: |
| NMX | 3 |
| DRA | 1 |
| THX | 4 |
| EAI | 2 |

**Lời giải BTC**

Đặt cột thu được thành lưới `D E N T / R A M H / A I X X`. Đọc theo hàng, bỏ X: `DEN TRAM HAI` → **D02 · Trạm 2 · Khu T**.

---

### T2 · Trạm 2 → Trạm 3 · Vigenère

**Người chơi**

> Dấu đầu các dòng không để trang trí.  
> Ô chữ của địa phương giữ vai trò chiếc khóa.  
> Nghe nhau rồi mới tính, một người đừng tự đoán.  
> Gặp kết quả lạ, hãy quay lại từ đầu.  
> Từng chữ khóa lặp lại đến hết bản mã.  
> Hãy bỏ dấu trước khi xử lý.  
> Ai cũng có thể kiểm tra phép trừ theo modulo.  
> Phía trước chỉ mở ra khi cả đội thống nhất.
>
> NW: `GSAZKHMQD`
>
> A=0…Z=25. Dùng `P=C-K (mod 26)`. Khóa là chữ đầu của tám dòng OT.

**Bảng mã trên phiếu**

| Dòng OT | Chữ đầu |
| --- | --- |
| 1–8 | D O N G T H A P |

**Lời giải BTC**

Khóa `DONGTHAP`. Giải Vigenère `GSAZKHMQD` được `DENTRAMBA` → **D03 · Trạm 3 · Trước tòa H2**.

---

### T3 · Trạm 3 → Trạm 7 · Polybius đảo chuỗi

**Người chơi**

> Từng cặp số là tọa độ, không phải phép nhân.  
> Ô 5×5 có một hàng và một cột cho mỗi chữ.  
> Ai giải xong vẫn chưa được đọc thuận ngay.  
> Đặt chuỗi vừa tìm được trước gương.
>
> NW: `54 11 12 32 11 42 44 33 15 14`
>
> Dùng bảng Polybius 5×5. Sau khi đổi toàn bộ cặp số thành chữ, hãy đọc ngược chuỗi.

**Bảng Polybius trên phiếu**

|   | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| 1 | A | B | C | D | E |
| 2 | F | G | H | I/J | K |
| 3 | L | M | N | O | P |
| 4 | Q | R | S | T | U |
| 5 | V | W | X | Y | Z |

**Lời giải BTC**

Polybius cho `YABMARTNED`; đảo chuỗi được `DENTRAMBAY` → **D07 · Trạm 7 · Sân bóng rổ gần B4**.

---

### T7 · Trạm 7 → Trạm 6 · Morse đảo toàn chuỗi

**Người chơi**

> Người nghe thấy chấm gạch sẽ mở được lớp đầu.  
> Giữa các chữ có một vạch chéo, giữa các đoạn có một vạch đứng.  
> Hãy nối các đoạn theo thứ tự in.  
> Em đừng quên: câu tìm được đang bị soi qua gương.
>
> NW: `..-/.-/.../-- | .-/.-./-/-. | ./-..`
>
> Đổi Morse thành chữ; `/` ngăn chữ, `|` chỉ để dễ đọc. Nối toàn bộ chuỗi rồi đọc ngược.

**Bảng mã trên phiếu**

| `..-` | `.-` | `...` | `--` | `.-.` | `-` | `-.` | `.` | `-..` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| U | A | S | M | R | T | N | E | D |

**Lời giải BTC**

Đổi Morse: `UASMARTNED`; đảo toàn bộ chuỗi: `DENTRAMSAU` → **D06 · Trạm 6 · Sân C2 (giữa C1–C2)**.

---

### T6 · Trạm 6 → Trạm 4 · Bacon nhị phân

**Người chơi**

> S không phải sai, D không phải đúng.  
> Năm dấu tạo nên một chữ.  
> Hai trạng thái như một công tắc sẽ dẫn cả đội đến đáp án.
>
> NW: `SSSDD SSDSS SDDSD DSSDD DSSSD SSSSS SDDSS SSSSD SDDDS SDDSD`
>
> Quy ước `S=0`, `D=1`. Mỗi 5 ký tự là một số nhị phân; A=00000, B=00001, …, Z=11001.

**Bảng mã trên phiếu**

| Nhóm | Nhị phân | Thập phân | Chữ |
| --- | --- | ---: | --- |
| SSSDD | 00011 | 3 | D |
| SSDSS | 00100 | 4 | E |
| SDDSD | 01101 | 13 | N |
| DSSDD | 10011 | 19 | T |
| DSSSD | 10001 | 17 | R |

Các nhóm còn lại xử lý cùng quy tắc.

**Lời giải BTC**

Chuỗi giải được `DENTRAMBON` → **D04 · Trạm 4 · Hồ bơi**.

---

### T4 · Trạm 4 → Trạm 5 · Affine

**Người chơi**

> Mỗi chữ là một số từ 0 đến 25.  
> Ô cửa chỉ mở khi nhân năm rồi cộng tám.  
> Dưới dạng mã hóa, hãy tìm lại P từ C.  
> Uốn ngược dòng cuối cùng để đọc nơi đến.
>
> NW: `QIVQIPZVCX`
>
> A=0…Z=25. Mã dùng `C=(5P+8) mod 26`. Khi giải, dùng `P=21(C-8) mod 26`, rồi đảo chuỗi kết quả.

**Bảng ví dụ trên phiếu**

| C | C−8 | 21(C−8) mod 26 | P |
| --- | ---: | ---: | --- |
| Q=16 | 8 | 12 | M |
| I=8 | 0 | 0 | A |
| V=21 | 13 | 13 | N |

**Lời giải BTC**

Giải Affine được `MANMARTNED`; đảo chuỗi thành `DENTRAMNAM` → **D05 · Trạm 5 · Đường chạy C1**.

---

### T5 · Trạm 5 → Trạm 1 · Gương + dịch vòng

**Người chơi**

> Chín ngọn đèn A9 nhắc một số không thể bỏ qua.  
> Ô chữ trước hết phải đi qua tấm gương.  
> Mỗi bước sau gương tiến thêm chín đơn vị.  
> Đừng quên đọc ngược ở bước cuối.
>
> NW: `PUWWIRPVEF`
>
> Bước 1: Atbash (A↔Z). Bước 2: dịch tiến 9 chữ cái. Bước 3: đảo toàn bộ chuỗi.

**Bảng mã trên phiếu**

| Bước | Chuỗi |
| --- | --- |
| NW ban đầu | PUWWIRPVEF |
| Sau Atbash | KFDDRIKEVU |
| Sau dịch tiến 9 | TOMMARTNED |
| Sau đảo chuỗi | ? |

**Lời giải BTC**

Sau đảo chuỗi: `DENTRAMMOT` → **D01 · Trạm 1 · Sân đá banh**. Vòng xoay được khép kín.

## 4. Bảy mật thư dự phòng tại A9

Mỗi Bx giúp xác định **một mảnh nghĩa**, nhưng không viết thẳng câu cuối. Chỉ phát theo thứ tự. BTC chấp nhận các từ đồng nghĩa phù hợp trước khi buộc đội ghép thông điệp hoàn chỉnh.

### B1 · Gương chữ

**Người chơi:** Dùng Atbash (A↔Z): `OZNNLRXZXSOZN`. Câu rõ là một mô tả hành động, không phải đáp án cuối.

**Bảng mã:** A↔Z, L↔O, M↔N, R↔I, X↔C, S↔H.

**Lời giải BTC:** `LAMMOICACHLAM` = “làm mới cách làm” → mảnh cần suy luận: **ĐỔI MỚI**.

---

### B2 · Khóa A9

**Người chơi:** Hai dòng sau cho khóa, bỏ dấu:  
`Ai dám thử một phương án chưa từng có?`  
`Im lặng quan sát không tạo ra giá trị mới.`  
NW: `TIOZALIMUUOQ`. Dùng Vigenère `P=C-K`; khóa là chữ đầu hai dòng.

**Bảng mã:** khóa `AI`, A=0, I=8.

**Lời giải BTC:** giải được `TAORADIEUMOI` = “tạo ra điều mới” → **SÁNG TẠO**.

---

### B3 · Nhịp chung

**Người chơi:** S=0, D=1; cứ 5 dấu là một chữ.  
NW: `SSSDS DSDSS SDDSD SSDDS SSSDS SSDDD DSDSS SDDSD SSDDS SDDSD SSDDD SDSSS SDDDD`

**Bảng mã:** Bacon A=00000 … Z=11001.

**Lời giải BTC:** `CUNGCHUNGNHIP` = “cùng chung nhịp” → **HÒA NHỊP**.

---

### B4 · Gương thời gian

**Người chơi:** Đổi Morse, nối các khối rồi đảo chuỗi.  
NW: `../.-/--/-.-- | .-/--./-./. | ...-/-./../.... | -.`

**Bảng mã:** `..=I, .-=A, --=M, -.--=Y, .-=A, --.=G, -=T, .=E, ...-=V, -.=N, ....=H`.

**Lời giải BTC:** chuỗi Morse cho `IAMYAGNEVNIHN`; đảo lại thành `NHINVENGAYMAI` = “nhìn về ngày mai” → **TƯƠNG LAI**.

---

### B5 · Tri thức thành giải pháp

**Người chơi:** A=0…Z=25, `C=(5P+8) mod 26`; dùng `P=21(C-8) mod 26`, sau đó đảo chuỗi.  
NW: `FIRFWIWMRVIRZSERZWPZVCWN`

**Bảng mã:** ví dụ `F=5 → 21(5−8) mod 26 = 15 = P`.

**Lời giải BTC:** giải và đảo được `BIENTRITHUCTHANHGIAIPHAP` = “biến tri thức thành giải pháp” → **CÔNG NGHỆ**.

---

### B6 · Động cơ phụng sự

**Người chơi:** Dựng lưới 2 hàng × 4 cột. Bốn khối NW được phát theo cột 3 → 1 → 4 → 2: `PV / DU / HU / EC`. Đặt lại rồi đọc theo hàng.

**Bảng mã**

| Khối | Cột |
| --- | ---: |
| PV | 3 |
| DU | 1 |
| HU | 4 |
| EC | 2 |

**Lời giải BTC:** `DEPHUCVU` = “để phục vụ” → từ nối chỉ mục đích: **VÌ**.

---

### B7 · Ai nhận giá trị?

**Người chơi:** Dùng Polybius 5×5, đổi cặp số thành chữ rồi đọc ngược.  
NW: `15 23 44 35 11 44 34 23 13 23 13 24 24 34 31`

**Bảng mã:** dùng bảng Polybius ở phần quy ước chung.

**Lời giải BTC:** giải ra chuỗi ngược của `LOIICHCHOTAPTHE` = “lợi ích cho tập thể” → **CỘNG ĐỒNG**.

## 5. Chốt cuối tại A9

Sau khi đội có đủ bảy mảnh, BTC yêu cầu đội nói một thông điệp có ba vế, thay vì nộp bảy từ rời rạc. Đáp án chuẩn BTC là:

> **ĐỔI MỚI SÁNG TẠO — HÒA NHỊP TƯƠNG LAI — CÔNG NGHỆ VÌ CỘNG ĐỒNG.**

Chấp nhận khác dấu câu hoặc viết không dấu. Không chấp nhận chỉ liệt kê các mảnh rời nếu đội không ghép được thông điệp.

## 6. Luật công bằng nên công bố

1. Mỗi mật thư tuyến được tính tối đa 5 phút; quá thời gian, quản trò cho gợi ý thứ nhất và ghi nhận thời gian/gợi ý theo thể lệ.
2. Phiếu tuyến giống nhau cho mọi đội; quản trò chỉ xác nhận hướng đúng, không nói tên điểm đến trước khi đội giải.
3. B1–B7 phát đồng thời cho mọi đội đủ điều kiện tại A9; BTC ghi rõ giờ phát từng phiếu.
4. Điện thoại chỉ dùng theo quy chế BTC đã công bố; bộ mật thư này không yêu cầu Internet.
5. Trước ngày chơi, test ít nhất hai nhóm 12–15 sinh viên. Mục tiêu: phần lớn nhóm giải một phiếu tuyến trong 2,5–5 phút; nếu dưới 60% làm được, thêm một gợi ý ngắn chứ không đổi đáp án.
