"use client";
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="public-main"><div className="error-box"><h1>Chưa tải được trang</h1><p>Dữ liệu đang tạm thời không sẵn sàng.</p><button onClick={reset}>Thử lại</button><a href="/">Về trang chủ</a></div></main>;}
