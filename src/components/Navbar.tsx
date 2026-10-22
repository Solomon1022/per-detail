"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageProvider";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";

const navItems = [
  { id: "about", zh: "关于", en: "About" },
  { id: "education", zh: "教育", en: "Education" },
  { id: "experience", zh: "经历", en: "Experience" },
  { id: "projects", zh: "项目", en: "Projects" },
  { id: "skills", zh: "技能", en: "Skills" },
  { id: "contact", zh: "联系", en: "Contact" },
];

export default function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link href="#top" className="text-lg font-black tracking-tight">
          Z<span className="text-accent">Z</span>K
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-bold transition-colors hover:text-accent"
            >
              {t(item.zh, item.en)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border-2 border-[var(--line)] md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-2 border-[var(--line)] md:hidden">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-1 px-5 py-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="px-2 py-2 text-sm font-bold hover:text-accent"
              >
                {t(item.zh, item.en)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
