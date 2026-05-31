import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEMME — 생각나면 그냥 던져",
  description: "카톡 보내듯 메모하고, 나중에 한번에 정리. 흩어진 생각을 모아주는 개인 메모 앱.",
  icons: { icon: "/mainlogo.png" },
  openGraph: {
    title: "MEMME — 생각나면 그냥 던져",
    description: "카톡 보내듯 메모하고, 나중에 한번에 정리.",
    type: "website",
    images: [{ url: "/mainlogo.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
