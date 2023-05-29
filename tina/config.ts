import { defineConfig } from "tinacms";
import { plantillaFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "6c4c9227-0747-486b-9614-1bad7aa054ce", // Get this from tina.io
  token: "fab29cf1a6a082477457f5490a3b58a8933c2cfd", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
     collections: [
      {
        label: 'Blog Posts',
        name: 'post',
        path: 'blogTYSM/_posts',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'string',
            label: 'Post Body',
            name: 'body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
