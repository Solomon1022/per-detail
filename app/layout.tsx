import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "张昭坤 Zhaokun Zhang | AI Application Developer",
  description:
    "张昭坤的个人作品集。AI 应用开发、前端工程与产品设计实践。",
  metadataBase: new URL("https://per-detail2.vercel.app"),
  openGraph: {
    title: "张昭坤 Zhaokun Zhang | AI Application Developer",
    description: "Building ideas into useful products.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f5f1",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
