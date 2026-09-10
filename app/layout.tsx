import type { Metadata } from "next";
import "./globals.css";
import "./hub.css";
import "./field.css";

export const metadata: Metadata = {
  title: "CNKT Event Hub · DThU",
  description:
    "Cổng đăng ký và vận hành sự kiện của Khoa Công nghệ và Kỹ thuật, Trường Đại học Đồng Tháp.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
