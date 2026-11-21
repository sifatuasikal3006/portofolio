import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../data/portfolioData';
import { ProjectThumbnail } from './ProjectThumbnail';

interface SelectedProjectsSectionProps {
  projects: ProjectItem[];
  showAllProjects: boolean;
  onToggleShowAll: () => void;
  activeCategory: ProjectCategory;
  onSelectCategory: (cat: ProjectCategory) => void;
  activeSkillFilter: string | null;
  onClearSkillFilter: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Photo Retouching',
  'Brand Identity',
  'Editorial & UI/UX',
];

export const SelectedProjectsSection: React.FC<SelectedProjectsSectionProps> = ({
  projects,
  showAllProjects,
  onToggleShowAll,
  activeCategory,
  onSelectCategory,
  activeSkillFilter,
  onClearSkillFilter,
  onSelectProject,
}) => {
  const displayedProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === 'All' || project.category === activeCategory;
    const matchesSkill =
      !activeSkillFilter || project.tools.includes(activeSkillFilter);
    if (!showAllProjects && !activeSkillFilter && activeCategory === 'All') {
      return project.featured;
    }
    return matchesCategory && matchesSkill;
  });

  return (
    <section
      id="projects"
      className="w-full bg-[#a36565] py-16 hairline-top hairline-bottom"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pb-8 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#D92323] inline-block shrink-0" />
            <h3 className="font-bold text-sm sm:text-base uppercase tracking-[0.14em] text-white">
              {showAllProjects ? 'ALL ARCHIVE PROJECTS' : 'SELECTED PROJECTS'}
            </h3>
            {activeSkillFilter && (
              <button
                type="button"
                onClick={onClearSkillFilter}
                className="ml-2 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#D92323] hover:text-white transition-colors cursor-pointer"
              >
                <span>· FILTERED BY {activeSkillFilter}</span>
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={onToggleShowAll}
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.16em] font-semibold text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer self-start sm:self-auto whitespace-nowrap shrink-0"
          >
            <span>{showAllProjects ? 'SHOW SELECTED (03)' : 'VIEW ALL PROJECTS'}</span>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#D92323] group-hover:translate-x-1 transition-all duration-200" />
          </button>
        </div>

        {/* Category Filter Bar (visible when archive expanded or filtering) */}
        {(showAllProjects || activeCategory !== 'All' || activeSkillFilter) && (
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
            <div
              role="tablist"
              aria-label="Project category filter"
              className="flex flex-wrap items-center gap-2"
            >
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => onSelectCategory(category)}
                    className={`px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] rounded-sm border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#D92323] border-[#D92323] text-white'
                        : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest tabular-nums">
              {String(displayedProjects.length).padStart(2, '0')} WORKS SHOWN
            </span>
          </div>
        )}

        {/* 3-Column Projects Showcase Grid */}
        {displayedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-10">
            {displayedProjects.map((project) => (
              <article key={project.id} className="group flex flex-col">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-left w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D92323] rounded-sm"
                >
                  {/* Thumbnail Container */}
                  <div className="relative w-full aspect-[4/3] bg-[#121212] overflow-hidden rounded-sm border border-neutral-800 group-hover:border-[#D92323]/70 transition-colors duration-300">
                    <div className="w-full h-full group-hover:scale-[1.04] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <ProjectThumbnail projectId={project.id} />
                    </div>
                  </div>

                  {/* Card Footer Metadata */}
                  <div className="flex items-center justify-between gap-4 pt-4">
                    <div className="flex items-baseline gap-3.5 min-w-0">
                      <span className="font-anton text-[26px] leading-none text-[#D92323] tracking-tight whitespace-nowrap shrink-0 tabular-nums">
                        {project.number}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#D92323] transition-colors truncate">
                          {project.title}
                        </h4>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-wider truncate mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-neutral-800/70 bg-[#121212] rounded-sm mt-10">
            <p className="text-sm text-neutral-300 font-medium">
              No projects match the current filter combination.
            </p>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('All');
                onClearSkillFilter();
              }}
              className="mt-4 px-4 py-2 text-[11px] font-bold uppercase tracking-widest border border-[#D92323] text-[#D92323] hover:bg-[#D92323] hover:text-white transition-colors rounded-sm cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
