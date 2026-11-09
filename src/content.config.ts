import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** One question and its answer, at /help/<file name>/. */
const help = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/help' }),
  schema: z.object({
    /** The question as people ask it; it is the page title and the H1. */
    question: z.string(),
    /** A one- or two-sentence answer, used as the meta description and in lists. */
    summary: z.string(),
    category: z.enum([
      'getting-started',
      'widgets',
      'fish-and-packs',
      'tanks-and-styles',
      'complications',
      'other-devices',
      'privacy-and-purchases',
      'troubleshooting',
    ]),
    /** Lower comes first within its category. */
    order: z.number().default(100),
    /** Shown on the home page. Keep to about eight. */
    featured: z.boolean().default(false),
    updated: z.coerce.date(),
    /** Ids of related help entries or guide paths such as "/guides/add-the-widget/". */
    related: z.array(z.string()).default([]),
  }),
});

/** A longer article, at /guides/<file name>/. */
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Lower comes first in the index. */
    order: z.number().default(100),
    /** A short label for cards, such as "Getting started". */
    kicker: z.string().default('Guide'),
    featured: z.boolean().default(false),
  }),
});

/** Release notes, one entry per version, at /whats-new/<file name>/. */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    version: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = { help, guides, news };
