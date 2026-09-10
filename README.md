# CNKT Events — Cổng sự kiện DThU

Ứng dụng đăng ký và vận hành nhiều sự kiện cho Khoa Công nghệ và Kỹ thuật, Trường Đại học Đồng Tháp.

## Bản mở rộng: 29 màn hình nghiệp vụ

### Sinh viên (10)

| Đường dẫn | Màn hình |
| --- | --- |
| / | Trang chủ, sự kiện đang công bố |
| /su-kien | Danh mục, tìm kiếm và lọc trạng thái |
| /su-kien/:slug | Chi tiết sự kiện, hạn mức, trạm, chuẩn bị |
| /su-kien/:slug/dang-ky | Đăng ký, thông báo thành công, nhận mã vé |
| /tra-cuu | Tra cứu bằng mã hoặc đường dẫn vé |
| /ve/:code | Vé điện tử, in / lưu PDF và sao chép đường dẫn |
| /lich | Lịch hoạt động; tách thông tin chưa chốt |
| /thong-bao | Thông báo đã công bố |
| /bang-xep-hang | Tổng điểm các đội, đồng hạng khi bằng điểm |
| /ho-tro | FAQ và liên hệ hỗ trợ Teambuilding |

### Ban tổ chức (19)

| Đường dẫn | Màn hình |
| --- | --- |
| /admin | Tổng quan, khởi tạo K26, chỉ số và hoạt động gần đây |
| /admin/su-kien | Quản lý sự kiện |
| /admin/su-kien/tao-moi | Tạo sự kiện |
| /admin/su-kien/:id | Chỉnh sửa, mở / đóng / kết thúc sự kiện |
| /admin/sinh-vien | Danh sách, chi tiết liên hệ, phân đội, hủy vé |
| /admin/check-in | Check-in bằng mã theo đúng sự kiện |
| /admin/doi | Tạo đội và xem số thành viên |
| /admin/tram | Tạo / sửa trạm |
| /admin/dieu-phoi | Lịch 7 đội, trạm xuất phát, đội thua, thời lượng, xuất CSV, bản đồ GPS |
| /admin/mat-thu | 49 hướng mật thư + 7 thẻ về A9; lọc / in bộ theo đội, lời giải riêng BTC |
| /admin/thoi-gian | Thời gian hoàn thành, DNF, điểm trạm 7..1, đồng điểm và CSV |
| /admin/khieu-chien | Bốc thăm 7 lượt, thách đấu / phòng thủ, thưởng và gợi ý, lời giải cuối |
| /admin/kich-ban | Kịch bản, luật chơi, câu cuối, 20 ý tưởng liên môn |
| /admin/cham-diem | Ghi / sửa điểm, tổng điểm và chi tiết |
| /admin/bao-cao | Đăng ký, có mặt, tỷ lệ tham dự, xuất CSV |
| /admin/thong-bao | Soạn, sửa và công bố thông báo |
| /admin/phan-quyen | Thêm / sửa / thu hồi vai trò trong ứng dụng |
| /admin/nhat-ky | 100 thao tác gần nhất |
| /admin/cai-dat | Thông tin vận hành, quy tắc và tình trạng tích hợp |

Các đường dẫn /leaderboard và /station chuyển hướng đến trang tương ứng. Có trang 404, xử lý lỗi, tải lại, trạng thái trống.

## Dữ liệu và vận hành

