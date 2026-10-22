"use client";

import { Mail } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { useLang } from "@/context/LanguageProvider";
import { resume } from "@/content/resume";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t-2 border-[var(--line)] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5">
        <div className="flex gap-3">
          <a
            href={resume.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center border-2 border-[var(--line)] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={`mailto:${resume.contacts.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center border-2 border-[var(--line)] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
          >
            <Mail size={17} />
          </a>
        </div>
        <p className="text-xs text-[var(--fg-soft)]">
          © {new Date().getFullYear()}{" "}
          {t("张昭坤 · 用 Next.js 构建", "Zhaokun Zhang · Built with Next.js")}
        </p>
      </div>
    </footer>
  );
}
