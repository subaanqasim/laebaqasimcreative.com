import { defineCollection, reference, z } from "astro:content";

const portfolioCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      tags: z.array(z.string()).optional(),
      // In frontmatter, dates written **without** quotes around them are interpreted as Date objects e.g. 2023-07-29
      publishDate: z.date(),
      relatedPhotos: z.array(reference("portfolio")).optional(),
    }),
});

export const collections = {
  portfolio: portfolioCollection,
};
