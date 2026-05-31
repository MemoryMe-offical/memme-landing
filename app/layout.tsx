import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://memme-landing.kro.kr"),
  title: "MEMME — 생각나면 그냥 던져",
  description: "카톡 보내듯 메모하고, 나중에 한번에 정리. 흩어진 생각을 모아주는 개인 메모 앱.",
  icons: { icon: "/mainlogo.png" },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MEMME — 생각나면 그냥 던져",
    description: "카톡 보내듯 메모하고, 나중에 한번에 정리.",
    url: "/",
    siteName: "MEMME",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/ogImage.png",
        width: 1200,
        height: 630,
        alt: "MEMME — 생각나면 그냥 던져",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEMME — 생각나면 그냥 던져",
    description: "카톡 보내듯 메모하고, 나중에 한번에 정리.",
    images: ["/ogImage.png"],
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
