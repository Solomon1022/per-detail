"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import GithubIcon from "./GithubIcon";
import { useLang } from "@/context/LanguageProvider";
import { resume } from "@/content/resume";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      // 未配置邮件服务时，API 返回 mailto 链接，自动打开邮件客户端
      if (data.fallback) {
        window.location.href = data.fallback;
        setStatus("idle");
        return;
      }
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const contactRows = [
    {
      icon: Phone,
      label: t("手机 / 微信", "Phone / WeChat"),
      value: resume.contacts.phone,
      href: `tel:${resume.contacts.phone}`,
    },
    {
      icon: Mail,
      label: t("邮箱", "Email"),
      value: resume.contacts.email,
      href: `mailto:${resume.contacts.email}`,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "Solomon1022",
      href: resume.contacts.github,
    },
    {
      icon: MessageCircle,
      label: "WeChat",
      value: resume.contacts.wechat,
      href: null,
    },
  ];

  const inputClass =
    "w-full border-2 border-[var(--line)] bg-[var(--card)] px-4 py-2.5 text-sm outline-none transition-shadow focus:shadow-manga-sm dark:focus:shadow-manga-white";

  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-20">
      <SectionTitle index="06" zh="联系我" en="Contact" />

      <div className="grid gap-8 md:grid-cols-2">
        {/* 联系方式 */}
        <div className="space-y-3">
          {contactRows.map((row, i) => {
            const content = (
              <div className="manga-card manga-card-hover flex items-center gap-4 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[var(--line)]">
                  <row.icon size={17} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-[var(--fg-soft)]">{row.label}</p>
                  <p className="truncate text-sm font-bold">{row.value}</p>
                </div>
              </div>
            );
            return row.href ? (
              <a key={i} href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
          <p className="px-1 pt-2 text-xs text-[var(--fg-soft)]">
            {t("备用邮箱：", "Alt email: ")}
            {resume.contacts.emailAlt}
          </p>
        </div>

        {/* 表单 */}
        <form onSubmit={handleSubmit} className="manga-card space-y-4 p-6">
          <div>
            <label className="mb-1.5 block text-xs font-bold">
              {t("姓名", "Name")}
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              placeholder={t("你的称呼", "Your name")}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold">
              {t("邮箱", "Email")}
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold">
              {t("留言内容", "Message")}
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
              placeholder={t("想和我说点什么…", "Say something…")}
            />
          </div>

          <button type="submit" disabled={status === "sending"} className="manga-btn w-full justify-center disabled:opacity-60">
            {status === "sending" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                {t("发送中…", "Sending…")}
              </>
            ) : (
              <>
                <Send size={16} />
                {t("发送留言", "Send Message")}
              </>
            )}
          </button>

          {status === "sent" && (
            <p className="flex items-center gap-2 text-sm font-bold text-accent">
              <CheckCircle2 size={16} />
              {t("发送成功！我会尽快回复你。", "Sent! I'll get back to you soon.")}
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-sm font-bold text-accent">
              <AlertCircle size={16} />
              {t("发送失败，请直接发邮件到 3161594975@qq.com", "Failed to send. Please email 3161594975@qq.com directly")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
