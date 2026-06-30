import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  competencies: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/competencies' }),
    schema: z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      level: z.enum(['Learning', 'Proficient', 'Expert']),
      category: z.string(),
    }),
  }),
  projects: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
      id: z.string(),
      title: z.string(),
      context: z.string(),
      problem_statement: z.string(),
      solution_description: z.string(),
      role: z.string(),
      status: z.enum(['InProgress', 'Completed', 'Archived']),
      start_date: z.coerce.date(),
      end_date: z.coerce.date().optional(),
      featured: z.boolean().default(false),
      skills: z.array(z.string()),
      proofs: z.array(z.object({
        type: z.enum(['GitHub', 'LiveDemo', 'CaseStudy', 'Certification']),
        url: z.string().url(),
        label: z.string(),
      })),
    }),
  }),
  blog: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
      id: z.string(),
      title: z.string(),
      type: z.enum(['Retrospective', 'Tutorial', 'Analysis', 'Note']),
      published_at: z.coerce.date(),
      project_id: z.string().optional(),
      tags: z.array(z.string()).default([]),
    }),
  }),
};
