/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useState } from 'react';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CommissionModal } from './components/CommissionModal';
import { ContactFooterSection } from './components/ContactFooterSection';
import { CredentialsProcessSection } from './components/CredentialsProcessSection';
import { HeroSection } from './components/HeroSection';
import { SelectedProjectsSection } from './components/SelectedProjectsSection';
import { TopBar } from './components/TopBar';
import { PROJECTS, ProjectCategory, ProjectItem } from './data/portfolioData';

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [commissionOpen, setCommissionOpen] = useState(false);
  const [commissionTopic, setCommissionTopic] = useState<string | undefined>(undefined);

  const handleToggleSkill = useCallback((skill: string) => {
    setActiveSkillFilter((prev) => {
      const next = prev === skill ? null : skill;
      if (next) {
        setShowAllProjects(true);
        const projectsEl = document.getElementById('projects');
        projectsEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return next;
    });
  }, []);

  const handleNavigateProject = useCallback(
    (direction: 'prev' | 'next') => {
      if (!selectedProject) return;
      const idx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
      if (idx === -1) return;
      const nextIdx =
        direction === 'next'
          ? (idx + 1) % PROJECTS.length
          : (idx - 1 + PROJECTS.length) % PROJECTS.length;
      setSelectedProject(PROJECTS[nextIdx]);
    },
    [selectedProject]
  );

  const handleOpenCommission = useCallback((topic?: string) => {
    setCommissionTopic(topic);
    setCommissionOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] flex flex-col">
      <TopBar onOpenCommission={() => handleOpenCommission()} />

      <main className="flex-1">
        <HeroSection onOpenCommission={() => handleOpenCommission()} />

        <SelectedProjectsSection
          projects={PROJECTS}
          showAllProjects={showAllProjects}
          onToggleShowAll={() => setShowAllProjects((prev) => !prev)}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          activeSkillFilter={activeSkillFilter}
          onClearSkillFilter={() => setActiveSkillFilter(null)}
          onSelectProject={setSelectedProject}
        />

        <CredentialsProcessSection
          activeSkillFilter={activeSkillFilter}
          onToggleSkill={handleToggleSkill}
          onOpenCommission={() => handleOpenCommission()}
        />
      </main>

      <ContactFooterSection onOpenCommission={() => handleOpenCommission()} />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={handleNavigateProject}
        onOpenCommission={(projectTitle) => handleOpenCommission(projectTitle)}
      />

      <CommissionModal
        isOpen={commissionOpen}
        initialTopic={commissionTopic}
        onClose={() => setCommissionOpen(false)}
      />
    </div>
  );
}
