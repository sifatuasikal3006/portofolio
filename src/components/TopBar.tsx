import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { SparkleIcon } from './SparkleIcon';

interface TopBarProps {
  onOpenCommission: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenCommission }) => {
  return (
    <header className="w-full hairline-bottom bg-[#0A0A0A]/95 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-3.5 flex justify-between items-center gap-6 text-[11px] uppercase tracking-[0.2em]">
        {/* Left Identity */}
        <a
          href="#hero"
          className="flex items-center gap-2 min-w-0 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D92323]"
        >
          <span className="font-extrabold text-white whitespace-nowrap">{PROFILE.roleBarLeft}</span>
          <span className="text-neutral-600 font-normal hidden sm:inline">/</span>
          <span className="text-neutral-400 font-medium hidden sm:inline truncate max-w-[340px] lg:max-w-none">
            {PROFILE.roleBarRight}
          </span>
        </a>

        {/* Center Single-Line Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 text-[11px] font-semibold tracking-[0.16em] text-neutral-400"
        >
          <a
            href="#projects"
            className="hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#about-grid"
            className="hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Credentials
          </a>
          <a
            href="#work-process"
            className="hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Process
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Right Freelance Action */}
        <button
          type="button"
          onClick={onOpenCommission}
          className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors duration-200 group whitespace-nowrap shrink-0 py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D92323]"
        >
          <span className="font-semibold tracking-[0.16em]">{PROFILE.availabilityLabel}</span>
          <SparkleIcon className="w-3.5 h-3.5 text-[#D92323] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
        </button>
      </div>
    </header>
  );
};
