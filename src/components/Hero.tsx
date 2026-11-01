"use client";

import { ArrowDown, Mail, MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageProvider";
import { resume } from "@/content/resume";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col items-center justify-center gap-8 px-5 pb-12 pt-20 md:flex-row md:gap-10"
    >
      <div className="order-2 relative flex-1 animate-fade-up text-center md:order-1 md:text-left">
        <p className="mb-3 font-mono text-sm font-bold text-accent">
          {t("你好，我是", "Hi there, I'm")}
        </p>
        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
          {t(resume.name.zh, resume.name.en)}
        </h1>
        <p className="mt-4 text-lg font-bold md:text-2xl">
          {t(resume.title.zh, resume.title.en)}
        </p>
        <p className="mt-3 font-hand text-base text-[var(--fg-soft)] md:text-lg">
          {t(resume.tagline.zh, resume.tagline.en)}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[var(--fg-soft)] md:justify-start">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} />
            {t(resume.location.zh, resume.location.en)}
          </span>
        </div>
        <p className="mt-2 text-xs text-[var(--fg-soft)] md:text-sm">
          {t(resume.availability.zh, resume.availability.en)}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <a href="#projects" className="manga-btn">
            {t("查看项目", "View Projects")}
          </a>
          <a href="#contact" className="manga-btn-outline">
            <Mail size={16} />
            {t("联系我", "Contact Me")}
          </a>
        </div>
      </div>

      {/* 装饰：Hero 右侧留白区，CSS 几何图形错落分布（细线、小尺寸、低调配色、无动画） */}
      <div className="order-1 md:order-2">
        <div
          aria-hidden
          className="pointer-events-none relative hidden h-72 w-60 md:block"
        >
          {/* 虚线圆形（右上） */}
          <div className="absolute right-2 top-0 h-16 w-16 rounded-full border border-dashed border-[var(--line)] opacity-50" />
          {/* 实线正方形（左上，轻微旋转） */}
          <div className="absolute left-0 top-6 h-10 w-10 rotate-6 border border-[var(--line)] opacity-50" />
          {/* 实心小圆（中上，accent） */}
          <div className="absolute left-20 top-2 h-2 w-2 rounded-full bg-accent opacity-60" />
          {/* 实线矩形（右中，accent 细线） */}
          <div className="absolute right-8 top-10 h-7 w-10 border border-accent opacity-60" />
          {/* 实线小正方形（右中，轻微反向旋转） */}
          <div className="absolute right-0 top-16 h-5 w-5 -rotate-6 border border-[var(--line)] opacity-50" />
          {/* 实心小圆（左中，中性色） */}
          <div className="absolute left-16 top-24 h-2 w-2 rounded-full bg-[var(--line)] opacity-50" />
          {/* 实线矩形（左下） */}
          <div className="absolute bottom-20 left-2 h-8 w-12 border border-[var(--line)] opacity-50" />
          {/* 虚线正方形（右下，轻微旋转） */}
          <div className="absolute bottom-8 right-4 h-9 w-9 rotate-12 border border-dashed border-[var(--line)] opacity-50" />
          {/* 实线小正方形（中下，轻微旋转） */}
          <div className="absolute bottom-4 left-24 h-5 w-5 rotate-6 border border-[var(--line)] opacity-50" />
        </div>
      </div>

      {/* 装饰：向下滚动提示（仅桌面端） */}
      <a
        href="#about"
        aria-label={t("向下滚动查看更多", "Scroll down to see more")}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 md:flex"
      >
        <span className="flex h-9 w-9 animate-bounce items-center justify-center border-2 border-[var(--line)] bg-[var(--card)]">
          <ArrowDown size={15} />
        </span>
      </a>
    </section>
  );
}
