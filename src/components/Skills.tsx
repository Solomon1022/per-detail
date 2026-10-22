"use client";

import SectionTitle from "./SectionTitle";
import { useLang } from "@/context/LanguageProvider";
import { resume } from "@/content/resume";

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-20">
      <SectionTitle index="05" zh="技能栈" en="Skills" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resume.skills.map((group, i) => (
          <div key={i} className="manga-card manga-card-hover p-6">
            <h3 className="border-b-2 border-[var(--line)] pb-3 font-black">
              {t(group.category.zh, group.category.en)}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm">
                  <span className="text-accent">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
