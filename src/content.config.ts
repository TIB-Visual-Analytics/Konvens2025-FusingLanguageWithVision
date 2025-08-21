import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      subtitle: z.string(),
      image: z.string(),
    }),
  }),
});

// Export collections
export const collections = {
  // Pages
  homepage: homepageCollection,
  contact: contactCollection,
};
