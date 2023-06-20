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
      mediaRoot: "/images",
      publicFolder: "",
    },
  },
  schema: {
     collections: [
      {
        label: 'Blog Posts',
        name: 'post',
        path: '/_posts',
         ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.date ||
                'no-topic'}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
            },
          },
        },
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
         },{
        name: 'draft',
        label: 'Draft',
        type: 'boolean',
      },{
          label: "Date",
          name: "date",
          type: "string",
          ui: {
            component: 'date',
            dateFormat: 'YYYY-MM-DD',
            parse: (value) => value && value.format('YYYY-MM-DD'),
        },},
        {
            type: 'string',
            label: 'Autor',
            name: 'author',
          },{
            type: 'string',
            label: 'Sumario',
            name: 'summary',

          },{
            type: 'image',
            label: 'Cover',
            name: 'cover',
          },{
            type: 'string',
            label: 'Categories',
            name: 'categories',
            options: ['CULTURA', 'HISTORIA', 'TURISMO', 'GASTRONOMIA', 'MEXICANISIMOS', 'MUNDO'],
          },
          {
            label: 'Post Body',
            type: 'rich-text',
            name: 'body',
            isBody: true,
          },{
            type: 'string',
            label: 'Mode',
            name: 'mode',
          },{
            type: 'string',
            label: 'Layout',
            name: 'layout',
          },{
            label: "Header",
            name: "header",
            type: "object",
              fields: [{
               label: "theme",
               name: "theme",
               type: "string"
                    },],
              },{
            label: "Article Header",
            name: "article_header",
            type: "object",
              fields: [{
               label: "type",
               name: "type",
               type: "string",
               },{
               label: "image",
               name: "image",
               type: "object",
                fields:[{
            type: 'image',
            label: 'src',
            name: 'src',
          },],
               },],
              },
        ],
      },
    ],
  },
});
