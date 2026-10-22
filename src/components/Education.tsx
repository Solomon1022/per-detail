import SectionTitle from "./SectionTitle";
import Timeline from "./Timeline";
import { resume } from "@/content/resume";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-5 py-14">
      <SectionTitle index="02" zh="教育背景" en="Education" />
      <Timeline items={resume.education} />
    </section>
  );
}
