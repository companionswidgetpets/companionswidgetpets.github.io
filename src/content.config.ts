import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { blogCategories } from './lib/blog.ts';

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
    /** Ids of related help entries or blog paths such as "/blog/add-the-widget/". */
    related: z.array(z.string()).default([]),
  }),
});

/** A blog post, at /blog/<file name>/. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    /** The page title and the H1, as people would search for it. */
    title: z.string(),
    /** One or two sentences: the meta description, and the line under the title. */
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(blogCategories),
    /** Lower comes first within its topic. */
    order: z.number().default(100),
    /** Shown on the home page. Keep to three. */
    featured: z.boolean().default(false),
    /** The live tank at the top of the post; its style and first fish also make the card's picture. */
    tank: z.object({
      style: z.string(),
      size: z.enum(['small', 'medium', 'large', 'watch']).default('medium'),
      fish: z.array(z.string()).min(1).max(5),
      complication: z.enum(['time', 'date']).optional(),
    }),
    /** Other posts to suggest at the end, by file name; the rest are filled from the same topic. */
    related: z.array(z.string()).default([]),
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

/*
 * Translations. The files above are the English originals; each has a translation per
 * language at src/content/i18n/<language>/<kind>/<same file name>.md. A translation holds
 * only the words: where an entry sits, whether it is featured and what it relates to are
 * read from the English file, so the two can never disagree. A page whose translation is
 * missing is simply not published in that language (see src/lib/content.ts).
 */
const translations = './src/content/i18n';

const helpI18n = defineCollection({
  loader: glob({ pattern: '*/help/*.md', base: translations }),
  schema: z.object({
    question: z.string(),
    summary: z.string(),
    /** When the translation itself was last revised, if later than the English. */
    updated: z.coerce.date().optional(),
  }),
});

const blogI18n = defineCollection({
  loader: glob({ pattern: '*/blog/*.md', base: translations }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date().optional(),
  }),
});

const newsI18n = defineCollection({
  loader: glob({ pattern: '*/news/*.md', base: translations }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
});

export const collections = { help, blog, news, helpI18n, blogI18n, newsI18n };
