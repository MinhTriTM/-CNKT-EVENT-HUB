# Nhật ký yêu cầu, quyết định và thực hiện

Ngày cập nhật: 10/09/2026  
Phạm vi: CNKT Event Hub · Khoa Công nghệ và Kỹ thuật · Trường Đại học Đồng Tháp

> Tài liệu này ghi lại yêu cầu, quyết định thiết kế có thể kiểm chứng, việc đã thực hiện, kiểm tra và giới hạn. Tài liệu không chứa chuỗi suy nghĩ nội bộ hay dữ liệu nhạy cảm.

## 1. Yêu cầu đã ghi nhận

### 1.1. Cổng sự kiện đa chương trình

- Xây dựng website quản lý nhiều sự kiện của Khoa Công nghệ và Kỹ thuật.
- Giai đoạn đầu tập trung hai sự kiện: Teambuilding K26 (105 sinh viên) và Gala chào mừng tân sinh viên K26.
- Cần có đăng ký, quản lý sự kiện, thống kê, điều phối, vận hành trạm, chấm điểm và khu vực BTC.

### 1.2. Teambuilding K26

- 105 sinh viên, 7 đội, dự kiến 15 sinh viên/đội.
- Có 7 trạm chơi và Trạm Trung Tâm tại A9; người dùng đã cung cấp GPS cho từng vị trí.
- Cần thuật toán xoay vòng để một đội/trạm/lượt, không đụng độ theo lịch.
- Trạm trung tâm có minigame, phạt nhẹ an toàn cho đội thua, cơ chế khiêu chiến và chấm điểm theo thứ hạng thời gian.
- Câu cuối mang tinh thần đổi mới sáng tạo, hòa nhịp tương lai và công nghệ vì cộng đồng; người chơi phải suy luận, không được nhìn thấy đáp án trực tiếp.

### 1.3. Mật thư và in ấn

- Ban đầu yêu cầu 49 hướng mật thư: từ trung tâm tới 7 trạm và giữa các trạm 1–7; thêm phiếu quay về A9.
- Cần HTML in A4/A5, một mặt hoặc hai mặt.
- Người dùng phản hồi bộ câu hỏi giản lược ban đầu quá dễ so với năng lực đội 15 sinh viên.
- Phương án mới đang được đề xuất: 7 mật thư tuyến chung (mỗi đội dùng cùng mẫu theo vòng cố định) và 7 mật thư dự phòng tại A9, phát đồng thời khi các đội chưa giải được câu cuối.

## 2. Dữ liệu chương trình đã chốt trong hệ thống

| Mã | Địa điểm | GPS |
| --- | --- | --- |
| D00 | Sân A9 · Trạm Trung Tâm | 10.419312, 105.644340 |
| D01 | Sân đá banh · Vượt đầm lầy | 10.420777, 105.644399 |
| D02 | Khu T · Ra-đa dẫn đường | 10.419337, 105.645022 |
| D03 | Trước tòa H2 · Tháp ly tốc độ | 10.419688, 105.644049 |
| D04 | Hồ bơi · Tìm bi trong hồ | 10.422329, 105.640870 |
| D05 | Đường chạy C1 · Bảo vệ bong bóng | 10.421667, 105.641517 |
| D06 | Sân C2, giữa C1–C2 · Chuyền vòng | 10.422046, 105.641630 |
| D07 | Sân bóng rổ gần B4 · Truy tìm kho báu | 10.421665, 105.642891 |

Vòng đề xuất theo vị trí: **1 → 2 → 3 → 7 → 6 → 4 → 5 → 1**.

## 3. Quyết định và lý do

