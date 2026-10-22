"use client";

import { Languages } from "lucide-react";
import { useLang } from "@/context/LanguageProvider";

export default function LangToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      type="button"
      aria-label="Switch language"
      onClick={toggleLang}
      className="flex h-9 shrink-0 items-center gap-1.5 border-2 border-[var(--line)] px-2.5 text-xs font-bold transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
    >
      <Languages size={15} />
      {lang === "zh" ? "EN" : "中文"}
    </button>
  );
}
