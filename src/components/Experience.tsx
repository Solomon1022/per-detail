import SectionTitle from "./SectionTitle";
import Timeline from "./Timeline";
import { resume } from "@/content/resume";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-5 py-14">
      <SectionTitle index="03" zh="实习经历" en="Experience" />
      <Timeline items={resume.experience} />
    </section>
  );
}
