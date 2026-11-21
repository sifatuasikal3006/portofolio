import React, { useState } from 'react';
import { Code2, Lightbulb, PenTool, Search, Send } from 'lucide-react';
import {
  EDUCATION_LIST,
  PROCESS_STEPS,
  PROFILE,
  SKILLS_AND_TOOLS,
} from '../data/portfolioData';
import { SparkleIcon } from './SparkleIcon';

interface CredentialsProcessSectionProps {
  activeSkillFilter: string | null;
  onToggleSkill: (skill: string) => void;
  onOpenCommission: () => void;
}

const STEP_ICONS = {
  search: Search,
  lightbulb: Lightbulb,
  pen: PenTool,
  code: Code2,
  send: Send,
};

export const CredentialsProcessSection: React.FC<CredentialsProcessSectionProps> = ({
  activeSkillFilter,
  onToggleSkill,
  onOpenCommission,
}) => {
  const [selectedStep, setSelectedStep] = useState<string>('03');

  return (
    <section id="about-grid" className="w-full bg-[#000000] py-16">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          {/* Column 1: Education & Skills */}
          <div className="lg:col-span-4 pr-0 lg:pr-8 pb-12 lg:pb-0 space-y-8">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#D92323] inline-block shrink-0" />
              <h3 className="font-bold text-sm uppercase tracking-[0.14em] text-white">
                EDUCATION &amp; SKILLS
              </h3>
            </div>

            {/* Education Sub-section */}
            <div className="space-y-4">
              <span className="text-[#D92323] font-bold text-xs uppercase tracking-[0.2em] block">
                EDUCATION
              </span>

              {EDUCATION_LIST.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`flex justify-between items-start gap-4 ${
                    index > 0 ? 'pt-3 border-t border-neutral-900' : 'pt-1'
                  }`}
                >
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white leading-snug">{edu.degree}</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">{edu.institution}</p>
                  </div>
                  <span
                    className={`font-anton text-xs tracking-wider whitespace-nowrap shrink-0 tabular-nums pt-0.5 ${
                      edu.active ? 'text-[#D92323]' : 'text-neutral-500'
                    }`}
                  >
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>

            {/* Interactive Skills & Tools */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[#D92323] font-bold text-xs uppercase tracking-[0.2em]">
                  SKILLS &amp; TOOLS
                </span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  Click to filter works
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {SKILLS_AND_TOOLS.map((skill) => {
                  const isActive = activeSkillFilter === skill;
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => onToggleSkill(skill)}
                      aria-pressed={isActive}
                      className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] rounded-sm border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#D92323]/20 border-[#D92323] text-white'
                          : 'bg-[#121212] border-neutral-800 text-neutral-300 hover:border-[#D92323] hover:text-white'
                      }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Work Process */}
          <div id="work-process" className="lg:col-span-5 px-0 lg:px-8 py-12 lg:py-0 space-y-8">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#D92323] inline-block shrink-0" />
              <h3 className="font-bold text-sm uppercase tracking-[0.14em] text-white">
                WORK PROCESS
              </h3>
            </div>

            <div className="relative space-y-5 pl-1">
              {/* Vertical Connecting Track */}
              <div
                aria-hidden="true"
                className="absolute left-[47px] top-5 bottom-5 w-[1px] bg-[#D92323]/25 pointer-events-none"
              />

              {PROCESS_STEPS.map((step) => {
                const IconComponent = STEP_ICONS[step.iconKey];
                const isSelected = selectedStep === step.number;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setSelectedStep(step.number)}
                    className="relative flex items-start gap-4 w-full text-left group cursor-pointer focus-visible:outline-none"
                  >
                    <span className="font-anton text-[#D92323] text-sm pt-2 w-6 text-right shrink-0 whitespace-nowrap tabular-nums">
                      {step.number}
                    </span>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10 border transition-colors duration-200 ${
                        isSelected
                          ? 'bg-[#D92323] border-[#D92323] text-white'
                          : 'bg-[#161616] border-[#D92323]/50 text-neutral-300 group-hover:border-[#D92323] group-hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>

                    <div className="pt-0.5 min-w-0">
                      <h4 className="text-xs font-bold text-[#D92323] uppercase tracking-wider">
                        {step.title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {step.description}
                      </p>
                      {isSelected && (
                        <p className="text-[11px] text-neutral-300 mt-1.5 pt-1.5 border-t border-neutral-800/80 leading-relaxed">
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 3: Crimson Quote & Manifesto Card */}
          <div className="lg:col-span-3 pl-0 lg:pl-8 pt-12 lg:pt-0 flex flex-col justify-between">
            <div className="crimson-gradient-card border border-[#D92323]/35 rounded-sm p-7 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
              <div>
                <div className="text-[#D92323] text-5xl font-anton leading-none select-none mb-4">
                  “
                </div>

                <blockquote>
                  <p className="text-base sm:text-lg font-medium text-white/95 leading-relaxed">
                    {PROFILE.quote}
                  </p>
                </blockquote>
              </div>

              <div className="pt-6 mt-8 border-t border-[#D92323]/30">
                <span className="font-signature text-3xl sm:text-4xl text-white block leading-normal mb-3">
                  {PROFILE.signature}
                </span>

                <button
                  type="button"
                  onClick={onOpenCommission}
                  className="w-full flex items-center justify-between text-[10px] font-bold tracking-[0.16em] text-neutral-200 hover:text-white uppercase cursor-pointer group pt-1"
                >
                  <span>LET&apos;S CREATE TOGETHER</span>
                  <SparkleIcon className="w-3.5 h-3.5 text-[#D92323] transition-transform duration-200 group-hover:scale-125" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
