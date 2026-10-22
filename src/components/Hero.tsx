"use client";

import { ArrowDown, Mail, MapPin, Sparkles, Star } from "lucide-react";
import { useLang } from "@/context/LanguageProvider";
import { resume } from "@/content/resume";
import AvatarHover from "./AvatarHover";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col items-center justify-center gap-8 px-5 pb-12 pt-20 md:flex-row md:gap-10"
    >
      <div className="order-2 relative flex-1 animate-fade-up text-center md:order-1 md:text-left">
        {/* 装饰：右上角闪光 */}
        <Sparkles
          aria-hidden
          className="pointer-events-none absolute -top-4 right-4 hidden h-5 w-5 animate-float text-accent md:block"
        />
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
            <ArrowDown size={16} />
          </a>
          <a href="#contact" className="manga-btn-outline">
            <Mail size={16} />
            {t("联系我", "Contact Me")}
          </a>
        </div>
      </div>

      <div className="order-1 md:order-2">
        <div className="relative mx-auto w-56 md:w-72">
          {/* 装饰：虚线方框 */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-3 -top-3 h-14 w-14 border-2 border-dashed border-[var(--line)] opacity-50"
          />
          {/* 装饰：漂浮星星 */}
          <Star
            aria-hidden
            className="pointer-events-none absolute -right-3 -top-4 h-7 w-7 animate-float fill-accent text-accent"
          />
          {/* 装饰：小色块 */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-3 -left-4 h-3 w-3 rotate-12 bg-accent"
          />
          <AvatarHover />
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
