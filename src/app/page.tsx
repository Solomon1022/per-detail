import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 固定网格背景纹理 */}
      <div
        aria-hidden
        className="bg-grid fixed inset-0 -z-10 opacity-50 dark:invert dark:opacity-[0.12]"
      />

      {/* 固定几何装饰底纹：仅大屏（xl+）页面左右留白区，背景层，不遮挡任何内容 */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 hidden xl:block"
      >
        {/* 虚线圆形（左侧上部） */}
        <div className="absolute left-8 top-[20vh] h-10 w-10 rounded-full border border-dashed border-[var(--line)] opacity-40" />
        {/* 实线正方形（右侧中上，轻微旋转） */}
        <div className="absolute right-10 top-[32vh] h-8 w-8 rotate-6 border border-[var(--line)] opacity-40" />
        {/* 实心小圆（左侧中部） */}
        <div className="absolute left-14 top-[50vh] h-2 w-2 rounded-full bg-[var(--line)] opacity-40" />
        {/* 实线矩形（右侧中部） */}
        <div className="absolute right-14 top-[58vh] h-8 w-12 border border-[var(--line)] opacity-40" />
        {/* 虚线正方形（左侧下部，轻微旋转） */}
        <div className="absolute left-10 top-[70vh] h-7 w-7 rotate-12 border border-dashed border-[var(--line)] opacity-40" />
        {/* 实心小圆（右侧下部） */}
        <div className="absolute right-20 top-[84vh] h-2 w-2 rounded-full bg-[var(--line)] opacity-40" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
