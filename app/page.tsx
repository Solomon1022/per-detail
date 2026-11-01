"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type Language = "zh" | "en";
type ChatMessage = { role: "user" | "assistant"; text: string };

const links = {
  github: "https://github.com/Solomon1022",
  sequflow: "https://www.sequflow.com",
  sequflowApp: "https://app.sequflow.com",
  sequflowRepo: "https://github.com/Solomon1022/sequflow",
  bulby: "https://my-website-pi-seven-66.vercel.app/",
  bulbyRepo: "https://github.com/Solomon1022/my-website",
  portfolioRepo: "https://github.com/Solomon1022/per-detail",
  studyRepo: "https://github.com/Solomon1022/study-hub",
  fanArchive: "https://fanarchive.sequflow.com",
};

const copy = {
  zh: {
    nav: ["关于我", "项目作品", "经历", "技能", "联系我"],
    availability: "开放 2027 届实习机会",
    heroEyebrow: "AI APPLICATION DEVELOPER · CREATIVE BUILDER",
    heroTitleA: "把想法，",
    heroTitleB: "做成能用的产品。",
    heroDesc: "你好，我是张昭坤。一个喜欢把 AI、前端开发与真实业务场景连接起来的电子商务专业学生。",
    heroNote: "从需求梳理、界面设计，到功能开发与部署，我喜欢把一个想法完整地做出来。",
    viewWork: "看看我的项目",
    contactMe: "联系我",
    heroSide: "一个正在持续创作与构建的人",
    heroTag: "AI × WEB × PRODUCT",
    statProjects: "在线 / 实践项目",
    statMonths: "小红书运营实战",
    statFocus: "当前求职方向",
    aboutKicker: "A LITTLE ABOUT ME",
    aboutTitle: "技术之外，也关心产品为什么而做。",
    aboutP1: "我就读于珠海科技学院电子商务专业，预计 2027 年 6 月毕业。对我来说，开发不只是把页面写出来，更重要的是理解需求、设计流程，并让功能真正解决问题。",
    aboutP2: "我有独立完成 Web 产品的实践，也做过商家内容运营。这让我习惯同时从开发实现、用户体验和业务目标三个角度思考。",
    education: "教育背景",
    educationValue: "珠海科技学院 · 电子商务本科",
    grad: "预计 2027 年 6 月毕业",
    working: "实习安排",
    workingValue: "每周 4–5 天 · 可接受异地",
    base: "技术关键词",
    baseValue: "React · Next.js · TypeScript · Supabase",
    projectsKicker: "SELECTED WORK",
    projectsTitle: "一些认真做出来的东西。",
    projectsDesc: "从 AI 学习应用，到流程管理工具，再到持续探索中的产品。以下是我参与设计、开发或独立推进的项目。",
    featured: "重点项目",
    live: "线上体验",
    source: "查看代码",
    inProgress: "开发中",
    fanMade: "粉丝自制项目",
    sequflowDesc: "面向结构化思考与流程管理的 Web 应用。支持顺序流管理、富文本步骤编辑、步骤排序、导入导出，并内置 AI 小助手。",
    sequflowRole: "独立产品设计与开发 · 核心 Web 项目",
    bulbyDesc: "漫画风格的 AI 英语学习应用，围绕英语对话练习、不同学习阶段与考试场景设计学习体验，并提供单词本功能。",
    bulbyRole: "独立产品设计与开发 · AI 教育应用",
    studyDesc: "持续开发中的个人学习工作台，包含书签、提示词管理、学习与待办等模块，探索把知识整理和个人工作流放在同一空间。",
    studyRole: "个人项目 · 持续开发中",
    fanDesc: "围绕粉丝收藏与二创周边展示搭建的独立站点，采用纯静态前端实现。非官方粉丝自制项目。",
    fanRole: "独立设计与前端实现 · 粉丝自制项目",
    experienceKicker: "EXPERIENCE",
    experienceTitle: "既理解内容，也理解它背后的业务目标。",
    xhsTitle: "小红书商家内容运营",
    xhsDate: "2025.05 — 2025.12 · 7 个月",
    xhsIntro: "直接对接商家，围绕产品定位与下单转化目标，参与内容策略制定和矩阵账号运营。",
    xhs1: "商家沟通与需求梳理：了解商家诉求、产品定位及推广目标，形成可执行的内容方向。",
    xhs2: "商家画像整理：使用 Word 文档记录商家特点、目标受众、产品卖点与内容需求，作为内容策划依据。",
    xhs3: "内容生产流程：结合画像与内容模板生成帖子初稿，再由人工审核、修改和优化。",
    xhs4: "矩阵账号运营：根据账号定位安排硬广、种草、求助互动等内容，并进行发布与维护。",
    xhs5: "互动与转化目标：维护评论区、回复用户反馈，围绕商家下单转化目标持续调整内容表达。",
    xhsFoot: "注：此处呈现实际工作流程，不虚构转化率或账号增长数据。",
    skillsKicker: "TOOLBOX",
    skillsTitle: "把想法落地时，我常用这些工具。",
    frontend: "前端开发",
    ai: "AI 应用集成",
    backend: "数据与部署",
    product: "产品与创作",
    skillFrontend: "JavaScript · TypeScript · React · Next.js · HTML · CSS · Tailwind CSS",
    skillAI: "DeepSeek API · OpenAI API · WorkBuddy 及其他大模型 API · Prompt 设计 · AI 交互流程",
    skillBackend: "Supabase · Prisma · GitHub · Vercel · Cloudflare · API Routes · Server Actions",
    skillProduct: "需求梳理 · 功能规划 · UI 视觉设计 · 小红书内容运营 · 视频剪辑 · 电商视觉",
    creativeKicker: "A HANDMADE CORNER",
    creativeTitle: "网站里，也留一点自己的笔触。",
    creativeDesc: "这些角色与小图案由我亲手绘制。OC 是我的原创角色；灯泡 Bulby 则是我为学习产品设计的小助手。网站直接使用原始画稿，不用 AI 重绘。",
    ocLabel: "MY ORIGINAL CHARACTER",
    bulbyLabel: "BULBY · LITTLE HELPER",
    contactKicker: "SAY HELLO",
    contactTitle: "有项目、有机会，欢迎和我聊聊。",
    contactDesc: "正在寻找 2027 届 AI 应用开发 / AI 前端开发实习机会。可以通过邮件或 GitHub 联系我。",
    emailMain: "主联系邮箱",
    emailAlt: "备用邮箱",
    phone: "联系电话",
    githubLabel: "GitHub 主页",
    copy: "复制",
    copied: "已复制",
    footer: "用好奇心搭建，用细节打磨。",
    assistantHello: "嗨！我是 Bulby，你的作品集小向导。想先了解项目、技术，还是联系张昭坤？",
    assistantTitle: "Bulby 小助手",
    assistantSub: "PORTFOLIO GUIDE · 本地演示",
    assistantInput: "问我关于项目或技能的问题…",
    send: "发送",
    suggestions: ["他做过哪些项目？", "他会哪些技术？", "怎么联系他？"],
    assistantDemo: "我是站内预设向导，没有连接外部大模型 API。",
    themeLight: "浅色模式",
    themeDark: "深色模式",
    menu: "打开菜单",
  },
  en: {
    nav: ["About", "Projects", "Experience", "Skills", "Contact"],
    availability: "OPEN TO 2027 INTERNSHIPS",
    heroEyebrow: "AI APPLICATION DEVELOPER · CREATIVE BUILDER",
    heroTitleA: "Turning ideas",
    heroTitleB: "into useful products.",
    heroDesc: "Hi, I’m Zhaokun Zhang — an e-commerce student who enjoys connecting AI, frontend engineering and real-world business needs.",
    heroNote: "From understanding requirements and designing interfaces to building features and shipping products, I enjoy bringing ideas all the way to life.",
    viewWork: "Explore projects",
    contactMe: "Get in touch",
    heroSide: "Always learning, making and building",
    heroTag: "AI × WEB × PRODUCT",
    statProjects: "Live / practical projects",
    statMonths: "Months of Xiaohongshu ops",
    statFocus: "Current focus",
    aboutKicker: "A LITTLE ABOUT ME",
    aboutTitle: "I care about the why behind the product, not just the code.",
    aboutP1: "I study E-commerce at Zhuhai College of Science and Technology and expect to graduate in June 2027. To me, development is more than building pages: it is about understanding needs, designing flows and solving real problems.",
    aboutP2: "I have independently built web products and worked on merchant content operations. This helps me think across implementation, user experience and business goals.",
    education: "Education",
    educationValue: "Zhuhai College of Science and Technology · B.A. in E-commerce",
    grad: "Expected June 2027",
    working: "Internship availability",
    workingValue: "4–5 days / week · Open to relocation",
    base: "Core stack",
    baseValue: "React · Next.js · TypeScript · Supabase",
    projectsKicker: "SELECTED WORK",
    projectsTitle: "Things I’ve put real care into.",
    projectsDesc: "From an AI learning app to a workflow tool and products still in progress — here are projects I designed, built or independently drove.",
    featured: "FEATURED",
    live: "Live demo",
    source: "Source code",
    inProgress: "IN PROGRESS",
    fanMade: "FAN-MADE PROJECT",
    sequflowDesc: "A web app for structured thinking and workflow management. It includes sequence management, rich-text step editing, reordering, import/export and an AI assistant.",
    sequflowRole: "Independent product design & development · Core web project",
    bulbyDesc: "A manga-inspired AI English learning app featuring conversation practice, learning levels and exam-oriented scenarios, with a vocabulary notebook.",
    bulbyRole: "Independent product design & development · AI learning app",
    studyDesc: "A personal learning workspace in active development, bringing bookmarks, prompt management, study tools and to-dos into one place.",
    studyRole: "Personal project · In active development",
    fanDesc: "A standalone showcase for fan collectibles and fan-made merchandise concepts. Built with a static frontend; unofficial fan-made project.",
    fanRole: "Independent design & frontend implementation · Fan-made project",
    experienceKicker: "EXPERIENCE",
    experienceTitle: "I understand content — and the business goals behind it.",
    xhsTitle: "Xiaohongshu Merchant Content Operations",
    xhsDate: "May 2025 — Dec 2025 · 7 months",
    xhsIntro: "Worked directly with merchants on product positioning, content strategy and matrix-account operations, with purchase conversion as the business goal.",
    xhs1: "Merchant communication: clarified business needs, product positioning and promotion goals, then translated them into content directions.",
    xhs2: "Merchant profiles: documented merchant characteristics, audiences, selling points and content needs in Word briefs.",
    xhs3: "Content workflow: generated draft posts from profiles and templates, followed by human review, editing and refinement.",
    xhs4: "Matrix accounts: planned and maintained promotional, seeding and help-seeking / discussion-style posts for different account positions.",
    xhs5: "Engagement and conversion: maintained comment sections and responded to users while iterating content around purchase-conversion goals.",
    xhsFoot: "Note: This section describes the actual workflow; no unverified conversion or follower metrics are claimed.",
    skillsKicker: "TOOLBOX",
    skillsTitle: "Tools I use to turn ideas into working products.",
    frontend: "Frontend development",
    ai: "AI application integration",
    backend: "Data & deployment",
    product: "Product & creative",
    skillFrontend: "JavaScript · TypeScript · React · Next.js · HTML · CSS · Tailwind CSS",
    skillAI: "DeepSeek API · OpenAI API · WorkBuddy and other LLM APIs · Prompt design · AI interaction flows",
    skillBackend: "Supabase · Prisma · GitHub · Vercel · Cloudflare · API Routes · Server Actions",
    skillProduct: "Requirements · Feature planning · UI design · Xiaohongshu content ops · Video editing · E-commerce visuals",
    creativeKicker: "A HANDMADE CORNER",
    creativeTitle: "A little of my own hand-drawn world. ",
    creativeDesc: "These characters and small illustrations are drawn by me. The OC is my original character; Bulby is a little helper created for my learning product. The site uses the original artwork without AI redraws.",
    ocLabel: "MY ORIGINAL CHARACTER",
    bulbyLabel: "BULBY · LITTLE HELPER",
    contactKicker: "SAY HELLO",
    contactTitle: "Have a project or an opportunity? Let’s talk.",
    contactDesc: "Currently looking for 2027 graduate internships in AI application development and AI frontend engineering. Email or GitHub are the best ways to reach me.",
    emailMain: "Primary email",
    emailAlt: "Alternative email",
    phone: "Phone",
    githubLabel: "GitHub profile",
    copy: "Copy",
    copied: "Copied",
    footer: "Built with curiosity, refined with care.",
    assistantHello: "Hey! I’m Bulby, your portfolio guide. Curious about projects, skills or how to contact Zhaokun?",
    assistantTitle: "Bulby Guide",
    assistantSub: "PORTFOLIO GUIDE · LOCAL DEMO",
    assistantInput: "Ask about projects or skills…",
    send: "Send",
    suggestions: ["What has he built?", "What technologies does he use?", "How can I contact him?"],
    assistantDemo: "I’m a preset on-site guide and am not connected to an external LLM API.",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    menu: "Open menu",
  },
};

