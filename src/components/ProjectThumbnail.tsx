import React from 'react';

interface ProjectThumbnailProps {
  projectId: string;
  retouchPreviewMode?: 'graded' | 'raw';
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  projectId,
  retouchPreviewMode = 'graded',
}) => {
  const rawFilterClass =
    retouchPreviewMode === 'raw' ? 'grayscale-[45%] brightness-90 contrast-75 saturate-50' : '';

  if (projectId === 'veloce-bikes') {
    return (
      <div
        className={`w-full h-full bg-gradient-to-t from-black via-[#141414] to-[#1c1c1c] p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 ease-out ${rawFilterClass}`}
      >
        <div className="flex justify-between items-center text-[10px] text-neutral-500 font-mono tracking-widest">
          <span>VELOCE</span>
          <span className="text-[9px] text-neutral-500 uppercase tracking-widest">SERIES 01</span>
        </div>

        <div className="space-y-1">
          <p className="font-anton text-2xl text-white tracking-wide leading-none">VELOCE</p>
          <p className="text-[10px] text-[#D92323] font-semibold tracking-widest uppercase">
            BICYCLE EDITORIAL
          </p>
        </div>

        <div className="w-full flex justify-center py-1 opacity-90 group-hover:opacity-100 transition-opacity">
          <svg
            aria-hidden="true"
            className="w-40 h-24 text-neutral-400 stroke-current"
            fill="none"
            viewBox="0 0 100 60"
          >
            <circle cx="20" cy="40" r="14" strokeWidth="2.4" />
            <circle cx="80" cy="40" r="14" strokeWidth="2.4" />
            <path d="M20 40 L45 40 L60 22 L35 22 Z" strokeLinejoin="round" strokeWidth="2.4" />
            <path d="M45 40 L55 16 M50 16 L62 16" strokeLinecap="round" strokeWidth="2.4" />
            <path d="M80 40 L60 22 M60 22 L65 14 M60 14 L70 14" strokeLinecap="round" strokeWidth="2.4" />
            <line stroke="#D92323" strokeWidth="2.5" x1="20" x2="35" y1="40" y2="22" />
          </svg>
        </div>

        <div className="flex justify-between items-center text-[9px] text-neutral-500 uppercase tracking-widest border-t border-neutral-800/80 pt-2.5">
          <span className="whitespace-nowrap">RIDE BEYOND LIMITS</span>
          <span className="text-[#D92323] font-semibold whitespace-nowrap">PHOTO RETOUCH</span>
        </div>
      </div>
    );
  }

  if (projectId === 'woodcraft') {
    return (
      <div
        className={`w-full h-full bg-[#E8E4DC] text-neutral-900 p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 ease-out ${rawFilterClass}`}
      >
        <div className="flex justify-between items-center text-[10px] tracking-widest font-mono text-neutral-500">
          <span>WOODCRAFT</span>
          <span className="text-[9px] whitespace-nowrap">EST. 2024</span>
        </div>

        <div className="grid grid-cols-2 gap-3 items-center my-auto">
          <div>
            <h5 className="font-editorial-serif italic text-lg sm:text-xl leading-tight text-neutral-900">
              Timeless
              <br />
              Crafted
              <br />
              Furniture
            </h5>
            <div className="w-8 h-[2px] bg-[#D92323] mt-2.5" />
          </div>

          <div className="flex justify-center items-center">
            <svg
              aria-hidden="true"
              className="w-24 h-24 text-stone-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 64 64"
            >
              <path
                d="M20 16 C20 12, 44 12, 44 16 L42 34 C42 38, 22 38, 22 34 Z"
                fill="#B38656"
                strokeWidth="2"
              />
              <line strokeLinecap="round" strokeWidth="2.5" x1="20" x2="16" y1="34" y2="54" />
              <line strokeLinecap="round" strokeWidth="2.5" x1="44" x2="48" y1="34" y2="54" />
              <line strokeLinecap="round" strokeWidth="2" x1="26" x2="24" y1="36" y2="52" />
              <line strokeLinecap="round" strokeWidth="2" x1="38" x2="40" y1="36" y2="52" />
            </svg>
          </div>
        </div>

        <div className="flex justify-between items-center text-[9px] text-neutral-600 font-mono border-t border-neutral-300 pt-2.5">
          <span className="whitespace-nowrap">COLLECTION 04</span>
          <span className="font-bold text-neutral-900 whitespace-nowrap">ARTISANAL WOOD</span>
        </div>
      </div>
    );
  }

  if (projectId === 'urbanic') {
    return (
      <div
        className={`w-full h-full bg-[#0E0E0E] p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 ease-out ${rawFilterClass}`}
      >
        <div className="flex justify-between items-center text-[10px] text-neutral-500 font-mono tracking-widest">
          <span>URBANIC ISSUE 12</span>
          <span className="text-[#D92323] font-semibold">EDITORIAL</span>
        </div>

        <div className="flex items-center justify-between gap-3 my-auto">
          <div className="max-w-[58%]">
            <h5 className="font-anton text-2xl sm:text-[26px] text-white uppercase leading-[0.98] tracking-wide">
              STAY
              <br />
              AHEAD
              <br />
              <span className="text-[#D92323]">IN STYLE</span>
            </h5>
            <p className="text-[9px] text-neutral-400 mt-2.5 tracking-widest uppercase">
              AUTUMN / WINTER 2026
            </p>
          </div>

          <div className="w-20 h-28 bg-gradient-to-tr from-[#D92323] to-rose-700 rounded-sm overflow-hidden flex items-end justify-center relative shadow-lg shrink-0">
            <div className="w-14 h-24 bg-neutral-900 rounded-t-full relative flex items-center justify-center">
              <span className="text-[9px] font-anton text-[#D92323] tracking-widest whitespace-nowrap">
                VOGUE
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[9px] text-neutral-500 uppercase tracking-widest border-t border-neutral-800 pt-2.5">
          <span className="whitespace-nowrap">PHOTO DIRECTION</span>
          <span className="text-white font-semibold whitespace-nowrap">LAYOUT COMPOSITION</span>
        </div>
      </div>
    );
  }

  if (projectId === 'nocturne-audio') {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-[#141418] via-[#0B0B0D] to-[#1D0B0B] p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 ease-out ${rawFilterClass}`}
      >
        <div className="flex justify-between items-center text-[10px] text-neutral-500 font-mono tracking-widest">
          <span>NOCTURNE</span>
          <span className="text-[#D92323]">STUDIO GRADE</span>
        </div>

        <div className="flex items-center justify-between my-auto gap-4">
          <div>
            <p className="font-anton text-2xl text-white tracking-wide leading-none">REFERENCE</p>
            <p className="font-anton text-2xl text-[#D92323] tracking-wide leading-tight">
              ACOUSTICS
            </p>
          </div>
          <svg
            aria-hidden="true"
            className="w-24 h-24 text-neutral-300 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 64 64"
          >
            <path d="M14 36 C14 20, 50 20, 50 36" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="10" y="34" width="9" height="16" rx="3" stroke="#D92323" strokeWidth="2" />
            <rect x="45" y="34" width="9" height="16" rx="3" stroke="#D92323" strokeWidth="2" />
            <circle cx="32" cy="38" r="5" strokeWidth="1.5" className="text-neutral-600" />
          </svg>
        </div>

        <div className="flex justify-between items-center text-[9px] text-neutral-500 uppercase tracking-widest border-t border-neutral-800 pt-2.5">
          <span>SPECULAR CLEANUP</span>
          <span className="text-white">CAMPAIGN KEY ART</span>
        </div>
      </div>
    );
  }

  if (projectId === 'kinetic-lab') {
    return (
      <div
        className={`w-full h-full bg-[#0C0C0C] p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 ease-out ${rawFilterClass}`}
      >
        <div className="flex justify-between items-center text-[10px] text-neutral-500 font-mono tracking-widest">
          <span>ITPLN · LAB</span>
          <span className="text-[#D92323]">UI SYSTEM</span>
        </div>

        <div className="my-auto space-y-2.5">
          <p className="font-anton text-2xl text-white uppercase tracking-wide leading-none">
            KINETIC <span className="text-[#D92323]">GRID</span>
          </p>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-8 bg-[#181818] border border-white/10 rounded-xs" />
            <div className="h-8 bg-[#2A0808] border border-[#D92323]/40 rounded-xs" />
            <div className="h-8 bg-[#181818] border border-white/10 rounded-xs" />
          </div>
        </div>

        <div className="flex justify-between items-center text-[9px] text-neutral-500 uppercase tracking-widest border-t border-neutral-800 pt-2.5">
          <span>FIGMA TOKENS</span>
          <span className="text-white">RESPONSIVE UI</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full bg-[#151313] p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 ease-out ${rawFilterClass}`}
    >
      <div className="flex justify-between items-center text-[10px] text-neutral-500 font-mono tracking-widest">
        <span>ATELIER MONO</span>
        <span className="text-[#D92323]">PORTRAIT</span>
      </div>

      <div className="my-auto flex items-center justify-between gap-4">
        <div>
          <p className="font-editorial-serif italic text-xl text-neutral-200 leading-tight">
            Monograph
            <br />
            Studies
          </p>
          <div className="w-8 h-[2px] bg-[#D92323] mt-2" />
        </div>
        <div className="w-16 h-20 border border-white/15 bg-gradient-to-b from-[#2A0808] to-[#0A0A0A] flex items-center justify-center">
          <span className="font-anton text-2xl text-white/80">06</span>
        </div>
      </div>

      <div className="flex justify-between items-center text-[9px] text-neutral-500 uppercase tracking-widest border-t border-neutral-800 pt-2.5">
        <span>SKIN &amp; TONE</span>
        <span className="text-white">PRINT READY</span>
      </div>
    </div>
  );
};
