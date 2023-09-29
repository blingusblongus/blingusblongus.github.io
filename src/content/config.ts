import { defineCollection } from "astro:content";

const blogCollection = defineCollection({});

const mainPageCollection = defineCollection({});

export const collections = {
    blog: blogCollection,
    mainPages: mainPageCollection,
};