| Quyết định | Lý do |
| --- | --- |
| Dùng hoán vị 7 đội/7 trạm theo từng lượt | Với các trạm xuất phát khác nhau, phép xoay vòng bảo đảm mỗi lượt có đúng một đội ở mỗi trạm. |
| Tách điểm trạm và lời giải mật thư | Tốc độ hoàn thành trò chơi và khả năng giải mã là hai năng lực khác nhau; trộn chúng làm thể lệ khó công bố và khó đối soát. |
| Không in đáp án cuối trên phiếu người chơi | Giữ giá trị suy luận cuối; đáp án và lời giải chỉ nằm ở khu BTC. |
| Bổ sung lớp kiểm chứng `DEN TRAM <tên-số>` | Tránh đội giải đúng kỹ thuật nhưng đọc sai chiều hoặc đặt sai mã địa điểm. |
| Nâng độ khó thành cấu trúc OT → NW → kiểm chứng | Phiếu mẫu người dùng cung cấp có ngữ cảnh, quy tắc ẩn và bảng ký hiệu. Cấu trúc nhiều lớp buộc đội phân công vai trò, thay vì chỉ tìm một phép tính. |
| Tăng thời lượng giải mặc định từ 2 lên 5 phút | Mật thư nhiều lớp cần thời gian chia việc, kiểm tra và thống nhất; giới hạn 2 phút biến kết quả thành may rủi. |
| Đề xuất 7 mật thư chung + 7 gợi ý A9 | Giảm khối lượng biên soạn/in ấn, dễ tập huấn quản trò và vẫn giữ thử thách nếu phiếu chỉ được phát sau khi hoàn thành trạm. |
| Không phát cả bộ 7 tuyến cho đội ngay từ đầu | Nếu xem trước toàn bộ bộ chung, đội có thể suy ra vòng và bỏ qua phần giải mã. |
| Mật thư A9 phát đồng thời, từng lớp | Bảo toàn công bằng: đội đến sớm không nhận gợi ý trước, đội chưa đủ trạm không được hưởng lợi. |

## 4. Công việc đã thực hiện

### 4.1. Website và vận hành BTC

- Xây dựng cổng sự kiện nhiều trang cho người tham dự và BTC.
- Thiết lập đăng ký Teambuilding K26, số lượng 105, danh sách đội, trạm, bảng điểm, điều phối và các màn hình quản trị.
- Bổ sung khu điều phối: chọn trạm xuất phát, vòng xoay, thời lượng, xuất lịch CSV, bảng GPS và sơ đồ khuôn viên.
- Bổ sung quản lý kết quả trạm, DNF, điểm 7→1, đồng hạng, điểm khiêu chiến và tiếp nhận đáp án cuối.
- Bổ sung khu kịch bản BTC, kho ý tưởng liên môn và ghi chú thể lệ.

### 4.2. Ngân hàng 49 hướng hiện có

- Tạo 49 hướng từ trung tâm/trạm và 7 phiếu quay về A9.
- Thay các câu đố số học ngắn bằng 7 họ mật mã luân phiên: Vigenère, Atbash + dịch vòng, Morse + đảo chuỗi, Polybius, Bacon, Affine và lưới cột.
- Mỗi phiếu có ba phần: `OT` để lấy quy tắc hoặc khóa; `NW` chứa bản mã; `KIỂM CHỨNG` để xác nhận định dạng kết quả.
- Tạo tài liệu BTC tổng hợp 49 hướng và tài liệu in A4/A5.

### 4.3. Bộ phương án thay thế 7 + 7

- Soạn đầy đủ 14 câu gồm đề người chơi, bảng mã, cách giải và đáp án BTC trong `BO_14_MAT_THU_XOAY_VONG_A9.md`.
- Bảy mật thư tuyến lần lượt đi theo vòng 1→2→3→7→6→4→5→1.
- Bảy mật thư A9 là gợi ý tăng dần để suy luận bảy mảnh nghĩa của thông điệp cuối.
- Phương án này hiện là **tài liệu thiết kế đã hoàn thiện**, chưa thay thế cấu hình 49 hướng đang chạy trong website. Cần quyết định của BTC trước khi refactor dữ liệu và màn in.

### 4.4. In ấn

- Tạo trang HTML `mat-thu-in-a4-a5.html`.
- Có lọc tuyến, chọn A4/A5, in một mặt hoặc hai mặt, bảng tra D00–D07 và hướng dẫn lật cạnh dài khi in duplex.
- Bản in hiện lấy dữ liệu từ ngân hàng 49 hướng. Nếu chọn phương án 7 + 7, trang in cần được chuyển sang đúng 14 mẫu mới.

