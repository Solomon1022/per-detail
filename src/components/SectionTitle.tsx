"use client";

import { useLang } from "@/context/LanguageProvider";

export default function SectionTitle({
  index,
  zh,
  en,
}: {
  index: string;
  zh: string;
  en: string;
}) {
  const { t } = useLang();

  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm font-bold text-accent">{index}</span>
      <h2 className="whitespace-nowrap text-2xl font-black tracking-tight md:text-4xl">
        {t(zh, en)}
      </h2>
      <div className="h-[2px] flex-1 bg-[var(--line)]" />
    </div>
  );
}
