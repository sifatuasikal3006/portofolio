import React, { useState } from 'react';
import { ArrowRight, Check, Copy, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { SparkleIcon } from './SparkleIcon';

interface ContactFooterSectionProps {
  onOpenCommission: () => void;
}

export const ContactFooterSection: React.FC<ContactFooterSectionProps> = ({
  onOpenCommission,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#0A0A0A] hairline-top pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 items-center">
          {/* Column 1: Headline & Availability CTA */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-start gap-2.5">
              <h2 className="font-anton text-4xl sm:text-5xl text-white uppercase tracking-tight leading-[0.96]">
                LET’S WORK
                <br />
                TOGETHER
              </h2>
              <SparkleIcon className="w-5 h-5 text-[#D92323] shrink-0 mt-1" />
            </div>

            <p className="text-xs sm:text-[13.5px] text-neutral-400 leading-relaxed max-w-sm">
              I&apos;m currently open for new photo editing commissions, visual branding, and
              informatics collaborations. Let&apos;s create something striking that drives results.
            </p>

            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenCommission}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#D92323] bg-[#140808] text-[#D92323] hover:bg-[#D92323] hover:text-white transition-all duration-200 text-xs font-bold tracking-[0.14em] uppercase group cursor-pointer whitespace-nowrap"
              >
                <span className="w-5 h-5 rounded-full bg-[#D92323]/20 group-hover:bg-white/20 flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3 h-3" />
                </span>
                <span>AVAILABLE FOR FREELANCE</span>
              </button>
            </div>
          </div>

          {/* Column 2: Minimalist Contact Channel Links */}
          <div className="md:col-span-4 space-y-3">
            {/* Email with Copy + Mailto */}
            <div className="flex items-center justify-between gap-2 p-2.5 hover:bg-neutral-900/60 rounded-sm transition-colors group">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-4 min-w-0 flex-1"
              >
                <div className="w-9 h-9 rounded-full bg-[#121212] border border-neutral-800 flex items-center justify-center group-hover:border-[#D92323] transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-neutral-300 group-hover:text-[#D92323] transition-colors" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                    EMAIL
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-[#D92323] transition-colors font-mono truncate block">
                    {PROFILE.email}
                  </span>
                </div>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-2 text-neutral-500 hover:text-white border border-transparent hover:border-neutral-700 rounded-sm transition-colors cursor-pointer shrink-0"
                title="Copy email"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-[#D92323]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-2.5 hover:bg-neutral-900/60 rounded-sm transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-[#121212] border border-neutral-800 flex items-center justify-center group-hover:border-[#D92323] transition-colors shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-neutral-300 group-hover:text-[#D92323] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                  LINKEDIN
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-[#D92323] transition-colors font-mono truncate block">
                  {PROFILE.linkedinLabel}
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-2.5 hover:bg-neutral-900/60 rounded-sm transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-[#121212] border border-neutral-800 flex items-center justify-center group-hover:border-[#D92323] transition-colors shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-neutral-300 group-hover:text-[#D92323] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                  INSTAGRAM
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-[#D92323] transition-colors font-mono truncate block">
                  {PROFILE.instagramLabel}
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-2.5">
              <div className="w-9 h-9 rounded-full bg-[#121212] border border-neutral-800 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#D92323]" />
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                  LOCATION
                </span>
                <span className="text-xs sm:text-sm font-medium text-neutral-300">
                  {PROFILE.locationFull}
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Studio Workspace Card */}
          <div className="md:col-span-4 flex justify-center md:justify-end items-center">
            <div className="relative w-full max-w-[360px] bg-[#141414] border border-neutral-800 rounded-md p-5 overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#D92323]/15 rounded-full blur-2xl pointer-events-none"
              />

              {/* Laptop Device Frame */}
              <div className="relative bg-[#050505] rounded-sm border border-neutral-700/60 p-2">
                <div className="aspect-[16/10] bg-[#0A0A0A] rounded-xs border border-neutral-800 p-3.5 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-center text-[8px] text-neutral-500 font-mono">
                    <span className="text-[#D92323] font-bold">WE CRAFT</span>
                    <span>VISUAL STORIES</span>
                  </div>
                  <div className="py-1">
                    <p className="font-anton text-sm sm:text-base text-white tracking-wide uppercase leading-tight">
                      WE DESIGN
                      <br />
                      <span className="text-[#D92323]">DIGITAL EXPERIENCES</span>
                    </p>
                    <div className="w-12 h-0.5 bg-[#D92323] mt-1.5" />
                  </div>
                  <div className="flex justify-between text-[7px] text-neutral-500 font-mono border-t border-neutral-800 pt-1.5">
                    <span>SIFA TUASIKAL</span>
                    <span>EST. 2026</span>
                  </div>
                </div>
                <div className="w-16 h-1 bg-neutral-700 rounded-full mx-auto mt-2" />
              </div>

              {/* Studio Monogram Bar */}
              <div className="flex items-center justify-between pt-4 mt-3 border-t border-neutral-800/80 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-sm bg-[#090909] border border-neutral-700 flex items-center justify-center text-[11px] font-anton text-[#D92323]">
                    S
                  </div>
                  <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">
                    STUDIO WORKSPACE
                  </span>
                </div>
                <span className="text-[9px] text-neutral-500 uppercase tracking-wider">
                  INDONESIA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Sub-Bar */}
        <div className="hairline-top pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
          <p>© 2026 SIFA TUASIKAL. ALL RIGHTS RESERVED.</p>
          <p className="text-neutral-400">{PROFILE.locationFooter}</p>
        </div>
      </div>
    </footer>
  );
};
