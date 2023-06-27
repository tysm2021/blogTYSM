import type { TinaField } from "tinacms";
export function plantillaFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Título",
      required: true,
    },
    {
      type: "string",
      name: "summary",
      label: "Sumario",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Autor",
      required: true,
    },
    {
      type: "image",
      name: "cover",
      label: "Carátula",
    },
    {
      type: "string",
      name: "categories",
      label: "Categorías",
      options: [
        "CULTURA",
        "HISTORIA",
        "TURISMO",
        "GASTRONOMIA",
        "MEXICANISIMOS",
        "MUNDO",
      ],
      required: true,
    },
    {
      type: "string",
      name: "tags",
      label: "Etiquetas",
      required: true,
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "boolean",
      name: "show_author_profile",
      label: "Mostrar el perfil de autor",
    },
    {
      type: "string",
      name: "excerpt_separator",
      label: "excerpt_separator",
    },
    {
      type: "string",
      name: "mode",
      label: "mode",
    },
    {
      type: "object",
      name: "header",
      label: "header",
      fields: [
        {
          type: "string",
          name: "theme",
          label: "theme",
        },
      ],
    },
    {
      type: "object",
      name: "article_header",
      label: "Imagen del Encabezado",
      fields: [
        {
          type: "string",
          name: "type",
          label: "type",
        },
        {
          type: "object",
          name: "image",
          label: "Imagen banner",
          fields: [
            {
              type: "image",
              name: "src",
              label: "src",
            },
          ],
        },
      ],
    },
    {
      type: "boolean",
      name: "sharing",
      label: "sharing",
    },
    {
      type: "boolean",
      name: "comment",
      label: "comment",
    },
  ] as TinaField[];
}
