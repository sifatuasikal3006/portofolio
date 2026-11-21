import React, { useEffect, useState } from 'react';
import { CheckCircle2, Mail, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { SparkleIcon } from './SparkleIcon';

interface CommissionModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

const SERVICES = [
  'Photo Retouching',
  'Color Grading',
  'Brand Identity',
  'UI/UX Visual Design',
];

export const CommissionModal: React.FC<CommissionModalProps> = ({
  isOpen,
  initialTopic,
  onClose,
}) => {
  const [selectedService, setSelectedService] = useState('Photo Retouching');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setSubmitted(false);
    if (initialTopic) {
      setBrief(`Interested in a visual commission inspired by ${initialTopic}.`);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, initialTopic, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !brief.trim()) return;
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="commission-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0F0F0F] border border-white/15 rounded-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 hairline-bottom bg-[#0A0A0A]">
          <div className="flex items-center gap-2.5">
            <SparkleIcon className="w-3.5 h-3.5 text-[#D92323]" />
            <h2
              id="commission-modal-title"
              className="text-xs font-bold uppercase tracking-[0.18em] text-white"
            >
              START A COMMISSION
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close commission form"
            className="w-8 h-8 rounded-full bg-[#161616] border border-neutral-800 hover:border-[#D92323] flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-12 h-12 rounded-full bg-[#D92323]/15 border border-[#D92323] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-[#D92323]" />
            </div>
            <div className="space-y-2">
              <h3 className="font-anton text-3xl text-white uppercase tracking-wide">
                BRIEF RECEIVED
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm mx-auto">
                Thank you, {name}. Your {selectedService.toLowerCase()} inquiry has been prepared
                for Sifa Tuasikal. You can also send it directly via email below.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                  `[${selectedService}] Inquiry from ${name}`
                )}&body=${encodeURIComponent(brief)}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D92323] hover:bg-[#b91c1c] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Email Client</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 border border-neutral-700 hover:border-white text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400 block mb-2.5">
                SELECT DISCIPLINE
              </span>
              <div className="grid grid-cols-2 gap-2">
                {SERVICES.map((service) => {
                  const active = selectedService === service;
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-3 py-2 text-[11px] font-semibold uppercase tracking-wider rounded-sm border text-left transition-colors cursor-pointer ${
                        active
                          ? 'bg-[#D92323]/20 border-[#D92323] text-white'
                          : 'bg-[#141414] border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="comm-name"
                  className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400 block mb-1.5"
                >
                  YOUR NAME
                </label>
                <input
                  id="comm-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Rivera"
                  className="w-full px-3.5 py-2.5 bg-[#141414] border border-neutral-800 focus:border-[#D92323] focus:outline-none text-xs text-white rounded-sm placeholder:text-neutral-600"
                />
              </div>

              <div>
                <label
                  htmlFor="comm-email"
                  className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400 block mb-1.5"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  id="comm-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@studio.com"
                  className="w-full px-3.5 py-2.5 bg-[#141414] border border-neutral-800 focus:border-[#D92323] focus:outline-none text-xs text-white rounded-sm placeholder:text-neutral-600"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="comm-brief"
                className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400 block mb-1.5"
              >
                PROJECT BRIEF
              </label>
              <textarea
                id="comm-brief"
                rows={4}
                required
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder="Share deliverables, mood references, or target timeline..."
                className="w-full px-3.5 py-2.5 bg-[#141414] border border-neutral-800 focus:border-[#D92323] focus:outline-none text-xs text-white rounded-sm placeholder:text-neutral-600 resize-none"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <span className="text-[10px] font-mono text-neutral-500 truncate">
                {PROFILE.email}
              </span>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#D92323] hover:bg-[#b91c1c] text-white text-xs font-bold uppercase tracking-[0.16em] rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Send Brief
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
