import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            subtitle: z.string().optional(),
            pubdate: z.date(),
            cover: image().or(z.string()),
            coverAlt: z.string(),
            image: z
                .object({
                    src: z.string(),
                    alt: z.string(),
                })
                .optional(),
        }),
});

const mainPageCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = {
    blog: blogCollection,
    mainPages: mainPageCollection,
};
