export type EventSeed = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  eventType: string;
  audience: string;
  description: string;
  eventDate: string | null;
  eventTime: string | null;
  venue: string;
  capacity: number | null;
  registrationOpen: boolean;
  status: "REGISTRATION_OPEN" | "COMING_SOON";
  accent: "cobalt" | "coral";
};

export const eventSeeds: EventSeed[] = [
  {
    id: "teambuilding-k26-2026",
    slug: "teambuilding-k26",
    title: "Teambuilding K26 CN&KT",
    shortTitle: "Teambuilding K26",
    eventType: "Hoạt động kết nối",
    audience: "105 sinh viên K26 · CN&KT DThU",
    description:
      "Một buổi chiều kết nối, bùng nổ nhiệt huyết và chinh phục 8 trạm thử thách cùng Khoa Công nghệ và Kỹ thuật.",
    eventDate: "2026-09-13",
    eventTime: "14:45",
    venue: "Sân A9 · Trường Đại học Đồng Tháp",
    capacity: 105,
    registrationOpen: true,
    status: "REGISTRATION_OPEN",
    accent: "cobalt",
  },
  {
    id: "gala-k26-2026",
    slug: "gala-chao-mung-k26",
    title: "Gala chào mừng Tân sinh viên K26",
    shortTitle: "Gala K26",
    eventType: "Gala chào mừng",
    audience: "Toàn thể sinh viên K26 · CN&KT DThU",
    description:
      "Đêm gặp gỡ chính thức của K26: nhận diện hành trình mới, kết nối các lớp và chào mừng khóa sinh viên mới của Khoa.",
    eventDate: null,
    eventTime: null,
    venue: "Địa điểm sẽ được Ban tổ chức công bố",
    capacity: null,
    registrationOpen: false,
    status: "COMING_SOON",
    accent: "coral",
  },
];

export const teambuildingStations = [
  ["Vượt đầm lầy", "Vượt địa hình & phối hợp"],
  ["Ra-đa dẫn đường", "Định hướng theo tín hiệu"],
  ["Tháp ly tốc độ", "Khéo léo & bứt phá"],
  ["Tìm bi trong hồ", "Tập trung trong thử thách"],
  ["Bảo vệ bong bóng", "Giữ nhịp cùng đồng đội"],
  ["Chuyền vòng", "Kết nối không ngừng"],
  ["Truy tìm kho báu", "Theo dấu mật thư"],
  ["Giải mật thư cuối", "Về đích tại trung tâm"],
] as const;

export function formatEventDate(value: string | null) {
  if (!value) return "Sẽ cập nhật";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

export function makeTicketCode(eventId: string) {
  const prefix = eventId.startsWith("teambuilding") ? "TB26" : "GALA26";
  return `${prefix}-${crypto.randomUUID().replaceAll("-", "").slice(0, 8).toUpperCase()}`;
}
