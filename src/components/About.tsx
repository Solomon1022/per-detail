"use client";

import { Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useLang } from "@/context/LanguageProvider";
import { resume } from "@/content/resume";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-20">
      <SectionTitle index="01" zh="关于我" en="About" />

      <div className="grid gap-8 md:grid-cols-5">
        <div className="manga-card manga-card-hover p-7 md:col-span-3">
          <p className="leading-relaxed">{t(resume.about.zh, resume.about.en)}</p>
          <p className="mt-6 text-sm font-bold text-[var(--fg-soft)]">
            {t("兴趣：", "Interests: ")}
            <span className="font-hand">
              {t(resume.interests.zh, resume.interests.en)}
            </span>
          </p>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-4 flex items-center gap-2 font-black">
            <Sparkles size={18} className="text-accent" />
            {t("代表性亮点", "Highlights")}
          </h3>
          <ul className="space-y-3">
            {resume.highlights.map((h, i) => (
              <li key={i} className="manga-card p-4 text-sm leading-relaxed">
                <span className="mr-2 font-black text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t(h.zh, h.en)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
