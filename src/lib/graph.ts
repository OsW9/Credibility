import { getCollection, getEntry } from 'astro:content';

/**
 * Graphed-based utilities for the Credibility Hub.
 * These functions ensure the "Time-to-Proof" business requirement (BR-01).
 */

export interface CredibilityNode {
  id: string;
  name: string;
  relatedProjects: any[];
  proofs: any[];
}

/**
 * Fetches a specific competency and all projects that prove it.
 * @param skillId The unique ID of the competency.
 */
export async function getSkillWithProofs(skillId: string) {
  const allProjects = await getCollection('projects');
  const skill = await getEntry('competencies', skillId);

  if (!skill) return null;

  // Filter projects that list this skill in their array
  const linkedProjects = allProjects.filter(project =>
    project.data.skills.includes(skillId)
  );

  const allSkills = await getCollection('competencies');
  const projectsWithSkills = linkedProjects.map(project => {
    const linkedSkills = allSkills.filter(s =>
      project.data.skills.includes(s.id)
    );
    return {
      ...project,
      skills: linkedSkills
    };
  });

  // Extract all proofs from these projects
  const allProofs = linkedProjects.flatMap(project => project.data.proofs);

  return {
    ...skill,
    projects: projectsWithSkills,
    proofs: allProofs
  };
}

/**
 * Fetches a project and its associated competencies.
 * @param projectId The unique ID of the project.
 */
export async function getProjectWithSkills(projectId: string) {
  const project = await getEntry('projects', projectId);
  if (!project) return null;

  const allSkills = await getCollection('competencies');
  const linkedSkills = allSkills.filter(skill =>
    project.data.skills.includes(skill.id)
  );

  return {
    ...project,
    skills: linkedSkills
  };
}

/**
 * Returns the most impactful projects (featured) for a given skill.
 */
export async function getFeaturedProofsForSkill(skillId: string) {
  const allProjects = await getCollection('projects');
  return allProjects
    .filter(p => p.data.skills.includes(skillId) && p.data.featured)
    .slice(0, 3);
}
