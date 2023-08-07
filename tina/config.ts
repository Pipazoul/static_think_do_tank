import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "projets",
        label: "Projets",
        path: "content/projets",
        
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "textBtn",
            label: "Texte sur le bouton",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "section_1_title",
            label: "Titre de la section 1",
            required: true,
          },
          {
            type: "string",
            name: "section_1_text",
            label: "Texte de la section 1",
            required: true,
          },
          {
            type: "string",
            name: "section_2_title",
            label: "Titre de la section 2",
            required: true,
          },
          {
            type: "string",
            name: "section_2_text",
            label: "Texte de la section 2",
            required: true,
          },
          {
            type: "string",
            name: "section_3_title",
            label: "Titre de la section 3",
            required: true,
          },
          {
            type: "string",
            name: "section_3_text",
            label: "Texte de la section 3",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
