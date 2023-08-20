import {defineConfig} from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/schemas/project-schema';
import { visionTool } from '@sanity/vision';
import aboutData from './sanity/schemas/about-schema';
import heroSchema from './sanity/schemas/hero-schema';
import experienceSchema from './sanity/schemas/experience-schema';
import viewCount from './sanity/schemas/view-count-schema';

const config = defineConfig({
    title: 'Personal-Portfolio-Sanity',
    projectId: 'h4sd5p60',
    dataset: 'production',
    apiVersion: '2023-04-10',
    basePath: '/admin',
    plugins: [deskTool(), visionTool(),],
    schema: { types: [project, aboutData, heroSchema, experienceSchema, viewCount] }
})

export default config;