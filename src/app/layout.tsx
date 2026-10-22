import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "张昭坤 Zhaokun Zhang | E-commerce × Front-end",
    template: "%s | 张昭坤 Zhaokun Zhang",
  },
  description:
    "张昭坤的个人网站 — 电子商务运营 × 前端开发，独立开发过 SequFlow、Bulby English 两个上线项目。Zhaokun Zhang's personal site — E-commerce Operations × Front-end Developer.",
  keywords: [
    "张昭坤",
    "Zhaokun Zhang",
    "电子商务",
    "E-commerce",
    "Next.js",
    "Front-end",
  ],
  authors: [{ name: "张昭坤 Zhaokun Zhang" }],
  openGraph: {
    title: "张昭坤 Zhaokun Zhang | E-commerce × Front-end",
    description:
      "电子商务运营 × 前端开发，独立开发过 SequFlow、Bulby English 两个上线项目。",
    type: "website",
    url: "https://www.sequflow.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
