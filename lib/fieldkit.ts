// Imported only by authenticated server routes. Never import into client components.
export const destinations=[
 {id:0,name:'Sân A9',game:'Trung tâm',lat:10.419312,lng:105.644340},
 {id:1,name:'Sân đá banh',game:'Vượt đầm lầy',lat:10.420777,lng:105.644399},
 {id:2,name:'Khu T',game:'Ra-đa dẫn đường',lat:10.419337,lng:105.645022},
 {id:3,name:'Trước tòa H2',game:'Tháp ly tốc độ',lat:10.419688,lng:105.644049},
 {id:4,name:'Hồ bơi',game:'Tìm bi trong hồ',lat:10.422329,lng:105.640870},
 {id:5,name:'Đường chạy C1',game:'Bảo vệ bong bóng',lat:10.421667,lng:105.641517},
 {id:6,name:'Sân C2, giữa C1–C2',game:'Chuyền vòng',lat:10.422046,lng:105.641630},
 {id:7,name:'Sân bóng rổ, gần B4',game:'Truy tìm kho báu',lat:10.421665,lng:105.642891},
];
export const finalAnswer='KET NOI DAM ME BAN LINH TIEN PHONG';
const keys=['KHOI HANH','KET','NOI','DAM','ME','BAN','LINH','TIEN PHONG'];
const methods=['Khởi hành','Toán học','Vật lý & Morse','Hóa học','Sinh học & nhị phân','Văn học','Tiếng Anh & Caesar','Tin học'];
const fragments=[
 'Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.',
 'Tính theo thứ tự: (3² + 2), √25, (4 × 5). Đổi số thành chữ với A=1, …, Z=26.',
 'Dùng bảng Morse: -. / --- / .. . Dấu / phân cách chữ cái.',
 'Lấy số hiệu nguyên tử Z của Be, H, Al rồi đổi A=1, …, Z=26.',
 'Quy ước riêng của trò chơi: A=00, C=01, G=10, T=11. Giải ATC / ACC thành hai số nhị phân, đổi sang thập phân rồi A1Z26. Không dùng mã di truyền hay nguyên tắc bổ sung DNA.',
 'Đọc chữ đầu từng dòng, giữ nguyên thứ tự:\nBền lòng vượt hết chông gai.\nAi cùng chung sức, đường dài hóa gần.\nNắm tay viết tiếp mùa xuân.',
 'Three steps back reveal the word. Giải OLQK bằng bảng chữ cái A–Z, quay vòng khi cần.',
 'Giải ASCII 8 bit: 01010100 01001001 01000101 01001110 / 01010000 01001000 01001111 01001110 01000111. Dấu / phân cách từ.',
];
const atom=['','H','He','Li','Be','B','C','N'];const english=['','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN'];
function routePuzzle(from:number,to:number){
 if(to===0)return 'Đã thu đủ bảy dấu trạm: trở về sân có ký hiệu A(3²), nơi cả đội đã khởi hành. Tra D00 trên bảng địa điểm.';
 if(from===0)return `Tìm số nguyên n trong 1–7: 3n + 2 = ${3*to+2}. Đi đến D0n trong bảng địa điểm.`;
 if(from===1)return `Tìm n: 2n + 3 = ${2*to+3}. Đi đến D0n trong bảng địa điểm.`;
 if(from===2)return `Một dao động có chu kỳ T = 2 giây. Trong ${2*to} giây có bao nhiêu chu kỳ hoàn chỉnh? Gọi kết quả là n, đi đến D0n.`;
 if(from===3)return `Tìm số hiệu nguyên tử Z của ${atom[to]}. Đặt n = Z, đi đến D0n. Dùng bảng nguyên tố được phát.`;
 if(from===4){const bits=to.toString(2).padStart(4,'0');const code=[bits.slice(0,2),bits.slice(2)].map(b=>'ACGT'[parseInt(b,2)]).join('');return `Quy ước A=00, C=01, G=10, T=11. Đổi ${code} thành số nhị phân 4 bit rồi thập phân n. Đi đến D0n.`;}
 if(from===5)return `Đếm số từ ngăn bởi khoảng trắng trong dòng “${['BẠN','CÙNG','NHAU','BƯỚC','QUA','THỬ','THÁCH'].slice(0,to).join(' ')}”. Gọi kết quả là n, đi đến D0n.`;
 if(from===6)return `Your next destination is station ${english[to]}. Đổi số tiếng Anh thành n và tra D0n.`;
 return `Đổi số nhị phân ${to.toString(2).padStart(3,'0')} sang thập phân n. Đi đến D0n.`;
}
export function card(from:number,to:number){return {id:to===0?`R${from}0`:`C${from}${to}`,from,to,method:methods[from],route:routePuzzle(from,to),fragment:fragments[from],keyword:keys[from],solution:`Địa điểm: D0${to} — ${destinations[to].name} (${destinations[to].lat.toFixed(6)}, ${destinations[to].lng.toFixed(6)}). Mảnh giữ lại: ${keys[from]}.`,hint1:'Giải riêng phần địa điểm và phần mảnh ghép. Tra đúng bảng quy ước được phát.',hint2:from===0?'Chuyển 2 sang vế phải, chia 3; đọc chuỗi từ phải sang trái.':from===1?'Các số của mảnh ghép là 11, 5, 20.':from===2?'Số chu kỳ = thời gian / chu kỳ. Morse lần lượt là N, O, I.':from===3?'Be=4, H=1, Al=13.':from===4?'ATC = 001101 = 13; ACC = 000101 = 5.':from===5?'Đọc B, A, N ở đầu ba dòng.':from===6?'Lùi từng chữ 3 vị trí: O→L, L→I, Q→N, K→H.':'Đổi từng nhóm 8 bit sang mã ASCII; dấu / là khoảng trắng.'};}
export const bank=Array.from({length:8},(_,from)=>Array.from({length:7},(_,i)=>i+1).filter(to=>to!==from).map(to=>card(from,to))).flat();
export const returns=Array.from({length:7},(_,i)=>card(i+1,0));
export const decoder='A1Z26: A=1 B=2 C=3 D=4 E=5 F=6 G=7 H=8 I=9 J=10 K=11 L=12 M=13 N=14 O=15 P=16 Q=17 R=18 S=19 T=20 U=21 V=22 W=23 X=24 Y=25 Z=26. Morse: N=-. O=--- I=.. . Nguyên tố: H=1 He=2 Li=3 Be=4 B=5 C=6 N=7 Al=13. Quy ước DNA của trò chơi: A=00 C=01 G=10 T=11. Tiếng Anh: ONE=1 TWO=2 THREE=3 FOUR=4 FIVE=5 SIX=6 SEVEN=7. ASCII: E=69 G=71 H=72 I=73 N=78 O=79 P=80 T=84. Caesar: bảng A–Z quay vòng. Nhị phân: các vị trí từ phải sang trái là 1, 2, 4, 8, 16, 32, 64, 128.';
export const bonusHints=['Đáp án là một thông điệp đồng đội được sáng tác cho chương trình, không phải địa danh.','Thông điệp gồm hai vế, mỗi vế bốn từ.','Vế đầu nói về sự gắn kết cùng niềm yêu thích.','Vế sau nói về phẩm chất và tinh thần đi đầu.','Hai từ cuối là TIÊN PHONG.','Vế đầu mở bằng KẾT NỐI; vế sau mở bằng BẢN LĨNH.','KẾT NỐI ĐAM MÊ — BẢN LĨNH TIÊN PHONG.'];
export const ideas=[
 ['Toán','Giải 3x − 2 = 13; lấy x làm trạm đến.','x=5 → đường chạy C1.'],
 ['Vật lý','Một vật chuyển động đều 2 m/s trong 3 s. Lấy quãng đường theo mét làm n.','s=6 m → sân C2.'],
 ['Hóa','Lấy Z của nguyên tố N trong bảng được phát.','Z=7 → sân bóng rổ gần B4.'],
 ['Sinh','Cho A↔T, G↔C. Viết chuỗi bổ sung của ATGC; lấy số ký tự làm n.','TACG, bốn ký tự → hồ bơi.'],
 ['Văn','Đọc chữ đầu: Sức trẻ chung đường / Ai cùng tiến bước / Nối những ước mơ. Thêm A(3²).','SAN A9 → trung tâm. Thơ mới sáng tác.'],
 ['Anh','Find the court with hoops near B4.','Sân bóng rổ gần B4 → D07.'],
 ['Sử','Thẻ dữ kiện: Quốc khánh Việt Nam 02/09/1945. Lấy chữ số cuối của năm.','5 → đường chạy C1; in dữ kiện trên thẻ.'],
 ['Địa lý','Trong bảng GPS tám địa điểm, nơi nào có vĩ độ lớn nhất?','10.422329 → hồ bơi. Không suy ra đường đi từ khoảng cách thẳng.'],
 ['Tin học','Không cần chạy máy: sum([1, 0, 1]) cho kết quả gì?','2 → Khu T.'],
 ['DThU','Theo phiếu giới thiệu chính thức, trường thành lập ngày 10/01/2003. Lấy chữ số cuối năm.','3 → trước H2. Nguồn: https://www.dthu.edu.vn/pView.aspx?idmn=8&idp=4'],
 ['Khoa / ngành','In bảng ngành đã xác nhận từ website khoa, đánh số 1–7; ghép ba mô tả nghề với đúng ngành, đọc ký tự ở cột khóa.','Mẫu biên soạn cần chốt bảng ngành trước khi phát; không tự gán ngành chưa xác minh. Nguồn: https://cnkt.dthu.edu.vn/'],
 ['Đoàn / Hội','Phát một phiếu thông tin có nguồn, ngày chốt và ba dòng đánh số; câu hỏi tìm đúng dòng chứa tên tổ chức rồi đọc cột khóa.','BTC điền từ khóa đích sau khi xác minh phiếu; không dùng chức danh đương nhiệm từ trí nhớ.'],
 ['Nghị quyết','Thẻ nguồn ghi 57-NQ/TW, ngày 22/12/2024, Bộ Chính trị. Lấy chữ số hàng đơn vị trừ hàng chục của số nghị quyết.','7−5=2 → Khu T. Không gọi đây là nghị quyết của Chính phủ.'],
 ['Chính phủ / Quốc hội','Đưa hai đoạn văn bản chính thức, mỗi đoạn gắn một chữ; yêu cầu ghép đúng cơ quan ban hành theo dòng đầu rồi đọc chữ.','Mẫu cần điền văn bản cụ thể đã xác minh; chấm khả năng đọc nguồn, không chấm quan điểm.'],
 ['Tin Việt Nam / thế giới','In ba bản tin ngắn có ngày giờ rõ ràng và các nhãn H, O, I; sắp từ cũ đến mới.','BTC chọn thứ tự cho kết quả HOI hoặc đổi nhãn thành từ khóa cần dùng; khóa bộ tin trước ngày tổ chức.'],
 ['Bản đồ trường','Tìm khoảng sân nằm giữa hai khối C1 và C2 trên sơ đồ.','D06; đối chiếu GPS và biển chỉ dẫn thực tế.'],
 ['Đồng Tháp / Việt Nam','Phát bốn thẻ địa danh và tọa độ đã kiểm chứng, gắn ký tự; sắp từ bắc xuống nam.','Sắp theo vĩ độ giảm; đáp án xác định từ chính bộ dữ kiện in, tránh tên hành chính đã đổi.'],
 ['Atbash','A↔Z, B↔Y,… Giải HZM Z9.','SAN A9 → trung tâm.'],
 ['Đảo chuỗi','Đọc ngược 9A NAS.','SAN A9 → trung tâm.'],
 ['Tọa độ lưới','Đánh hàng 1–3, cột A–C trên sơ đồ in; mỗi ô có một ký tự. Đọc các tọa độ BTC cho theo thứ tự.','Mẫu tùy bản in: khóa bảng lưới và chuỗi tọa độ trước; không dùng pixel ảnh làm GPS.'],
];
