import { groupedSkills } from "@/hooks/SkillsHook";
import Section from "./Section";
import Image from "next/image";

const Skills = () => (
  <Section id="skills" title="My Skills">
    {/* Grid layout: 1 column on mobile, 2 on medium screens, max-width to keep it contained */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
      {groupedSkills.map((group, groupIndex) => (
        <div 
          key={groupIndex} 
          className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 transition-all duration-300 hover:bg-neutral-900/60 hover:border-neutral-700"
        >
          {/* Category Header */}
          <h3 className="text-neutral-100 font-semibold text-lg mb-4 border-b border-neutral-800 pb-3">
            {group.category}
          </h3>
          
          {/* Skill Pills */}
          <div className="flex flex-wrap gap-2.5">
            {group.skills.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="flex items-center gap-2 bg-neutral-800/40 border border-neutral-700/50 px-3.5 py-1.5 rounded-lg text-sm text-neutral-300 cursor-default hover:text-white hover:bg-neutral-800 transition-colors"
              >
                {/* Icon Rendering */}
                {skill.icon && (
                  <div className={`relative flex items-center justify-center w-5 h-5 ${skill.name === "Express.js" ? "bg-white rounded-full p-0.5" : ""}`}>
                    <Image 
                      src={skill.icon} 
                      alt={skill.name} 
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;