const projects = [
  {
    id: "sequflow",
    name: "SequFlow",
    category: "WORKFLOW WEB APP",
    status: "featured",
    tags: ["Next.js 15", "TypeScript", "Supabase", "TipTap", "Zustand"],
  },
  {
    id: "bulby",
    name: "Bulby English",
    category: "AI ENGLISH LEARNING",
    status: "featured",
    tags: ["HTML / CSS / JS", "DeepSeek API", "Vercel Functions"],
  },
  {
    id: "study",
    name: "Study Hub",
    category: "PERSONAL LEARNING WORKSPACE",
    status: "progress",
    tags: ["Next.js", "TypeScript", "Prisma", "NextAuth", "React Flow"],
  },
  {
    id: "fan",
    name: "FAN ARCHIVE",
    category: "FAN-MADE SHOWCASE",
    status: "fan",
    tags: ["HTML / CSS / JS", "Responsive UI", "Vercel"],
  },
];

function ProjectVisual({ id }: { id: string }) {
  if (id === "bulby") {
    return (
      <div className="project-visual project-visual--bulby">
        <div className="visual-label">LEARN WITH A LITTLE SPARK</div>
        <Image src="/assets/bulby-mascot.png" alt="Bulby 手绘灯泡小助手" width={240} height={430} className="visual-bulby" />
        <span className="visual-sticker">AI × ENGLISH</span>
      </div>
    );
  }
  if (id === "sequflow") {
    return (
      <div className="project-visual project-visual--flow">
        <div className="flow-window"><div className="window-dots"><i /><i /><i /></div><div className="flow-layout"><div className="flow-sidebar"><b>SEQUFLOW</b><span /><span /><span /><span /></div><div className="flow-main"><strong>My sequence</strong><div className="flow-line"><em>01</em><span>Define the idea</span></div><div className="flow-line"><em>02</em><span>Shape the workflow</span></div><div className="flow-line"><em>03</em><span>Make it happen</span></div></div></div></div>
        <span className="visual-sticker">THINK IN STEPS</span>
      </div>
    );
  }
  if (id === "study") {
    return (
      <div className="project-visual project-visual--study">
        <div className="study-board"><span className="study-node node-a">BOOKMARKS</span><span className="study-node node-b">PROMPTS</span><span className="study-node node-c">STUDY</span><span className="study-node node-d">TO-DO</span><div className="study-center">MY<br />STUDY HUB</div></div>
        <span className="visual-sticker">BUILDING IN PUBLIC</span>
      </div>
    );
  }
  return (
    <div className="project-visual project-visual--fan">
      <div className="fan-card"><span>FAN</span><strong>ARCHIVE</strong><small>COLLECT · KEEP · REMEMBER</small><div className="fan-star">✳</div></div>
      <span className="visual-sticker">A FAN-MADE SPACE</span>
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const t = copy[language];

  const navIds = ["about", "projects", "experience", "skills", "contact"];
  const navLabels = t.nav;

  const assistantAnswer = useMemo(() => (question: string) => {
    const q = question.toLowerCase();
    if (q.includes("联系") || q.includes("contact") || q.includes("邮箱") || q.includes("email")) {
      return language === "zh"
        ? "可以通过 3161594975@qq.com 或 swiftjust001122@gmail.com 联系张昭坤，也可以访问 GitHub：github.com/Solomon1022。"
        : "Reach Zhaokun at 3161594975@qq.com or swiftjust001122@gmail.com, or visit github.com/Solomon1022.";
    }
    if (q.includes("技术") || q.includes("skill") || q.includes("stack") || q.includes("会什么")) {
      return language === "zh"
        ? "主要技术包括 JavaScript、TypeScript、React、Next.js、Supabase；AI 方面有 DeepSeek、OpenAI、WorkBuddy 等大模型 API 接入实践。"
        : "Core tools include JavaScript, TypeScript, React, Next.js and Supabase, plus hands-on integrations with DeepSeek, OpenAI and WorkBuddy-related LLM APIs.";
    }
    if (q.includes("项目") || q.includes("built") || q.includes("project") || q.includes("作品")) {
      return language === "zh"
        ? "重点项目有 SequFlow（流程管理 Web 应用）和 Bulby English（AI 英语学习应用）；此外还有开发中的 Study Hub，以及 FAN ARCHIVE 粉丝自制展示站。"
        : "Featured projects include SequFlow (a workflow web app) and Bulby English (an AI English learning app), alongside Study Hub in development and the fan-made FAN ARCHIVE site.";
    }
    if (q.includes("运营") || q.includes("experience") || q.includes("小红书")) {
      return language === "zh"
        ? "张昭坤在 2025 年 5 月至 12 月参与小红书商家内容运营，负责商家需求梳理、画像文档、模板化内容初稿、人工审核、矩阵账号发布和评论互动维护。"
        : "From May to December 2025, Zhaokun worked on Xiaohongshu merchant content operations: requirements, merchant briefs, templated drafts with human review, matrix accounts and comment engagement.";
    }
    return language === "zh"
      ? "我可以介绍项目、技术栈、运营经历和联系方式。你也可以点下面的快捷问题，或者直接滚动浏览页面。"
      : "I can help with projects, technologies, operations experience and contact details. Try one of the quick questions below, or explore the page.";
  }, [language]);

  function sendMessage(value?: string) {
    const question = (value ?? input).trim();
    if (!question) return;
    setMessages((prev) => [...prev, { role: "user", text: question }, { role: "assistant", text: assistantAnswer(question) }]);
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage();
  }

  async function copyText(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  }

  return (
    <main className={`site-shell${dark ? " site-shell--dark" : ""}`}>
      <div className="paper-grid" aria-hidden="true" />
      <header className="site-header">
        <div className="container header-inner">
          <Link href="#top" className="wordmark" aria-label="Zhaokun Zhang home">zhaokun<span>.</span></Link>
          <nav className={`main-nav${menuOpen ? " main-nav--open" : ""}`} aria-label="主导航">
            {navIds.map((id, index) => <Link key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{navLabels[index]}</Link>)}
          </nav>
          <div className="header-actions">
            <button className="text-toggle" onClick={() => setLanguage(language === "zh" ? "en" : "zh")} aria-label="Switch language">{language === "zh" ? "EN" : "中"}</button>
            <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? t.themeLight : t.themeDark} title={dark ? t.themeLight : t.themeDark}>{dark ? "☼" : "◐"}</button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.menu}>{menuOpen ? "×" : "☰"}</button>
          </div>
        </div>
      </header>

      <section className="hero-section container" id="top">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" />{t.availability}</div>
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitleA}<br /><span>{t.heroTitleB}</span></h1>
          <p className="hero-desc">{t.heroDesc}</p>
          <p className="hero-note">{t.heroNote}</p>
          <div className="hero-buttons">
            <Link href="#projects" className="button button--dark">{t.viewWork}<span>↗</span></Link>
            <Link href="#contact" className="button button--light">{t.contactMe}<span>↗</span></Link>
          </div>
          <div className="hero-meta"><span>⌁ {t.heroSide}</span><span className="hero-meta-tag">{t.heroTag}</span></div>
        </div>
        <div className="hero-art-wrap">
          <div className="hero-art-card">
            <div className="art-card-top"><span>ORIGINAL ARTWORK</span><span>01 / OC</span></div>
            <Image src="/assets/oc-main.png" alt="张昭坤原创 OC 手绘角色" width={760} height={760} priority className="hero-oc" />
            <span className="art-heart art-heart--one">♥</span><span className="art-heart art-heart--two">♥</span>
            <div className="art-caption"><strong>Zhaokun’s OC</strong><span>{t.heroSide}</span></div>
          </div>
          <div className="floating-note floating-note--top">✳ made with curiosity</div>
          <div className="floating-note floating-note--bottom">{t.heroTag}</div>
        </div>
      </section>

      <section className="quick-stats container" aria-label="个人概览">
        <div className="stat-cell"><strong>04<span>+</span></strong><span>{t.statProjects}</span></div>
        <div className="stat-cell"><strong>07<span>mo</span></strong><span>{t.statMonths}</span></div>
        <div className="stat-cell stat-cell--focus"><strong>AI<span> × </span>Web</strong><span>{t.statFocus}</span></div>
      </section>

      <section className="section container about-section" id="about">
        <div className="section-kicker"><span>01</span>{t.aboutKicker}</div>
        <div className="about-grid">
          <div><h2 className="section-title">{t.aboutTitle}</h2></div>
          <div className="about-copy"><p>{t.aboutP1}</p><p>{t.aboutP2}</p></div>
        </div>
        <div className="facts-grid">
          <div className="fact-card"><span className="fact-label">{t.education}</span><strong>{t.educationValue}</strong><small>{t.grad}</small></div>
          <div className="fact-card"><span className="fact-label">{t.working}</span><strong>{t.workingValue}</strong></div>
          <div className="fact-card"><span className="fact-label">{t.base}</span><strong>{t.baseValue}</strong></div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-kicker"><span>02</span>{t.projectsKicker}</div>
          <div className="section-heading-row"><div><h2 className="section-title">{t.projectsTitle}</h2><p className="section-intro">{t.projectsDesc}</p></div><span className="section-side-note">SELECTED / 2024—2026</span></div>
          <div className="projects-grid">
            {projects.map((project) => {
              const desc = project.id === "sequflow" ? t.sequflowDesc : project.id === "bulby" ? t.bulbyDesc : project.id === "study" ? t.studyDesc : t.fanDesc;
              const role = project.id === "sequflow" ? t.sequflowRole : project.id === "bulby" ? t.bulbyRole : project.id === "study" ? t.studyRole : t.fanRole;
              const demo = project.id === "sequflow" ? links.sequflowApp : project.id === "bulby" ? links.bulby : project.id === "fan" ? links.fanArchive : null;
              const repo = project.id === "sequflow" ? links.sequflowRepo : project.id === "bulby" ? links.bulbyRepo : project.id === "study" ? links.studyRepo : null;
              return (
                <article className={`project-card project-card--${project.id}`} key={project.id}>
                  <ProjectVisual id={project.id} />
                  <div className="project-card-body">
                    <div className="project-overline"><span>{project.category}</span>{project.status === "featured" ? <b>{t.featured}</b> : project.status === "progress" ? <b className="status-progress">{t.inProgress}</b> : <b className="status-fan">{t.fanMade}</b>}</div>
                    <h3>{project.name}</h3><p className="project-role">{role}</p><p className="project-desc">{desc}</p>
                    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="project-links">{demo && <Link href={demo} target="_blank" rel="noreferrer">{t.live} ↗</Link>}{repo && <Link href={repo} target="_blank" rel="noreferrer">{t.source} ↗</Link>}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section container experience-section" id="experience">
        <div className="section-kicker"><span>03</span>{t.experienceKicker}</div>
        <div className="experience-grid"><div><h2 className="section-title">{t.experienceTitle}</h2><p className="section-intro">{language === "zh" ? "从商家沟通到内容交付，理解业务目标如何转化为具体执行。" : "Turning merchant needs and business goals into an actionable content workflow."}</p></div>
          <article className="experience-card"><div className="experience-top"><div><span className="experience-type">CONTENT OPERATIONS</span><h3>{t.xhsTitle}</h3></div><span className="experience-date">{t.xhsDate}</span></div><p className="experience-intro">{t.xhsIntro}</p><ul><li>{t.xhs1}</li><li>{t.xhs2}</li><li>{t.xhs3}</li><li>{t.xhs4}</li><li>{t.xhs5}</li></ul><p className="experience-footnote">{t.xhsFoot}</p></article>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container"><div className="section-kicker"><span>04</span>{t.skillsKicker}</div><h2 className="section-title">{t.skillsTitle}</h2>
          <div className="skills-grid">
            <div className="skill-card"><span className="skill-number">01</span><div className="skill-icon">⌘</div><h3>{t.frontend}</h3><p>{t.skillFrontend}</p></div>
            <div className="skill-card"><span className="skill-number">02</span><div className="skill-icon">✳</div><h3>{t.ai}</h3><p>{t.skillAI}</p></div>
            <div className="skill-card"><span className="skill-number">03</span><div className="skill-icon">▤</div><h3>{t.backend}</h3><p>{t.skillBackend}</p></div>
            <div className="skill-card"><span className="skill-number">04</span><div className="skill-icon">✎</div><h3>{t.product}</h3><p>{t.skillProduct}</p></div>
          </div>
        </div>
      </section>

      <section className="section container creative-section">
        <div className="section-kicker"><span>05</span>{t.creativeKicker}</div>
        <div className="creative-grid"><div className="creative-copy"><h2 className="section-title">{t.creativeTitle}</h2><p className="section-intro">{t.creativeDesc}</p><div className="creative-legend"><span><i className="legend-dot legend-dot--red" /> ORIGINAL CHARACTER</span><span><i className="legend-dot legend-dot--gray" /> PRODUCT MASCOT</span></div></div>
          <div className="creative-art-grid"><div className="creative-art creative-art--oc"><Image src="/assets/oc-glasses.png" alt="原创 OC 的戴眼镜手绘版本" width={500} height={500} /><span>{t.ocLabel}</span></div><div className="creative-art creative-art--bulby"><Image src="/assets/bulby-mascot.png" alt="Bulby 灯泡小助手手绘形象" width={360} height={640} /><span>{t.bulbyLabel}</span></div></div>
        </div>
      </section>

      <section className="contact-section" id="contact"><div className="container contact-inner"><div className="section-kicker"><span>06</span>{t.contactKicker}</div><div className="contact-grid"><div><h2>{t.contactTitle}</h2><p>{t.contactDesc}</p></div><div className="contact-details">
        <div className="contact-row"><div><span>{t.emailMain}</span><strong>3161594975@qq.com</strong></div><button onClick={() => copyText("3161594975@qq.com")}>{copied === "3161594975@qq.com" ? t.copied : t.copy}</button></div>
        <div className="contact-row"><div><span>{t.emailAlt}</span><strong>swiftjust001122@gmail.com</strong></div><button onClick={() => copyText("swiftjust001122@gmail.com")}>{copied === "swiftjust001122@gmail.com" ? t.copied : t.copy}</button></div>
        <div className="contact-row"><div><span>{t.phone}</span><strong>+86 158 7549 9799</strong></div><a href="tel:+8615875499799">↗</a></div>
        <div className="contact-row"><div><span>{t.githubLabel}</span><strong>github.com/Solomon1022</strong></div><Link href={links.github} target="_blank" rel="noreferrer">↗</Link></div>
      </div></div><div className="contact-bottom"><span>ZHANG ZHAOKUN / 2027 GRADUATE</span><span>AI APPLICATION DEVELOPMENT · FRONTEND</span></div></div></section>

      <footer className="site-footer container"><Link href="#top" className="wordmark">zhaokun<span>.</span></Link><p>{t.footer}</p><span>© 2026 Zhaokun Zhang</span></footer>

      <div className="assistant-root">
        {assistantOpen && <section className="assistant-panel" aria-label={t.assistantTitle}>
          <div className="assistant-panel-head"><div className="assistant-bulby-mini"><Image src="/assets/bulby-mascot.png" alt="Bulby" width={64} height={110} /></div><div><strong>{t.assistantTitle}</strong><span>{t.assistantSub}</span></div><button onClick={() => setAssistantOpen(false)} aria-label="Close assistant">×</button></div>
          <div className="assistant-messages"><div className="assistant-message assistant-message--bot">{t.assistantHello}</div>{messages.map((message, index) => <div key={`${index}-${message.role}`} className={`assistant-message ${message.role === "user" ? "assistant-message--user" : "assistant-message--bot"}`}>{message.text}</div>)}</div>
          {messages.length === 0 && <div className="assistant-suggestions">{t.suggestions.map((suggestion) => <button key={suggestion} onClick={() => sendMessage(suggestion)}>{suggestion} ↗</button>)}</div>}
          <form className="assistant-form" onSubmit={handleSubmit}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder={t.assistantInput} aria-label={t.assistantInput} /><button type="submit">{t.send}</button></form>
          <div className="assistant-demo-note">ⓘ {t.assistantDemo}</div>
        </section>}
        <button className={`assistant-launcher${assistantOpen ? " assistant-launcher--open" : ""}`} onClick={() => setAssistantOpen(!assistantOpen)} aria-label={assistantOpen ? "Close Bulby assistant" : "Open Bulby assistant"}>
          {assistantOpen ? <span>×</span> : <><Image src="/assets/bulby-mascot.png" alt="Bulby 小助手" width={76} height={136} /><i>ASK BULBY</i></>}
        </button>
      </div>
    </main>
  );
}
