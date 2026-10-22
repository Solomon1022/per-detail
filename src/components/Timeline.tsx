"use client";

import { useLang } from "@/context/LanguageProvider";
import type { TimelineItem } from "@/content/resume";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  const { t } = useLang();

  return (
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i} className="manga-card manga-card-hover p-6 md:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-black">{t(item.title.zh, item.title.en)}</h3>
            <span className="font-mono text-xs text-[var(--fg-soft)]">{item.period}</span>
          </div>
          <p className="mt-1 text-sm font-bold text-accent">
            {t(item.org.zh, item.org.en)}
          </p>
          <ul className="mt-4 space-y-2">
            {item.points.map((p, j) => (
              <li key={j} className="flex gap-2.5 text-sm leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                {t(p.zh, p.en)}
              </li>
            ))}
          </ul>
          {item.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="manga-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
