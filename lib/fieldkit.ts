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
export const finalAnswer='DOI MOI SANG TAO HOA NHIP TUONG LAI CONG NGHE VI CONG DONG';
export const finalDisplay='ĐỔI MỚI SÁNG TẠO — HÒA NHỊP TƯƠNG LAI — CÔNG NGHỆ VÌ CỘNG ĐỒNG';
export const fragmentDisplay='Trạm 1: ĐỔI MỚI · 2: SÁNG TẠO · 3: HÒA NHỊP · 4: TƯƠNG LAI · 5: CÔNG NGHỆ · 6: VÌ · 7: CỘNG ĐỒNG.';
export const finalContext='Thông điệp của chương trình kết nối tinh thần Nghị quyết 57-NQ/TW về phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia với vai trò đóng góp của sinh viên CN&KT cho cộng đồng. Đây là diễn giải giáo dục của chương trình, không phải khẩu hiệu hay trích dẫn chính thức của Trường, Khoa, Đảng bộ hoặc Chính phủ.';
const keys=['KHỞI HÀNH','ĐỔI MỚI','SÁNG TẠO','HÒA NHỊP','TƯƠNG LAI','CÔNG NGHỆ','VÌ','CỘNG ĐỒNG'];
const methods=['Vigenère + khóa thơ','Atbash + dịch vòng','Morse + đảo khối','Polybius + hoán vị tọa độ','Bacon + chữ nhị phân','Affine + kiểm tra cơ số','Lưới cột + đọc đường đi'];
const fragments=[
 'Đọc ngược toàn bộ chuỗi: HNAH IOHK. Đây là lời chúc xuất phát, không phải mảnh ghép cuối.',
 'Phiếu nguồn: 57-NQ/TW · Bộ Chính trị · 22/12/2024. Hãy gọi tên hành động làm cái đang có trở nên tốt hơn, khác hơn và hiệu quả hơn. Ghi một cụm gồm hai tiếng.',
 'Một bản phác thảo chỉ thật sự có ý nghĩa khi biến thành cách làm hoặc giá trị chưa từng có. Hãy gọi tên năng lực tạo ra điều mới ấy. Ghi một cụm gồm hai tiếng.',
 'Trong dàn nhạc, nhiều nhạc cụ không mất bản sắc nhưng cùng một nhịp để tạo thành giai điệu. Gọi tên trạng thái phối hợp ấy. Ghi một cụm gồm hai tiếng.',
 'Câu hỏi của trạm không hỏi “hôm qua ta đã làm gì?”, mà hỏi “ngày mai ta muốn đến đâu?”. Hãy gọi tên hướng nhìn về phía trước. Ghi một cụm gồm hai tiếng.',
 'Từ bản vẽ, dữ liệu, mã nguồn và quy trình, con người tạo ra công cụ giải quyết vấn đề. Gọi tên lĩnh vực biến tri thức thành giải pháp. Ghi một cụm gồm hai tiếng.',
 'Mọi giải pháp kỹ thuật cần trả lời: “làm điều này ___ ai, ___ mục đích gì?”. Ghi đúng từ nối biểu đạt động cơ phụng sự, chỉ một tiếng.',
 'Giá trị của giải pháp không dừng ở một cá nhân hay một đội; nó lan tới tập thể cùng sống, học tập và phát triển. Gọi tên chủ thể ấy. Ghi một cụm gồm hai tiếng.',
];
const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberWords=['KHONG','MOT','HAI','BA','BON','NAM','SAU','BAY'];
const clean=(text:string)=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().replace(/[^A-Z]/g,'');
const caesar=(text:string,shift:number)=>clean(text).split('').map(char=>alphabet[(alphabet.indexOf(char)+shift+26)%26]).join('');
const atbash=(text:string)=>clean(text).split('').map(char=>alphabet[25-alphabet.indexOf(char)]).join('');
const vigenere=(text:string,key:string)=>clean(text).split('').map((char,index)=>alphabet[(alphabet.indexOf(char)+alphabet.indexOf(clean(key)[index%clean(key).length]))%26]).join('');
const morse:{[key:string]:string}={A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..'};
const reverse=(text:string)=>text.split('').reverse().join('');
const polybius=(text:string)=>clean(text).replace(/J/g,'I').split('').map(char=>{const i='ABCDEFGHIKLMNOPQRSTUVWXYZ'.indexOf(char);return String(Math.floor(i/5)+1)+String(i%5+1);}).join(' ');
const bacon=(text:string)=>clean(text).split('').map(char=>alphabet.indexOf(char).toString(2).padStart(5,'0').replace(/0/g,'S').replace(/1/g,'D')).join(' ');
const affine=(text:string)=>clean(text).split('').map(char=>alphabet[(5*alphabet.indexOf(char)+8)%26]).join('');
const columnEncode=(text:string)=>{const raw=clean(text);const width=4;const rows=Math.ceil(raw.length/width);const grid=Array.from({length:rows},(_,row)=>Array.from({length:width},(_,col)=>raw[row*width+col]||'X'));return [2,4,1,3].map(col=>grid.map(row=>row[col-1]).join('')).join(' ');};
const poem=(letters:string,tail:string)=>{const verses:{[key:string]:string}={A:'Ai giữ được bình tĩnh mới nhìn ra đường đi.',C:'Cả đội chỉ có thể qua trạm khi cùng kiểm chứng.',D:'Dưới lớp chữ bình thường thường còn một quy tắc khác.',E:'Em đừng vội tin kết quả đầu tiên vừa tìm được.',G:'Giữa ngã rẽ, điều nhỏ nhất đôi khi là chiếc khóa.',H:'Hãy chia vai: người nhìn, người tính, người ghi.',I:'Im lặng quan sát, rồi mới chọn bước tiếp theo.',K:'Khi những dấu hiệu nối lại, lối đi sẽ hiện ra.',L:'Lúc còn phân vân, hãy trở về điểm bắt đầu.',M:'Mỗi ký tự đều có lý do xuất hiện trên phiếu.',N:'Người giữ khóa không nên tự giải một mình.',O:'Ô cửa đúng chỉ mở sau khi hai lớp đều khớp.',P:'Phía trước không xa, nhưng không dành cho người hấp tấp.',T:'Từng bước đúng quan trọng hơn một đáp án vội vàng.',U:'Ươm một giả thuyết, rồi dùng dữ kiện để kiểm tra.'};return clean(letters).split('').map(letter=>verses[letter]||letter).join('\n')+`\n${tail}`;};
function routePuzzle(from:number,to:number){
 const target=to===0?'VE TRUNG TAM':`DEN TRAM ${numberWords[to]}`;
 const style=(from*3+to)%7;
 const code=`MÃ ĐÍCH sau cùng có dạng: ${to===0?'VE TRUNG TAM':'DEN TRAM <tên-số>'}. Đối chiếu bảng D00–D07, không suy đoán từ khoảng cách.`;
 if(style===0){const key='KHOA';return `MẬT THƯ 3 LỚP · VIGENÈRE\n\nOT — ${poem(key,'Lấy chữ đầu bốn dòng đầu làm khóa.')}\n\nNW — A=0…Z=25. Với khóa lặp K, giải P = C − K:\n${vigenere(target,key)}\n\nKIỂM CHỨNG — ${code}`;}
 if(style===1){const shift=from+2;const roman=['I','II','III','IV','V','VI','VII','VIII'][shift-1];return `MẬT THƯ 3 LỚP · ATBASH + XOAY\n\nOT — ${poem('GUONG','“Gương chữ cái” nghĩa là A↔Z, B↔Y. Sau đó xoay tiến đúng số La Mã: '+roman+'.')}\n\nNW — ${atbash(caesar(reverse(target),-shift))}\n\nKIỂM CHỨNG — Đảo ngược chuỗi NW → soi gương bảng chữ → xoay tiến ${roman}. ${code}`;}
 if(style===2){const reversed=reverse(target);const blocks=clean(reversed).match(/.{1,4}/g)||[];return `MẬT THƯ 3 LỚP · MORSE + ĐẢO KHỐI\n\nOT — ${poem('NGHE','Từ đầu dòng cho biết cách đọc: NGHE. Dấu / ngăn chữ, | ngăn khối; hãy đổi Morse, nối các khối theo thứ tự in rồi đọc ngược toàn bộ chuỗi.')}\n\nNW — ${blocks.map(block=>block.split('').map(char=>morse[char]).join('/')).join(' | ')}\n\nKIỂM CHỨNG — ${code}`;}
 if(style===3){const encoded=polybius(reverse(target));return `MẬT THƯ 3 LỚP · Ô VUÔNG 5×5\n\nOT — ${poem('TOA DO','Lấy chữ đầu: TOA DO. Dùng bảng Polybius: 11=A, 12=B… 15=E; 21=F… 55=Z (I/J chung ô).')}\n\nNW — ${encoded}\n\nKIỂM CHỨNG — Giải tọa độ rồi đọc chuỗi theo chiều ngược lại. ${code}`;}
 if(style===4){const bits=bacon(target);return `MẬT THƯ 3 LỚP · BACON\n\nOT — ${poem('NHI PHAN','Chữ đầu nói NHI PHAN. Quy ước S=0, D=1; mỗi 5 dấu là một chữ A=00000… Z=11001.')}\n\nNW — ${bits}\n\nKIỂM CHỨNG — ${code}`;}
 if(style===5){const encrypted=affine(reverse(target));return `MẬT THƯ 3 LỚP · HÀM AFFINE\n\nOT — ${poem('MODULO','Chữ đầu: MODULO. Đánh A=0…Z=25. Trên bản mã dùng C=(5P+8) mod 26; hãy tìm P, rồi đọc ngược.')}\n\nNW — ${encrypted}\n\nKIỂM CHỨNG — ${code}`;}
 return `MẬT THƯ 3 LỚP · LƯỚI CỘT\n\nOT — ${poem('DOC COT','Lấy chữ đầu: DOC COT. Bản mã gồm 4 cột, phát theo thứ tự cột 2 → 4 → 1 → 3. Mỗi cột đọc từ trên xuống; X cuối chỉ là đệm.')}\n\nNW — ${columnEncode(target)}\n\nKIỂM CHỨNG — Ghép lại lưới theo thứ tự 2–4–1–3, đọc từng hàng. ${code}`;
}
const semanticHints=['Đây là lời chúc xuất phát, không mang đáp án cuối.','Xem 57-NQ/TW như dữ kiện gợi nghĩa, không cần nhớ nguyên văn tiêu đề.','Tìm tên của năng lực biến ý tưởng thành giá trị mới.','Tìm một trạng thái nhiều người cùng chung nhịp, không phải “đoàn kết”.','Tìm một cụm hai tiếng chỉ hướng nhìn về phía ngày mai.','Tìm lĩnh vực đưa tri thức vào công cụ và giải pháp.','Câu trả lời chỉ có một tiếng, là từ nối chỉ mục đích / động cơ.','Câu trả lời chỉ tập thể rộng hơn cá nhân và một nhóm chơi.'];
export function card(from:number,to:number){const style=(from*3+to)%7;return {id:to===0?`R${from}0`:`C${from}${to}`,from,to,method:methods[style],route:routePuzzle(from,to),fragment:fragments[from],keyword:keys[from],solution:`Địa điểm: D0${to} — ${destinations[to].name} (${destinations[to].lat.toFixed(6)}, ${destinations[to].lng.toFixed(6)}). Mảnh giữ lại: ${keys[from]}.`,hint1:`Mật thư này có ít nhất hai thao tác: lấy quy tắc hoặc khóa ở OT, rồi áp dụng cho NW. Cách dùng ${methods[style]} được ghi đủ dữ kiện trên phiếu.`,hint2:semanticHints[from]};}
export const bank=Array.from({length:8},(_,from)=>Array.from({length:7},(_,i)=>i+1).filter(to=>to!==from).map(to=>card(from,to))).flat();
export const returns=Array.from({length:7},(_,i)=>card(i+1,0));
export const decoder='Bảng này chỉ dùng cho lớp A để tìm trạm tiếp theo. Lớp B là mảnh ngữ nghĩa: đọc kỹ dữ kiện, gọi tên khái niệm phù hợp, ghi đáp án riêng của đội và giữ lại để ghép cuối. Khi ghép, ưu tiên nghĩa của cả thông điệp thay vì cố ghép theo số chữ. Những thông tin về văn bản chính sách đã được in trực tiếp trên phiếu; không cần truy cập mạng.';
export const bonusHints=['Đáp án là thông điệp định hướng của chương trình, không phải địa danh hay khẩu hiệu chính thức.','Bảy trạm tạo thành ba vế: khát vọng tạo điều mới; cách đi cùng thời đại; giá trị dành cho mọi người.','Mảnh 1 neo vào văn bản 57-NQ/TW; mảnh 2 là năng lực biến ý tưởng thành giá trị.','Mảnh 3–4 nói về cùng nhịp và nhìn về phía trước.','Mảnh 5–7 nói về công cụ, động cơ phục vụ và đối tượng thụ hưởng.','Đặt các khái niệm theo thứ tự trạm 1 → 7, rồi thêm dấu ngắt hợp lý thành ba vế.','Đối chiếu từng khái niệm với hành động, năng lực, trạng thái, tầm nhìn, lĩnh vực, động cơ và chủ thể ở bảy phiếu.'];
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
