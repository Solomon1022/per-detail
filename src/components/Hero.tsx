"use client";

import { ArrowDown, Mail, MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageProvider";
import { resume } from "@/content/resume";
import AvatarHover from "./AvatarHover";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-10 px-5 pb-16 pt-24 md:flex-row md:gap-16"
    >
      <div className="order-2 flex-1 animate-fade-up text-center md:order-1 md:text-left">
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
        <AvatarHover />
      </div>
    </section>
  );
}
