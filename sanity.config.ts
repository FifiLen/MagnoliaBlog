import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from  './sanity/schemas';

const config = defineConfig({
    projectId: 'lm86cmiu',
    dataset: 'blog',
    title: 'Magnolia Blog',
    apiVersion: "2023-10-04",
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;