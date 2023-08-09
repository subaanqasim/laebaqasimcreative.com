import { defineCollection, reference, z } from "astro:content";

const portfolioCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      tags: z.array(z.string()).nullable(),
      // In frontmatter, dates written **without** quotes around them are interpreted as Date objects e.g. 2023-07-29
      publishDate: z.date(),
      relatedPhotos: z.array(reference("portfolio")).nullable(),
    }),
});

const termsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    lastUpdated: z.date(),
  }),
});

export const collections = {
  portfolio: portfolioCollection,
  terms: termsCollection,
};
