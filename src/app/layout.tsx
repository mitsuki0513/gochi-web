import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gochi - 大学生限定・無料ごはんマッチング",
  description: "憧れの先輩社員や企業メンターと美味しいご飯をごちそうになりながら繋がろう",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-slate-100 text-[#121c2a] flex justify-center selection:bg-orange-200">
        <div className="w-full max-w-md min-h-screen bg-[#f8f9ff] relative shadow-2xl overflow-x-hidden flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
