import { skills } from "@/hooks/SkillsHook";
import Section from "./Section";
import Image from "next/image";

const Skills = () => (
  <Section id="skills" title="My Skills">
    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
      {skills.map((skill, index) => (
        <div key={index} className="bg-neutral-900 cursor-default flex gap-x-2 justify-center items-center border border-neutral-800 px-4 py-2 rounded text-sm">
          <Image src={skill.icon} width={20} height={20} alt={skill.name} className="transition duration-200" />
          {skill.name}
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;