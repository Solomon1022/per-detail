export interface LocalizedText {
  zh: string;
  en: string;
}

export interface TimelineItem {
  period: string;
  title: LocalizedText;
  org: LocalizedText;
  points: LocalizedText[];
  tags?: string[];
}

export interface ProjectItem {
  name: string;
  tagline: LocalizedText;
  description: LocalizedText;
  tech: string[];
  url: string;
  image: string;
}

export interface SkillGroup {
  category: LocalizedText;
  items: string[];
}

export const resume = {
  name: { zh: "张昭坤", en: "Zhaokun Zhang" } as LocalizedText,

  title: {
    zh: "电子商务运营 × 前端开发",
    en: "E-commerce Operations × Front-end Developer",
  } as LocalizedText,

  location: { zh: "中国 · 珠海", en: "Zhuhai, China" } as LocalizedText,

  availability: {
    zh: "2026 年 11 月初可到岗 · 期望城市：杭州 / 深圳 / 中山（上海、北京亦可）",
    en: "Available from early Nov 2026 · Preferred: Hangzhou / Shenzhen / Zhongshan (Shanghai & Beijing also OK)",
  } as LocalizedText,

  tagline: {
    zh: "写过代码、做过运营、画过画的电子商务专业学生",
    en: "E-commerce student who codes, runs campaigns, and draws",
  } as LocalizedText,

  about: {
    zh: "珠海科技学院电子商务专业准大四学生。独立完成过两个从需求、开发到部署上线的完整产品项目，也在传媒公司做过 7 个月小红书运营。喜欢学习新东西，沟通与协作能力较好，能清晰讲出自己的诉求和项目的内容与架构，习惯理性、客观地结合实际去分析问题。",
    en: "A senior-year E-commerce student at Zhuhai College of Science and Technology. I have independently shipped two products end to end — from requirements and development to deployment — and spent 7 months running Xiaohongshu operations at a media company. I love learning new things, communicate well in teams, and can articulate needs and project architecture clearly. I analyze problems rationally, objectively, and pragmatically.",
  } as LocalizedText,

  highlights: [
    {
      zh: "独立完成 2 个已上线产品（SequFlow、Bulby English），覆盖需求 → 开发 → 部署 → 维护的完整闭环",
      en: "Independently shipped 2 live products (SequFlow, Bulby English), covering the full loop from requirements to deployment and maintenance",
    },
    {
      zh: "7 个月小红书运营实战，为个人与企业客户提供推广服务，具备真实商业化经验",
      en: "7 months of hands-on Xiaohongshu operations, serving individual and business clients with real commercial promotion experience",
    },
    {
      zh: "技术 × 运营复合背景：既能独立开发产品，也能做内容增长与用户沟通",
      en: "Hybrid tech × operations background: able to build products independently as well as drive content growth and user communication",
    },
  ] as LocalizedText[],

  education: [
    {
      period: "2023.09 – 2027.07",
      title: { zh: "电子商务（本科）", en: "E-commerce (Bachelor)" },
      org: { zh: "珠海科技学院", en: "Zhuhai College of Science and Technology" },
      points: [
        {
          zh: "毕业论文：《AI 虚拟主播的直播互动性对消费者购买意愿影响分析》，基于 SOR 模型与中介效应检验展开实证研究",
          en: "Thesis: \"The Impact of AI Virtual Streamers' Live Interaction on Consumers' Purchase Intention\" — an empirical study based on the SOR model and mediation analysis",
        },
        {
          zh: "课程实训：电商物流商业模式分析、MPS 主生产计划系统实操、淘宝店铺数据抓取与分析",
          en: "Course projects: e-commerce logistics business model analysis, MPS system practice, and Taobao store data scraping and analysis",
        },
      ],
      tags: ["SOR Model", "Empirical Research", "Data Analysis"],
    },
  ] as TimelineItem[],

  experience: [
    {
      period: "2025.05 – 2025.12",
      title: { zh: "小红书运营", en: "Xiaohongshu Operations" },
      org: { zh: "林野传媒有限公司", en: "Linye Media Co., Ltd." },
      points: [
        {
          zh: "负责小红书平台内容运营，为有需求的个人用户与企业提供推广、推流服务",
          en: "Ran Xiaohongshu content operations, providing promotion and traffic-boosting services for individual users and businesses",
        },
        {
          zh: "与客户确认推广需求，制定内容与投放策略，跟进执行与效果反馈",
          en: "Aligned with clients on promotion needs, planned content and distribution strategies, and followed up on execution and results",
        },
      ],
      tags: ["Content Operations", "Client Communication", "Promotion"],
    },
  ] as TimelineItem[],

  projects: [
    {
      name: "SequFlow",
      tagline: {
        zh: "结构化流程创作与管理工具",
        en: "Structured flow creation & management tool",
      },
      description: {
        zh: "面向结构化内容创作的流程管理工具，支持富文本编辑、流程步骤管理、云端同步与用户登录鉴权，并内置 AI 助手。",
        en: "A flow management tool for structured content creation, featuring rich-text editing, step-based flow management, cloud sync, authentication, and a built-in AI assistant.",
      },
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "TipTap", "Zustand", "Supabase", "Vercel"],
      url: "https://www.sequflow.com/",
      image: "/images/avatar-shy.png",
    },
    {
      name: "Bulby English",
      tagline: {
        zh: "AI 驱动的漫画风英语学习站",
        en: "AI-powered manga-style English learning site",
      },
      description: {
        zh: "基于 DeepSeek API 的 AI 英语对话学习网站，通过 Vercel Serverless Function 代理接口，漫画风格界面，支持对话练习与学习页面。",
        en: "An AI English conversation learning site powered by the DeepSeek API, proxied through a Vercel Serverless Function, with a manga-style interface, conversation practice, and learning pages.",
      },
      tech: ["HTML/CSS/JavaScript", "Vercel Serverless", "DeepSeek API", "GitHub"],
      url: "https://my-website-pi-seven-66.vercel.app/",
      image: "/images/bulby.png",
    },
  ] as ProjectItem[],

  skills: [
    {
      category: { zh: "运营与增长", en: "Operations & Growth" },
      items: ["小红书内容运营", "推广推流", "内容策划", "用户需求沟通"],
    },
    {
      category: { zh: "前端开发", en: "Front-end" },
      items: ["HTML / CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: { zh: "后端与工具", en: "Backend & Tools" },
      items: ["Node.js", "Supabase", "Vercel", "GitHub", "REST API 集成 (DeepSeek / 豆包)"],
    },
    {
      category: { zh: "设计与剪辑", en: "Design & Editing" },
      items: ["视觉设计", "Premiere Pro", "Animate", "手绘 / 像素画"],
    },
    {
      category: { zh: "语言与软实力", en: "Languages & Soft Skills" },
      items: ["中文（母语）", "英语（良好读写与沟通）", "团队协作", "需求确认", "结构化表达"],
    },
  ] as SkillGroup[],

  interests: {
    zh: "手绘与像素画、欧美流行音乐、声乐、游戏",
    en: "Hand-drawing & pixel art, Western pop music, singing, gaming",
  } as LocalizedText,

  contacts: {
    phone: "15875499799",
    wechat: "15875499799",
    email: "3161594975@qq.com",
    emailAlt: "swiftjust001122@gmail.com",
    github: "https://github.com/Solomon1022",
    website: "https://www.sequflow.com/",
  },
};

export type Resume = typeof resume;