- Vinext / React, các primitive Shadcn được giữ nguyên, Cloudflare Workers + D1.
- Chạy migration mới qua quy trình Sites khi xuất bản. Migration 0000 đã triển khai được giữ bất biến; 0001 bổ sung đội, phân đội, điểm, thông báo, thành viên, nhật ký và sửa index timestamp bị unique ngoài ý muốn.
- Lần đầu: chủ sở hữu đăng nhập trang BTC, chọn “Khởi tạo K26”. Thao tác không ghi đè sự kiện đã tồn tại.
- Teambuilding: 105 suất, 14:45 ngày 13/09/2026, Sân A9, 8 trạm theo dữ liệu người dùng.
- Gala K26: chưa chốt ngày / giờ / địa điểm, chưa mở đăng ký.
- Không sao chép con số 69 đăng ký của website cũ khi chưa có danh sách gốc.
- Một MSSV / sự kiện; hạn mức kiểm tra trong cùng câu INSERT để tránh vượt suất khi đồng thời.
- Hủy vé giữ lịch sử và trả suất; vé đã check-in không được hủy. MSSV của vé bị hủy vẫn được giữ để tránh đăng ký lặp; hiện cần quy trình BTC xử lý riêng nếu khôi phục.
- Các truy vấn ứng dụng dùng prepared statements. Các truy vấn dữ liệu cá nhân được kiểm tra vai trò ở server.
- Chủ sở hữu được xác nhận từ Sites. Thành viên thêm trong ứng dụng không tự động nhận quyền truy cập ở tầng chia sẻ Site và không nhận email mời.
- Vai trò: OWNER, ADMIN, CHECKIN, STATION, VIEWER. CHECKIN / STATION không được tải danh sách dữ liệu cá nhân.
- Mã vé mới dùng đầy đủ UUID ngẫu nhiên (32 hex). Mã vé là bearer token: không chia sẻ công khai.
- CSV chống công thức thực thi; xuất toàn bộ danh sách, UI hiển thị tối đa 5.000 đăng ký.

## Kiểm tra

- npm run build
- node node_modules/typescript/bin/tsc --noEmit --incremental false
- python tests/database_smoke.py
- node --experimental-strip-types tests/fieldkit.mjs

Thuật toán được kiểm tra trên 10.080 lịch (5.040 hoán vị xuất phát × 2 vòng), mỗi lượt không trùng trạm, mỗi đội đủ 7 trạm và đủ 7 mảnh; 49 đề dẫn đường, đồng thời gian, DNF và điểm khiêu chiến. Đây không phải kiểm tra đường đi thực địa hay kiểm thử trình duyệt.

## Bộ nội dung Teambuilding K26

- [49 mật thư, 7 phiếu về A9, đáp án và kịch bản đầy đủ](docs/TEAMBUILDING_K26_49_MAT_THU.md)
- [Python xuất lịch CSV không cần pandas](scripts/xep-lich-k26.py)
- Ngân hàng mật thư có đáp án trong mã nguồn. Repository công khai sẽ cho phép đọc bộ đáp án; BTC nên thay bộ câu cuối trước thi nếu cần giữ bí mật.
- Dữ liệu điều phối nằm trong D1, chỉ OWNER/ADMIN truy cập. Sửa đồng thời được kiểm tra revision; lưu lặp kết quả đội/trạm cập nhật một bản ghi logic.
- Thêm migration 0002 tạo field_sessions; không sửa các migration đã có.
- Giờ dự kiến 15:10, 6 phút chơi + 2 phút giải + 10 phút đi/chờ. Vòng đề xuất 1→2→3→7→6→4→5; cần khảo sát đường thực tế trước khi chốt.
- Điểm Tổng lực mới hiển thị riêng ở BTC; không cộng chồng hoặc thay thế bảng điểm chung công khai.
- Khiêu chiến đã chốt không sửa qua UI; thời điểm ghi đáp án là thời điểm thư ký nhập, không phải bộ đo thời gian nộp của từng đội.

Bài kiểm tra SQLite dùng bộ migration và câu SQL thực tế, xác nhận: giới hạn 105, nhiều đăng ký cùng timestamp, chống trùng MSSV, trả suất sau hủy, đóng đăng ký, check-in idempotent, sửa điểm không cộng trùng, foreign keys.

Không kiểm tra trình duyệt trong lượt mở rộng này. Chưa xác nhận các tương tác trên môi trường production của bản mở rộng.

## Giới hạn được hiển thị minh bạch

- Chưa gửi email / SMS tự động.
- Chưa tạo QR hoặc quét camera; hỗ trợ mã vé và máy quét nhập bàn phím.
- Chưa đối chiếu danh sách sinh viên chính thức (K26 hiện là điều kiện tự khai và nội dung sự kiện).
- Chưa import dữ liệu website cũ, chưa có offline check-in.
- Cài đặt hiển thị tình trạng thực tế, không có nút tích hợp giả.
- Bản mở rộng được lưu dưới dạng một phiên bản mới; không thay đổi bản live cho đến khi người dùng yêu cầu xuất bản.
