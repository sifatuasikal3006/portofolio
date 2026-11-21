import React, { useEffect, useRef, useState } from 'react';
import { Camera, Link2, MapPin, RotateCcw, Upload, X } from 'lucide-react';
import { HERO_METRICS, PROFILE } from '../data/portfolioData';
import { SparkleIcon } from './SparkleIcon';

interface HeroSectionProps {
  onOpenCommission: () => void;
}

const CUSTOM_PORTRAIT_STORAGE_KEY = 'sifa_portfolio_custom_portrait';

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCommission }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const [portraitSrc, setPortraitSrc] = useState<string>(PROFILE.portraitUrl);
  const [isPhotoMenuOpen, setIsPhotoMenuOpen] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CUSTOM_PORTRAIT_STORAGE_KEY);
      if (saved) {
        setPortraitSrc(saved);
        setImgFailed(false);
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPortraitSrc(reader.result);
        setImgFailed(false);
        setIsPhotoMenuOpen(false);
        try {
          localStorage.setItem(CUSTOM_PORTRAIT_STORAGE_KEY, reader.result);
        } catch {
          // Ignore quota errors
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = urlInput.trim();
    if (!trimmed) return;
    setPortraitSrc(trimmed);
    setImgFailed(false);
    setIsPhotoMenuOpen(false);
    setUrlInput('');
    try {
      localStorage.setItem(CUSTOM_PORTRAIT_STORAGE_KEY, trimmed);
    } catch {
      // Ignore storage errors
    }
  };

  const handleResetPhoto = () => {
    setPortraitSrc(PROFILE.portraitUrl);
    setImgFailed(false);
    setIsPhotoMenuOpen(false);
    try {
      localStorage.removeItem(CUSTOM_PORTRAIT_STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[820px] lg:min-h-[900px] overflow-hidden bg-[#012da7] flex flex-col justify-between"
    >
      {/* Ambient Radial Crimson Glow */}
      <div aria-hidden="true" className="absolute inset-0 hero-glow pointer-events-none z-0" />

      {/* Giant Backdrop Typography: PORTFOLIO (sized to fit edge-to-edge without clipping) */}
      <div
        aria-hidden="true"
        className="absolute top-[7%] sm:top-[5%] lg:top-[3%] inset-x-0 flex justify-center pointer-events-none z-10 select-none px-2"
      >
        <p className="portfolio-text-mask font-anton text-[18vw] sm:text-[17vw] lg:text-[16.2vw] max-w-[1400px] uppercase tracking-[0.01em] leading-[0.88] text-center whitespace-nowrap">
          PORTFOLIO
        </p>
      </div>

      {/* Center Cutout Portrait */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center items-end z-20 pointer-events-none">
        <div className="relative group w-[320px] sm:w-[440px] md:w-[520px] lg:w-[600px] xl:w-[640px] h-[540px] sm:h-[680px] lg:h-[760px]">
          {!imgFailed ? (
            <img
              src={portraitSrc}
              alt="Sifa Tuasikal Creative Portfolio Portrait"
              referrerPolicy="no-referrer"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover object-top portrait-fade-mask brightness-95 contrast-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#240909]/80 via-[#140707]/90 to-[#0A0A0A] border border-white/10 portrait-fade-mask">
              <span className="font-anton text-8xl text-[#D92323]/60 tracking-wider">ST</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 mt-3">
                Sifa Tuasikal · Visual Studio
              </span>
            </div>
          )}
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" />
        </div>
      </div>

      {/* Interactive Photo Change Control (accessible above foreground layer) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex flex-col items-center">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          aria-label="Upload portrait photo"
        />

        {isPhotoMenuOpen ? (
          <div className="w-[300px] sm:w-[340px] bg-[#121212]/95 backdrop-blur-md border border-white/15 rounded-sm p-4 shadow-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                Ganti Foto Portrait
              </span>
              <button
                type="button"
                onClick={() => setIsPhotoMenuOpen(false)}
                aria-label="Close photo menu"
                className="text-neutral-400 hover:text-white cursor-pointer p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#D92323] hover:bg-[#b91c1c] text-white text-[11px] font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload Foto dari Perangkat</span>
            </button>

            <form onSubmit={handleApplyUrl} className="flex gap-1.5">
              <div className="relative flex-1">
                <Link2 className="w-3.5 h-3.5 text-neutral-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="Atau tempel URL foto..."
                  className="w-full pl-8 pr-2.5 py-1.5 bg-[#0A0A0A] border border-neutral-800 focus:border-[#D92323] focus:outline-none text-[11px] text-white rounded-sm placeholder:text-neutral-600"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-1.5 bg-[#1C1C1C] hover:bg-neutral-800 border border-neutral-700 text-[10px] font-bold uppercase tracking-wider text-white rounded-sm cursor-pointer shrink-0"
              >
                Pakai
              </button>
            </form>

            {portraitSrc !== PROFILE.portraitUrl && (
              <button
                type="button"
                onClick={handleResetPhoto}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Kembalikan Foto Default</span>
              </button>
            )}
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsPhotoMenuOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#141414]/90 backdrop-blur-md border border-white/15 hover:border-[#D92323] rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-200 hover:text-white shadow-xl transition-colors cursor-pointer whitespace-nowrap"
          >
            <Camera className="w-3.5 h-3.5 text-[#D92323]" />
            <span>Ganti Foto</span>
          </button>
        )}
      </div>

      {/* Foreground Content Layer */}
      <div className="relative z-30 max-w-[1400px] w-full mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-12 flex-1 flex flex-col justify-between pointer-events-none">
        {/* Top Row: Floating Callout Pill */}
        <div className="w-full flex justify-end items-start pointer-events-auto">
          <button
            type="button"
            onClick={onOpenCommission}
            className="hidden md:flex items-center gap-3.5 bg-[#141414]/90 backdrop-blur-md border border-neutral-800 hover:border-[#D92323]/60 rounded-full px-4 py-2.5 shadow-2xl max-w-[310px] transform translate-y-12 lg:translate-y-24 lg:-translate-x-4 transition-colors duration-200 text-left cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#D92323]/20 border border-[#D92323] flex items-center justify-center shrink-0">
              <SparkleIcon className="w-3 h-3 text-[#D92323]" />
            </div>
            <p className="text-[11px] leading-snug text-neutral-300 font-medium">
              {PROFILE.calloutText}
            </p>
          </button>
        </div>

        {/* Bottom Hero Grid: Bio Left & Metrics Right */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end pointer-events-auto mt-auto pt-56 sm:pt-64 md:pt-52">
          {/* Left Editorial Bio Block */}
          <div className="md:col-span-6 lg:col-span-4 space-y-3.5 max-w-md">
            <span className="font-editorial-serif italic text-2xl lg:text-3xl text-neutral-300 block tracking-normal">
              {PROFILE.greeting}
            </span>

            <h1 className="font-anton uppercase text-5xl sm:text-6xl lg:text-[68px] leading-[0.92] text-white tracking-tight">
              <span className="block">{PROFILE.firstName}</span>
              <span className="block">{PROFILE.lastName}</span>
            </h1>

            <div className="pt-1.5">
              <h2 className="text-[#D92323] font-extrabold text-xs sm:text-[13px] uppercase tracking-[0.22em] leading-relaxed">
                {PROFILE.roleTitle}
              </h2>
            </div>

            <p className="text-xs sm:text-[13.5px] text-neutral-400 font-normal leading-relaxed">
              {PROFILE.bio}
            </p>

            <div className="pt-2 flex items-center gap-2.5 text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.16em]">
              <MapPin className="w-3.5 h-3.5 text-[#D92323] shrink-0" />
              <span>{PROFILE.locationShort}</span>
            </div>
          </div>

          {/* Center Gap Spacer for Portrait */}
          <div className="hidden lg:block lg:col-span-4 pointer-events-none" />

          {/* Right Stats Metric Stack */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col justify-end space-y-5 md:items-end text-left md:text-right pb-1">
            {HERO_METRICS.map((metric, idx) => (
              <React.Fragment key={metric.title}>
                {idx > 0 && <div className="w-full md:w-56 hairline-top opacity-40" />}
                <div className="flex md:flex-row-reverse items-center gap-4">
                  <span className="font-anton text-4xl sm:text-[46px] text-[#D92323] tracking-tight leading-none whitespace-nowrap shrink-0 tabular-nums">
                    {metric.value}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase text-white tracking-wider whitespace-nowrap">
                      {metric.title}
                    </span>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-[0.14em] whitespace-nowrap">
                      {metric.subtitle}
                    </span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