## 5. Kiểm tra đã chạy

| Nội dung | Kết quả |
| --- | --- |
| Hoán vị lịch | Kiểm tra 10.080 tổ hợp lịch với 2 vòng; mỗi lượt không trùng trạm. |
| Ngân hàng mật thư | Kiểm tra 49 hướng, 7 phiếu về A9, đủ 7 mảnh/trình tự đội. |
| TypeScript | Kiểm tra kiểu thành công. |
| Build website | Build ứng dụng thành công. |
| HTML in ấn | Kiểm tra trình phân tích JavaScript nhúng thành công. |
| Kiểm thử thực địa | Chưa thực hiện; cần test tối thiểu 2 nhóm 12–15 sinh viên trước ngày chơi. |

## 6. Lỗi, sự cố và giới hạn đã gặp

| Vấn đề | Ảnh hưởng | Cách xử lý / trạng thái |
| --- | --- | --- |
| Một ảnh đính kèm ban đầu không đọc được ở đường dẫn scratch | Không thể kiểm tra file cục bộ từ đường dẫn đã báo lỗi. | Dùng nội dung ảnh đã hiển thị trong hội thoại làm tham chiếu; không sửa ảnh nguồn. |
| Câu đố ban đầu quá trực tiếp | Không tương xứng quy mô 15 sinh viên/đội. | Đã chuyển ngân hàng 49 hướng sang mật thư nhiều lớp; đồng thời soạn phương án 7 + 7 gọn hơn. |
| Sửa một đoạn JSX đã được nén thành dòng rất dài | Thao tác chèn liên kết trực tiếp vào thanh công cụ in không khớp ngữ cảnh patch. | Không làm hỏng mã nguồn; trang in vẫn truy cập bằng URL trực tiếp. Có thể format/refactor component trước khi thêm liên kết nếu BTC yêu cầu. |
| Cảnh báo môi trường proxy khi build | Chỉ là cảnh báo; không làm build thất bại. | Build vẫn hoàn tất. |
| Kịch bản hiển thị cũ còn mô tả 2 phút giải ở một đoạn văn giao diện | Có nguy cơ không đồng nhất với mặc định 5 phút mới. | Cần sửa khi chốt thể thức cuối cùng; không dùng đoạn văn này làm lịch chính thức. |
| Chưa khảo sát lối đi và an toàn tại các điểm GPS | Không thể khẳng định thời gian đi bộ hay đường thực tế. | Phải đi thử, bố trí điểm chờ và điều chỉnh thời lượng trước chương trình. |
| GitHub bên ngoài là kho có thể công khai | Đáp án trong mã/tài liệu có thể bị người không phận sự xem. | Cần chuyển kho GitHub sang private hoặc tách đáp án BTC ra khỏi kho công khai trước khi dùng thật. |
| Chưa có kiểm thử trực quan trên trình duyệt | Chưa kiểm tra chính xác từng máy in, trình duyệt và lật giấy. | Cần in thử 1 phiếu A4 và 1 phiếu A5, một mặt và hai mặt, trước khi in hàng loạt. |

## 7. Trạng thái mã nguồn và xuất bản

- Website đang có bản đã xuất bản trước đó; không tự xuất bản lại các thay đổi nội dung khi chưa có yêu cầu rõ ràng của BTC.
- Mã nguồn nội bộ và kho GitHub đã được đồng bộ theo các lần commit của dự án.
- Tài liệu 14 mật thư và nhật ký này được đưa vào kho mã nguồn để BTC có lịch sử thay đổi.

## 8. Việc cần BTC chốt tiếp theo

1. Chọn một trong hai thể thức: **49 hướng nhiều lớp** hoặc **7 mật thư chung + 7 mật thư A9**.
2. Chốt luật điện thoại, cách ghi nhận đáp án trạm và mức trừ/thưởng khi dùng gợi ý.
3. Test ít nhất hai đội thật; ghi thời gian giải từng câu, tỷ lệ thành công và lỗi đọc bảng mã.
4. Sau khi chốt thể thức, refactor website và HTML in theo đúng một bộ duy nhất, rồi in thử và xuất bản lại.
