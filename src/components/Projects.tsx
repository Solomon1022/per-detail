"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useLang } from "@/context/LanguageProvider";
import { resume } from "@/content/resume";

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-14">
      <SectionTitle index="04" zh="项目作品" en="Projects" />

      <div className="grid gap-8 md:grid-cols-2">
        {resume.projects.map((p) => (
          <div
            key={p.name}
            className="manga-card manga-card-hover flex flex-col overflow-hidden"
          >
            <div className="relative h-52 border-b-2 border-[var(--line)] bg-[var(--bg-soft)]">
              <Image
                src={p.image}
                alt={`${p.name} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black">{p.name}</h3>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.name}`}
                  className="text-[var(--fg-soft)] transition-colors hover:text-accent"
                >
                  <ExternalLink size={17} />
                </a>
              </div>
              <p className="mt-1 text-sm font-bold text-accent">
                {t(p.tagline.zh, p.tagline.en)}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed">
                {t(p.description.zh, p.description.en)}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <span key={tech} className="manga-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
