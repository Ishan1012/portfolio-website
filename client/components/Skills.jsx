import { skills } from "@/hooks/SkillsHook";
import Section from "./Section";

const Skills = () => (
  <Section id="skills" title="My Skills">
    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
      {skills.map((skill, index) => (
        <div key={index} className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded text-sm">
          {skill}
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;