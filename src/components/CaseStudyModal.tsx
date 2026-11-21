import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, SlidersHorizontal, X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ProjectThumbnail } from './ProjectThumbnail';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  onOpenCommission: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onNavigate,
  onOpenCommission,
}) => {
  const [splitPercent, setSplitPercent] = useState(68);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  useEffect(() => {
    if (!project) return;
    setSplitPercent(68);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, onNavigate]);

  if (!project) return null;

  const handleCopyHex = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 1600);
    } catch {
      // Clipboard blocked in restricted iframe
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0F0F0F] border border-white/15 rounded-sm overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 hairline-bottom bg-[#0A0A0A]">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-anton text-2xl text-[#D92323] leading-none whitespace-nowrap shrink-0 tabular-nums">
              {project.number}
            </span>
            <div className="min-w-0">
              <h2
                id="case-study-title"
                className="text-sm sm:text-base font-bold uppercase tracking-wider text-white truncate"
              >
                {project.title}
              </h2>
              <p className="text-[10px] text-neutral-400 uppercase tracking-[0.14em] truncate">
                {project.category} · {project.client} · {project.year}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="w-9 h-9 rounded-full bg-[#161616] border border-neutral-800 hover:border-[#D92323] flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[82vh] overflow-y-auto">
          {/* Interactive Before / After Grading Showcase */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest">
              <div className="flex items-center gap-2 text-neutral-300">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#D92323]" />
                <span>INTERACTIVE TONAL &amp; GRADE INSPECTION</span>
              </div>
              <span className="text-neutral-400 tabular-nums">
                GRADED {splitPercent}% · RAW {100 - splitPercent}%
              </span>
            </div>

            <div className="relative w-full aspect-[16/9] max-h-[340px] rounded-sm overflow-hidden border border-white/15 select-none">
              {/* Base Layer: Raw / Uncalibrated */}
              <div className="absolute inset-0">
                <ProjectThumbnail projectId={project.id} retouchPreviewMode="raw" />
              </div>

              {/* Top Layer: Final Graded Master clipped by slider */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - splitPercent}% 0 0)` }}
              >
                <ProjectThumbnail projectId={project.id} retouchPreviewMode="graded" />
              </div>

              {/* Split Line */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 w-[2px] bg-[#D92323] pointer-events-none z-20"
                style={{ left: `${splitPercent}%` }}
              >
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#D92323] flex items-center justify-center text-[9px] font-mono text-white">
                  ↔
                </div>
              </div>

              {/* Corner Labels */}
              <span className="absolute top-3 left-3 z-20 text-[9px] font-mono uppercase tracking-widest bg-black/75 px-2 py-0.5 text-white border border-white/15">
                FINAL GRADE
              </span>
              <span className="absolute top-3 right-3 z-20 text-[9px] font-mono uppercase tracking-widest bg-black/75 px-2 py-0.5 text-neutral-400 border border-white/15">
                RAW BASE
              </span>

              {/* Range Input Overlay */}
              <input
                type="range"
                min={10}
                max={90}
                value={splitPercent}
                onChange={(e) => setSplitPercent(Number(e.target.value))}
                aria-label="Compare raw and graded visual output"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>

            {/* Grading Calibration Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-[#141414] border border-white/10 px-4 py-2.5 rounded-sm">
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 block">
                  EXPOSURE OFFSET
                </span>
                <span className="text-xs font-mono text-white font-semibold tabular-nums">
                  {project.retouchMetrics.exposure}
                </span>
              </div>
              <div className="bg-[#141414] border border-white/10 px-4 py-2.5 rounded-sm">
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 block">
                  TONAL CURVE
                </span>
                <span className="text-xs font-mono text-white font-semibold tabular-nums">
                  {project.retouchMetrics.contrast}
                </span>
              </div>
              <div className="bg-[#141414] border border-white/10 px-4 py-2.5 rounded-sm">
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 block">
                  COLOR PROFILE
                </span>
                <span className="text-xs font-mono text-white font-semibold">
                  {project.retouchMetrics.colorProfile}
                </span>
              </div>
            </div>
          </div>

          {/* Case Study Narrative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 hairline-top">
            <div className="md:col-span-7 space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D92323] block mb-1.5">
                  PROJECT OVERVIEW
                </span>
                <p className="text-sm text-neutral-200 leading-relaxed">{project.summary}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 block mb-1.5">
                    THE CHALLENGE
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 block mb-1.5">
                    THE OUTCOME
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed">{project.outcome}</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-5 md:pl-6 md:border-l md:border-neutral-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 block mb-1">
                  ROLE
                </span>
                <p className="text-xs text-white font-medium">{project.role}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 block mb-2">
                  DELIVERABLES
                </span>
                <ul className="space-y-1.5">
                  {project.deliverables.map((item) => (
                    <li key={item} className="text-xs text-neutral-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#D92323] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 block mb-2">
                  COLOR PALETTE (CLICK TO COPY)
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {project.palette.map((swatch) => (
                    <button
                      key={swatch.hex}
                      type="button"
                      onClick={() => handleCopyHex(swatch.hex)}
                      className="flex items-center gap-2.5 p-2 bg-[#141414] border border-neutral-800 hover:border-[#D92323] rounded-sm text-left transition-colors cursor-pointer"
                    >
                      <span
                        className="w-4 h-4 rounded-xs border border-white/20 shrink-0"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <span className="text-[10px] font-mono text-neutral-300 truncate flex items-center gap-1">
                        {copiedHex === swatch.hex ? (
                          <>
                            <Check className="w-3 h-3 text-[#D92323]" />
                            COPIED
                          </>
                        ) : (
                          swatch.hex
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Controls */}
        <div className="px-6 py-4 hairline-top bg-[#0A0A0A] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('prev')}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-widest text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-600 rounded-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('next')}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-widest text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-600 rounded-sm transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenCommission(project.title);
            }}
            className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] bg-[#D92323] hover:bg-[#b91c1c] text-white rounded-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            Request Similar Project
          </button>
        </div>
      </div>
    </div>
  );
};
