'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Code, Layout, Database, 
  ExternalLink, Layers, CheckCircle2, 
  Eye, Download, Users, Activity, Zap, TerminalSquare, ShieldCheck,
  Menu, X, Languages
} from 'lucide-react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function SupremePortfolio() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [downloading, setDownloading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    en: {
      badge: "AWARD-GRADE SYSTEMS ARCHITECT & TECH TRAINER",
      heroTitle: "ENGINEERING",
      heroHighlight: "SUPREME REALITY.",
      heroDesc: "Systems Engineer and Full-Stack Developer blending clean architecture with a passion for tech training. Empowering over 100+ students and professionals in shaping their technical path and professional digital presence.",
      exploreBtn: "Explore Live Systems",
      contactBtn: "Direct Channels",
      profileBadge: "01 // EXECUTIVE PROFILE & AVATAR",
      profileTitle: "Computer Systems Engineer & Tech Trainer",
      name: "Farah Mohammed Sadi Badr",
      role: "COMPUTER SYSTEMS ENGINEER & FULL-STACK TECH TRAINER",
      bio1: "Computer Systems Engineering graduate and Full-Stack Software Engineer specialized in architecting complex digital ecosystems using modern frameworks like Laravel, Vue.js, Next.js, and Supabase.",
      bio2: "Beyond software development, I serve as a technical trainer and mentor, crafting development and professional workshops (including LinkedIn executive branding) that have guided 100+ students and trainees. I believe clean code and community impact are the pillars of the modern engineer.",
      metricsBadge: "02 // IMPACT METRICS",
      metricsTitle: "Proven Metrics & Impact",
      projectsBadge: "03 // LIVE SYSTEMS & PORTFOLIO",
      projectsTitle: "Live Systems & Interactive Showcase",
      articlesBadge: "04 // ARTICLES & TECH INSIGHTS",
      articlesTitle: "Architectural Articles & Insights",
      articlesSubtitle: "Synthesized engineering lessons, architecture notes, and deep dives.",
      toolkitBadge: "05 // WORKFLOW & TOOLKIT",
      toolkitTitle: "Approved Ecosystem & Toolkit",
      toolkitSubtitle: "The foundational stack and tools I rely on to engineer sovereign software.",
      contactBadge: "06 // DIRECT CONNECTION",
      contactTitle: "Professional Direct Connection",
      contactDesc: "Available for engineering opportunities, technical advisory, and leadership training programs. Connect via official channels:",
      footer: "© 2026 Farah Bader. Supreme Systems Architecture & Developer Ecosystem.",
      downloadCV: "Download CV",
      downloading: "Downloading...",
      viewDetails: "Details",
      livePreview: "Live Preview",
      readArticle: "Read Article",
      close: "Close",
      challenge: "Engineering Challenge:",
      solution: "Architectural Solution:",
      impactResult: "Impact & Result:",
      navVision: "Vision",
      navAbout: "Profile",
      navMetrics: "Metrics",
      navProjects: "Projects",
      navArticles: "Articles",
      navToolkit: "Toolkit",
      navContact: "Contact",
      menuTitle: "ROYAL NAVIGATION"
    },
    ar: {
      badge: "AWARD-GRADE SYSTEMS ARCHITECT & TECH TRAINER",
      heroTitle: "هندسة",
      heroHighlight: "الواقع السيادي.",
      heroDesc: "مهندسة برمجيات ومدربة تقنية أهندس تطبيقات الويب المتقدمة، وأصنع الأثر في تمكين المطورين. هندسة نظم حاسوب ومتخصصة في تطوير الويب الشامل (Full-Stack). ساعدت أكثر من 100 طالب ومتدرب في شق طريقهم التقني.",
      exploreBtn: "استعراض المشاريع الحية",
      contactBtn: "قنوات التواصل",
      profileBadge: "01 // الملف الشخصي والصورة",
      profileTitle: "مهندسة نظم حاسوب ومدربة تقنية شاملة",
      name: "فرح محمد سادي بدر",
      role: "مهندسة نظم حاسوب ومدربة تقنية شاملة",
      bio1: "خريجة هندسة أنظمة الحاسوب، ومطورة برمجيات Full-Stack متخصصة في بناء وتصميم المنظومات الرقمية المعقدة باستخدام أحدث أطر العمل مثل Laravel، Vue.js، Next.js، وSupabase.",
      bio2: "إلى جانب هندسة البرمجيات، أعمل كمدربة وموجهة تقنية لمختلف الفئات والمستويات، أبتكر مناهج وورشات عمل تطويرية ومهنية (بما فيها الحضور الرقمي والمهني على لينكدإن)، وساهمت في تدريب وتوجيه أكثر من 100 طالب ومتدرب. أؤمن أن الأكواد النظيفة والأثر المجتمعي هما عماد مهندس المستقبل.",
      metricsBadge: "02 // الأثر والأرقام",
      metricsTitle: "أثر بالأرقام والنتائج المثبتة",
      projectsBadge: "03 // المشاريع الحية",
      projectsTitle: "المشاريع الحية والاستعراض التفاعلي",
      articlesBadge: "04 // المقالات الهندسية",
      articlesTitle: "المقالات والأفكار الهندسية",
      articlesSubtitle: "خلاصات خبرتي وتجاربي البرمجية المعمارية مطروحة بأسلوب متقدم.",
      toolkitBadge: "05 // أدوات العمل",
      toolkitTitle: "أدوات وبيئة العمل المعتمدة",
      toolkitSubtitle: "الترسانة التقنية التي أعتمد عليها لإنتاج برمجيات سيادية لا نظير لها.",
      contactBadge: "06 // التواصل المباشر",
      contactTitle: "التواصل المباشر والمهني",
      contactDesc: "متاحة للفرص الهندسية، الاستشارات التقنية، وبرامج التدريب. يمكنك التواصل معي عبر القنوات الرسمية التالية:",
      footer: "© 2026 فرح محمد بدر. Supreme Systems Architecture & Developer Ecosystem.",
      downloadCV: "تحميل السيرة الذاتية",
      downloading: "جاري التحميل...",
      viewDetails: "التفاصيل",
      livePreview: "المعاينة الحية",
      readArticle: "قراءة المقال",
      close: "إغلاق",
      challenge: "التحدي الهندسي:",
      solution: "الحل المعماري:",
      impactResult: "الأثر والنتيجة النهائية:",
      navVision: "الرؤية",
      navAbout: "الملف الشخصي",
      navMetrics: "الأثر",
      navProjects: "المشاريع",
      navArticles: "المقالات",
      navToolkit: "الأدوات",
      navContact: "التواصل",
      menuTitle: "قائمة التصفح الملكية"
    }
  };

  const currentT = t[lang];

  const handleDownloadCV = () => {
    setDownloading(true);
    setTimeout(() => {
      const element = document.createElement("a");
      element.href = "/farah-bader-cv.pdf"; // اسم ملف الـ PDF الخاص بكِ داخل مجلد public
      element.download = "Farah_Bader_CV.pdf"; // اسم الملف عندما يقوم الزائر بتحميله
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setDownloading(false);
    }, 1000);
  };

  const impactMetrics = [
    { label: lang === 'en' ? "Students & Trainees Mentored" : "طالب ومتدرب تم تدريبهم وتوجيههم", value: "+100", icon: Users },
    { label: lang === 'en' ? "Integrated Web Systems" : "منظومة وتطبيق ويب متكامل", value: "+5", icon: Layers },
    { label: lang === 'en' ? "Performance & UI Score" : "معدل سرعة الأداء وكفاءة النظام", value: "99.8%", icon: Zap },
    { label: lang === 'en' ? "Years of Passion" : "سنوات الشغف الهندسي", value: "5+", icon: Activity }
  ];

  const realProjects = [
    {
      id: 1,
      title: "BinX Tech Club Platform",
      category: "fullstack",
      tag: "VUE.JS / LARAVEL / COMMUNITY ECOSYSTEM",
      desc: lang === 'en' ? "Interactive community and social ecosystem designed for BinX Tech members to foster collaboration, featuring social-like networking capabilities." : "منصة رقمية مجتمعية تفاعلية ومتطورة مصممة خصيصاً لأعضاء نادي BinX Tech لتعزيز التفاعل والتعاون، مع قدرات شبكية شبيهة بمنصات التواصل الاجتماعي.",
      challenge: lang === 'en' ? "Building an interactive community supporting live posting, likes, comments, instant notifications, and precise project progress tracking." : "بناء مجتمع تفاعلي متكامل يدعم النشر والتفاعل الحي (إعجاب وتعليقات) مع نظام إشعارات فورية وتتبع دقيق لتقدم المشاريع بين الأقسام.",
      solution: lang === 'en' ? "Employed Laravel for robust backend roles and member data management, paired with a high-speed Vue.js frontend." : "توظيف Laravel لبناء هيكل خلفي قوي ومنظم يدير صلاحيات وبيانات الأعضاء، مع واجهة تفاعلية وسريعة باستخدام Vue.js لضمان تجربة مستخدم سلسة.",
      impact: lang === 'en' ? "Elevated collaboration and communication among club members, streamlining technical project showcases." : "رفع مستوى التعاون والتواصل بين أعضاء النادي، وتسهيل استعراض الأفكار والمشاريع التقنية بمرونة وكفاءة عالية.",
      tech: ["Laravel", "Vue.js", "Community Hub"],
      link: "#",
      img: "/binx-project.jpg"
    },
    {
      id: 2,
      title: "Al-Badr Real Estate Platform",
      category: "next",
      tag: "VUE.JS / VITE / SUPABASE / PWA",
      desc: lang === 'en' ? "High-performance real estate platform built as a Progressive Web App (PWA) for seamless browsing and robust administrative management." : "منصة عقارية عالية الأداء بتصميم متجاوب تعمل كـ Progressive Web App (PWA)، مصممة لتوفير تجربة تصفح سلسة وإدارة إدارية قوية.",
      challenge: lang === 'en' ? "Transforming the web platform into an independent standalone app icon on mobile devices while securing data and managing session guards." : "تحويل منصة الويب إلى تطبيق يعمل كأيقونة مستقلة على الهواتف مع ضمان أمان البيانات، إدارة الجلسات، والتخزين المؤقت بكفاءة.",
      solution: lang === 'en' ? "Integrated Supabase and PostgreSQL for database and instant auth with admin guards, utilizing vite-plugin-pwa for offline service workers." : "دمج Supabase وPostgreSQL لإدارة البيانات والمصادقة الفورية مع حماية الإدارة، وتوظيف vite-plugin-pwa لتفعيل وضع standalone.",
      impact: lang === 'en' ? "Delivered a native-like user experience with extreme speed and instant data synchronization." : "تقديم تجربة مستخدم شبيهة بالتطبيقات الأصلية (Native) مع سرعة تصفح فائقة ومزامنة فورية للبيانات.",
      tech: ["Vue.js", "Supabase", "PWA", "Tailwind CSS"],
      link: "https://binx-tech.onrender.com/",
      img: "/albadr-realestate.jpg"
    },
    {
      id: 3,
      title: "TechWork Hub (Workshop Engine)",
      category: "fullstack",
      tag: "VUE.JS / LARAVEL / PDF ENGINE",
      desc: lang === 'en' ? "Specialized platform for managing technical workshops, interactive code snippets, and custom PDF document generation." : "منصة متخصصة لإدارة الورش التقنية، تنظيم الجلسات، واكواد تفاعلية، مع محرك مخصص لتوليد وتحميل محتوى الورش كملفات PDF احترافية.",
      challenge: lang === 'en' ? "Automating certificate issuance and training material export into PDF format with high layout fidelity." : "أتمتة عملية إصدار الشهادات والمحتوى التدريبي وتصديرها بصيغة PDF بدقة تنسيق عالية.",
      solution: lang === 'en' ? "Built robust backend paths in Laravel for document generation coupled with Vue.js frontend." : "بناء مسارات خلفية متكاملة في Laravel لإدارة المحتوى وتوليد المستندات مع واجهة تفاعلية بـ Vue.js.",
      impact: lang === 'en' ? "Streamlined course management and relieved administrative overhead." : "تسهيل عملية إدارة الدورات وتخفيف العبء الإداري في تنظيم الورش التقنية.",
      tech: ["Vue.js", "Laravel", "PDF Generator"],
      link: "https://workshop-engine.onrender.com/",
      img: "/workshop-engine.jpg"
    },
    {
      id: 4,
      title: "Vision Board & Analytics Dashboard",
      category: "fullstack",
      tag: "VUE.JS / LARAVEL / DATA VISUALIZATION",
      desc: lang === 'en' ? "Advanced administrative dashboard featuring real-time progress tracking, secure archiving, and comprehensive file management." : "لوحة تحكم إدارية متقدمة تتميز بتتبع التقدم في الوقت الفعلي وتصحيح البيانات، مع نظام أرشفة آمن وإدارة شاملة للملفات.",
      challenge: lang === 'en' ? "Processing and displaying large volumes of live data and complex variables without UI lag." : "معالجة وعرض كميات كبيرة من البيانات الحية والمتغيرات المعقدة بدون التأثير على أداء الواجهة.",
      solution: lang === 'en' ? "Strong binding between Laravel backend handling core logic and Vue.js for live data updates." : "ربط قوي بين Laravel كخلفية برمجية تدير العمليات وVue.js لعرض البيانات وتحديثها فورياً.",
      impact: lang === 'en' ? "Provided a smooth and stable centralized control system for data management and reporting." : "توفير نظام تحكم مركزي سلس ومستقر لإدارة البيانات والتقارير بدقة عالية.",
      tech: ["Vue.js", "Laravel", "Analytics Dashboard"],
      link: "https://vision-board-2026.onrender.com/",
      img: "/vision-board.jpg"
    },
    {
      id: 5,
      title: "AURA Journal (Mindfulness App)",
      category: "vue",
      tag: "VUE.JS 3 / INTERACTIVE UI / GAMIFICATION",
      desc: lang === 'en' ? "Interactive mood and emotion tracking web app with searchable archive and playful gamification elements." : "تطبيق ويب تفاعلي لتسجيل اليوميات والمتابعة الشخصية، مصمم بتركيز عالي على تجربة المستخدم والهدوء البصري.",
      challenge: lang === 'en' ? "Designing a soothing, comfortable user experience that motivates daily tracking." : "تصميم تجربة مستخدم مريحة وهادئة تحفز على الاستخدام اليومي ببيئة تفاعلية خالية من التعقيد.",
      solution: lang === 'en' ? "Relied on Vue.js 3 with clean architectural design and flexible data flow." : "الاعتماد على Vue.js 3 وتصميم هيكلي نظيف مع تخزين محلي وتدفق بيانات مرن.",
      impact: lang === 'en' ? "Delivered a lightweight, fast personal tool helping users organize daily thoughts." : "تقديم أداة شخصية خفيفة وسريعة لمساعدة المستخدمين على تنظيم أفكارهم ويومياتهم.",
      tech: ["Vue.js 3", "Interactive UI", "Tailwind CSS"],
      link: "https://farah-bader22.github.io/AURA-Journal/",
      img: "/aura-journal.jpg"
    }
  ];

  const articles = [
    {
      id: 1,
      title: lang === 'en' ? "Youth & Developer Mentorship: Cultivating the Engineer's Mindset" : "رحلتي في تدريب اليافعين والمطورين: كيف نزرع عقلية المهندس لا المبرمج فقط؟",
      snippet: lang === 'en' ? "Lessons learned from training over 100 students and trainees, and turning coding ideas into live interactive web platforms." : "دروس مستفادة من تدريب وتخريج أكثر من 100 طالب ومتدرب، وتحويل الأفكار البرمجية إلى منصات تعليمية تفاعلية حية على الإنترنت.",
      tag: "Mentorship & Education",
      glowColor: "from-amber-500/20 to-orange-500/20",
      link: "https://lnkd.in/p/dbBf-DGc" // 👈 رابط المقال الأول
    },
    {
      id: 2,
      title: lang === 'en' ? "Problem Solving Before Code: Engineering ARCHPRO" : "البرمجة هي Problem Solving قبل الكود: رحلتي في هندسة مشروع ARCHPRO",
      snippet: lang === 'en' ? "How Next.js was leveraged for instant UI response, paired with a strong Laravel backend and SMTP integration for client requests." : "كيف تم توظيف Next.js لتحقيق استجابة فورية للواجهة، وبناء Backend قوي بـ Laravel مع ربط نظام SMTP للتعامل الفوري مع طلبات العملاء.",
      tag: "Next.js & Laravel",
      glowColor: "from-purple-500/20 to-pink-500/20",
      link: "https://lnkd.in/p/dKjGAxVw" // 👈 رابط المقال الثاني
    },
    {
      id: 3,
      title: lang === 'en' ? "From Local Code to Real Product: PWA Apps with Supabase" : "الانتقال من كود محلي لمنتج برمجياً حقيقياً: هندسة تطبيقات PWA باستخدام Supabase",
      snippet: lang === 'en' ? "Strategies to reduce code complexity, integrate Supabase for database & auth, and transform web apps into standalone mobile icons." : "استراتيجيات تقليل التعقيد البرمجي، دمج Supabase لإدارة قواعد البيانات والصلاحيات، وتحويل منصات الويب لتطبيقات تعمل كأيقونة مستقلة على الهواتف.",
      tag: "Supabase & PWA",
      glowColor: "from-emerald-500/20 to-teal-500/20",
      link: "https://lnkd.in/p/dJtYjbgb" // 👈 رابط المقال الثالث
    }
  ];4
  const toolkit = [
    { name: "Laravel & PHP", desc: lang === 'en' ? "Building backend systems and RESTful APIs securely and efficiently." : "بناء الأنظمة الخلفية وRESTful APIs بأمان وكفاءة.", icon: Code },
    { name: "Next.js & Vue.js", desc: lang === 'en' ? "Building high-performance modern user interfaces." : "بناء واجهات مستخدم متطورة وسريعة الأداء.", icon: Layout },
    { name: "Supabase & PostgreSQL", desc: lang === 'en' ? "Database management and real-time synchronization." : "إدارة قواعد البيانات والمزامنة الفورية.", icon: Database },
    { name: "Tailwind CSS", desc: lang === 'en' ? "Styling and formatting interfaces with absolute precision." : "تصميم وتنسيق الواجهات بدقة واحترافية.", icon: ShieldCheck },
    { name: "Docker & Git", desc: lang === 'en' ? "Container management and code version control." : "إدارة الحاويات وتنسيق وإصدار الأكواد.", icon: TerminalSquare },
    { name: "VS Code / Cursor", desc: lang === 'en' ? "Primary development environment for executing code efficiently." : "بيئة التطوير الأساسية لتنفيذ الأكواد بكفاءة.", icon: TerminalSquare }
  ];

  const filteredProjects = activeTab === 'all' 
    ? realProjects 
    : realProjects.filter(p => p.category === activeTab);

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="bg-[#020005] text-zinc-100 min-h-screen selection:bg-amber-500/40 selection:text-amber-100 font-sans relative overflow-x-hidden">
      
 {/* Animated Luxury Neon Glows - Mobile Performance Optimized */}
 <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Glow 1 */}
        <div className="absolute -top-40 -right-40 w-[350px] sm:w-[750px] h-[350px] sm:h-[750px] bg-amber-500/10 sm:bg-gradient-to-br sm:from-amber-500/20 sm:via-orange-600/10 sm:to-transparent rounded-full blur-[80px] sm:blur-[140px] transform-gpu" />

        {/* Glow 2 */}
        <div className="absolute top-1/2 -left-40 w-[350px] sm:w-[750px] h-[350px] sm:h-[750px] bg-purple-600/10 sm:bg-gradient-to-tr sm:from-purple-600/20 sm:via-pink-600/10 sm:to-transparent rounded-full blur-[80px] sm:blur-[140px] transform-gpu" />

        {/* Glow 3 */}
        <div className="absolute bottom-10 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-emerald-500/10 sm:bg-gradient-to-r sm:from-emerald-500/10 sm:to-teal-500/10 rounded-full blur-[80px] sm:blur-[140px] transform-gpu" />
      </div>

      {/* Header / Navbar */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#020005]/85 border-b border-amber-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-bold text-sm tracking-tight flex items-center gap-3 group">
            <motion.span 
              animate={{ scale: [1, 1.4, 1], boxShadow: ["0 0 10px #fbbf24", "0 0 25px #fbbf24", "0 0 10px #fbbf24"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-amber-400 to-pink-500"
            />
            <span className="tracking-[0.2em] uppercase text-xs font-mono font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-amber-400 group-hover:text-amber-300 transition-colors">
              FARAH BADER
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-widest uppercase text-zinc-400">
            <a href="#vision" className="hover:text-amber-300 transition-all hover:scale-110 transform duration-200">{currentT.navVision}</a>
            <a href="#about" className="hover:text-amber-300 transition-all hover:scale-110 transform duration-200">{currentT.navAbout}</a>
            <a href="#metrics" className="hover:text-amber-300 transition-all hover:scale-110 transform duration-200">{currentT.navMetrics}</a>
            <a href="#projects" className="hover:text-amber-300 transition-all hover:scale-110 transform duration-200">{currentT.navProjects}</a>
            <a href="#articles" className="hover:text-amber-300 transition-all hover:scale-110 transform duration-200">{currentT.navArticles}</a>
            <a href="#toolkit" className="hover:text-amber-300 transition-all hover:scale-110 transform duration-200">{currentT.navToolkit}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Switcher Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="px-3 py-2 rounded-xl bg-zinc-900 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-md cursor-pointer hover:bg-amber-500/10 transition-all"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              disabled={downloading}
              className="hidden sm:flex px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-purple-600/20 to-pink-500/20 border border-amber-500/40 hover:border-amber-400 text-amber-200 font-semibold text-xs tracking-wider transition-all items-center gap-2 cursor-pointer shadow-lg"
            >
              {downloading ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 animate-spin" /> : <Download className="w-3.5 h-3.5 text-amber-400" />}
              <span>{downloading ? currentT.downloading : currentT.downloadCV}</span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.1, borderColor: "rgba(251, 191, 36, 0.8)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-xl bg-zinc-900/90 border border-amber-500/40 text-amber-300 hover:text-white cursor-pointer shadow-[0_0_15px_rgba(251,191,36,0.3)] backdrop-blur-md"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Awwwards Style Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl md:hidden flex justify-end"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.div 
              initial={{ x: lang === 'ar' ? '-100%' : '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: lang === 'ar' ? '-100%' : '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className={`w-5/6 max-w-sm bg-[#04020a] border-${lang === 'ar' ? 'l' : 'r'} border-amber-500/40 h-full p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-amber-500/20">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
                    <span className="font-mono text-xs tracking-widest text-amber-300 font-bold uppercase">{currentT.menuTitle}</span>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-zinc-900/90 border border-amber-500/30 text-amber-300 hover:text-white cursor-pointer shadow-md"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                <nav className="flex flex-col gap-5 text-sm font-semibold tracking-wider text-zinc-300">
                  <motion.a whileHover={{ x: lang === 'ar' ? -6 : 6, color: "#fbbf24" }} href="#vision" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between py-2 border-b border-zinc-900">
                    <span>{currentT.navVision}</span>
                    <span className="text-xs font-mono text-amber-400">01</span>
                  </motion.a>
                  <motion.a whileHover={{ x: lang === 'ar' ? -6 : 6, color: "#fbbf24" }} href="#about" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between py-2 border-b border-zinc-900">
                    <span>{currentT.navAbout}</span>
                    <span className="text-xs font-mono text-amber-400">02</span>
                  </motion.a>
                  <motion.a whileHover={{ x: lang === 'ar' ? -6 : 6, color: "#fbbf24" }} href="#metrics" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between py-2 border-b border-zinc-900">
                    <span>{currentT.navMetrics}</span>
                    <span className="text-xs font-mono text-amber-400">03</span>
                  </motion.a>
                  <motion.a whileHover={{ x: lang === 'ar' ? -6 : 6, color: "#fbbf24" }} href="#projects" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between py-2 border-b border-zinc-900">
                    <span>{currentT.navProjects}</span>
                    <span className="text-xs font-mono text-amber-400">04</span>
                  </motion.a>
                  <motion.a whileHover={{ x: lang === 'ar' ? -6 : 6, color: "#fbbf24" }} href="#articles" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between py-2 border-b border-zinc-900">
                    <span>{currentT.navArticles}</span>
                    <span className="text-xs font-mono text-amber-400">05</span>
                  </motion.a>
                  <motion.a whileHover={{ x: lang === 'ar' ? -6 : 6, color: "#fbbf24" }} href="#toolkit" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between py-2 border-b border-zinc-900">
                    <span>{currentT.navToolkit}</span>
                    <span className="text-xs font-mono text-amber-400">06</span>
                  </motion.a>
                  <motion.a whileHover={{ x: lang === 'ar' ? -6 : 6, color: "#fbbf24" }} href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between py-2">
                    <span>{currentT.navContact}</span>
                    <span className="text-xs font-mono text-amber-400">07</span>
                  </motion.a>
                </nav>
              </div>

              <div className="pt-6 border-t border-amber-500/20 space-y-4">
                <motion.button 
                  whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(251, 191, 36, 0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { handleDownloadCV(); setMobileMenuOpen(false); }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{currentT.downloadCV}</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="vision" className="min-h-screen pt-36 pb-20 flex items-center justify-center px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-950/40 border border-amber-500/50 text-amber-300 text-xs font-mono tracking-wider mb-6 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
          >
            <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
            <span>{currentT.badge}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
          >
            {currentT.heroTitle} <br />
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-pink-500 bg-[length:200%_auto] drop-shadow-[0_0_35px_rgba(251,191,36,0.5)]"
            >
              {currentT.heroHighlight}
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            {currentT.heroDesc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.07, boxShadow: "0 0 35px rgba(251, 191, 36, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold text-xs tracking-wider uppercase transition-all shadow-2xl cursor-pointer"
            >
              {currentT.exploreBtn}
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.07, backgroundColor: "rgba(39, 39, 42, 0.9)", borderColor: "rgba(251, 191, 36, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 rounded-2xl border border-zinc-700 bg-zinc-900/60 font-medium text-xs tracking-wider uppercase transition-all text-zinc-200 cursor-pointer shadow-lg"
            >
              {currentT.contactBtn}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Profile & Avatar Showcase */}
      <section id="about" className="py-24 px-6 border-t border-amber-500/20 bg-gradient-to-b from-zinc-950/50 to-[#030107] relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest bg-amber-950/40 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              {currentT.profileBadge}
            </span>
            <h2 className="text-3xl font-bold tracking-tight">{currentT.profileTitle}</h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-zinc-900/50 border border-amber-500/30 p-8 sm:p-12 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-amber-400 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700 animate-pulse"></div>
                <motion.div 
                  whileHover={{ scale: 1.04, rotate: 1 }}
                  className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-amber-400/60 bg-zinc-950 shadow-2xl"
                >
                  <img 
  src="/farah-avatar.jpeg"
                    alt="فرح محمد بدر - Farah Bader" 
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-mono text-amber-300 font-bold bg-black/70 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-amber-500/40 shadow-lg">
                      ✨ Farah Bader / فرح بدر
                    </span>
                  </div>
                </motion.div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-mono text-zinc-300 bg-zinc-950 px-4 py-2 rounded-xl border border-amber-500/30 shadow-inner">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>{lang === 'en' ? '🟢 Available for Major Opportunities' : '🟢 متاحة للفرص والمشاريع الكبرى'}</span>
              </div>
            </div>

            <div className={`md:col-span-7 space-y-6 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-200 drop-shadow-md">{currentT.name}</h3>
              <p className="text-xs font-mono text-pink-400 tracking-wider">
                {currentT.role}
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {currentT.bio1}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                {currentT.bio2}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 rounded-xl bg-amber-950/50 border border-amber-500/40 text-[11px] font-mono text-amber-300 shadow-md">Clean Architecture</span>
                <span className="px-3.5 py-1.5 rounded-xl bg-purple-950/50 border border-purple-500/40 text-[11px] font-mono text-purple-300 shadow-md">Tech Trainer & Mentor</span>
                <span className="px-3.5 py-1.5 rounded-xl bg-pink-950/50 border border-pink-500/40 text-[11px] font-mono text-pink-300 shadow-md">Full-Stack Lead</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section id="metrics" className="py-20 px-6 border-t border-amber-500/20 bg-zinc-950/60 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest bg-amber-950/40 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              {currentT.metricsBadge}
            </span>
            <h2 className="text-3xl font-bold tracking-tight">{currentT.metricsTitle}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -10, scale: 1.03, borderColor: "rgba(251, 191, 36, 0.8)", boxShadow: "0 0 30px rgba(251, 191, 36, 0.2)" }}
                  className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 transition-all text-center group shadow-xl backdrop-blur-md cursor-pointer relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-950/60 text-amber-300 flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300 shadow-lg border border-amber-500/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400">
                    {metric.value}
                  </div>
                  <div className="text-xs text-zinc-400 font-light leading-relaxed">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects & Live Systems Section */}
      <section id="projects" className="py-24 px-6 border-t border-amber-500/20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest bg-amber-950/40 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                {currentT.projectsBadge}
              </span>
              <h2 className="text-3xl font-bold tracking-tight">{currentT.projectsTitle}</h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-2 mt-6 md:mt-0 p-1.5 bg-zinc-900/90 border border-amber-500/30 rounded-2xl shadow-xl"
            >
              {['all', 'fullstack', 'next'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-xl text-xs font-semibold uppercase transition-all cursor-pointer ${
                    activeTab === tab ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold shadow-lg shadow-amber-500/30' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -12, scale: 1.02, borderColor: "rgba(251, 191, 36, 0.7)", boxShadow: "0 0 35px rgba(251, 191, 36, 0.2)" }}
                className={`group rounded-3xl bg-zinc-900/80 border border-zinc-800 overflow-hidden shadow-2xl transition-all flex flex-col justify-between backdrop-blur-md cursor-pointer ${lang === 'ar' ? 'text-right' : 'text-left'}`}
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-zinc-950">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                    <div className={`absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'} bg-black/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-amber-500/40 text-[10px] font-mono text-amber-300 shadow-md`}>
                      {project.category}
                    </div>
                  </div>
                  <div className="p-7">
                    <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest block mb-2">{project.tag}</span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-amber-200 transition-colors">{project.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light line-clamp-2">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-800/90 text-[10px] font-mono text-amber-200/90 border border-amber-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-0 flex items-center justify-between border-t border-zinc-800/80 pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-zinc-200 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer bg-zinc-800/80 px-3.5 py-2 rounded-xl border border-zinc-700 shadow-sm"
                  >
                    <Eye className="w-4 h-4 text-amber-300" />
                    <span>{currentT.viewDetails}</span>
                  </motion.button>
                  <motion.a 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-xs font-semibold text-black gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 border border-amber-400 px-4 py-2 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-md font-bold"
                  >
                    <span>{currentT.livePreview}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 {/* Articles & Insights Section */}
 <section id="articles" className="py-24 px-6 border-t border-amber-500/20 bg-gradient-to-b from-zinc-950/50 to-[#030107] relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest bg-amber-950/40 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              {currentT.articlesBadge}
            </span>
            <h2 className="text-3xl font-bold tracking-tight">{currentT.articlesTitle}</h2>
            <p className="text-zinc-400 text-xs mt-2 font-light">{currentT.articlesSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <motion.a
                key={art.id}
                href={art.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -10, scale: 1.02, borderColor: "rgba(251, 191, 36, 0.8)", boxShadow: "0 0 35px rgba(251, 191, 36, 0.2)" }}
                className={`relative p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 transition-all flex flex-col justify-between shadow-2xl group backdrop-blur-md cursor-pointer overflow-hidden ${lang === 'ar' ? 'text-right' : 'text-left'}`}
              >
                <div className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-32 h-32 bg-gradient-to-bl ${art.glowColor} rounded-bl-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}></div>

                <div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-500/30 shadow-sm">
                      {art.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-amber-200 transition-colors leading-snug relative z-10">
                    {art.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6 relative z-10">
                    {art.snippet}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-end text-xs font-mono text-zinc-400 relative z-10">
                  <span className="text-amber-300 font-bold group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                    <span>{currentT.readArticle}</span>
                    <span>{lang === 'ar' ? '←' : '→'}</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit & Ecosystem */}
      <section id="toolkit" className="py-24 px-6 border-t border-amber-500/20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest bg-amber-950/40 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              {currentT.toolkitBadge}
            </span>
            <h2 className="text-3xl font-bold tracking-tight">{currentT.toolkitTitle}</h2>
            <p className="text-zinc-400 text-xs mt-2 font-light">{currentT.toolkitSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {toolkit.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03, borderColor: "rgba(251, 191, 36, 0.7)", boxShadow: "0 0 30px rgba(251, 191, 36, 0.2)" }}
                  className={`p-7 rounded-3xl bg-zinc-900/60 border border-zinc-800 transition-all group backdrop-blur-md cursor-default relative overflow-hidden ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-950/50 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300 shadow-md border border-amber-500/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base mb-2 group-hover:text-amber-200 transition-colors">{tool.name}</h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{tool.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-amber-500/20 bg-zinc-950/60 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest bg-amber-950/40 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              {currentT.contactBadge}
            </span>
            <h2 className="text-3xl font-bold tracking-tight mb-4">{currentT.contactTitle}</h2>
            <p className="text-zinc-400 text-xs sm:text-sm mb-12 font-light max-w-lg mx-auto">
              {currentT.contactDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto">
            <motion.a 
              whileHover={{ scale: 1.07, borderColor: "rgba(251, 191, 36, 0.9)", boxShadow: "0 0 25px rgba(251, 191, 36, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/972597132739" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center gap-3 transition-all group shadow-2xl cursor-pointer"
            >
              <FaWhatsapp className="w-8 h-8 text-emerald-400 group-hover:scale-125 transition-transform" />
              <span className="text-xs font-bold tracking-wide">WhatsApp Chat</span>
              <span className="text-[10px] text-zinc-500 font-mono">{lang === 'en' ? 'Instant Chat' : 'مراسلة فورية'}</span>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.07, borderColor: "rgba(251, 191, 36, 0.9)", boxShadow: "0 0 25px rgba(251, 191, 36, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/farah-bader22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center gap-3 transition-all group shadow-2xl cursor-pointer"
            >
              <FaGithub className="w-8 h-8 text-amber-300 group-hover:scale-125 transition-transform" />
              <span className="text-xs font-bold tracking-wide">GitHub Repos</span>
              <span className="text-[10px] text-zinc-500 font-mono">{lang === 'en' ? 'Repositories' : 'المستودعات البرمجية'}</span>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.07, borderColor: "rgba(251, 191, 36, 0.9)", boxShadow: "0 0 25px rgba(251, 191, 36, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/farah-bader-528994379" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center gap-3 transition-all group shadow-2xl cursor-pointer"
            >
              <FaLinkedin className="w-8 h-8 text-amber-300 group-hover:scale-125 transition-transform" />
              <span className="text-xs font-bold tracking-wide">LinkedIn Profile</span>
              <span className="text-[10px] text-zinc-500 font-mono">{lang === 'en' ? 'Professional' : 'حسابه المهني'}</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className={`bg-zinc-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative shadow-[0_0_50px_rgba(251,191,36,0.3)] overflow-y-auto max-h-[90vh] ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className={`absolute top-6 ${lang === 'ar' ? 'left-6' : 'right-6'} w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold hover:bg-zinc-700 transition-colors cursor-pointer`}
              >
                ✕
              </button>
              <div className="h-52 w-full rounded-2xl overflow-hidden mb-6 bg-zinc-950">
                <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest block mb-2">{selectedProject.tag}</span>
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">{selectedProject.desc}</p>

              <div className="space-y-4 mb-6 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                  <strong className="text-amber-300 block mb-1">{currentT.challenge}</strong>
                  <p className="text-zinc-400 font-light leading-relaxed">{selectedProject.challenge}</p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                  <strong className="text-amber-300 block mb-1">{currentT.solution}</strong>
                  <p className="text-zinc-400 font-light leading-relaxed">{selectedProject.solution}</p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                  <strong className="text-amber-300 block mb-1">{currentT.impactResult}</strong>
                  <p className="text-zinc-400 font-light leading-relaxed">{selectedProject.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t: string, i: number) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-zinc-800 text-[11px] font-medium text-amber-200 border border-amber-500/20">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  <span>{currentT.livePreview}</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  {currentT.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-amber-500/20 text-center text-xs text-zinc-500 font-mono relative z-10">
        <p>{currentT.footer}</p>
      </footer>

    </div>
  );
}