/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is the base configuration that Maizzle will use when you run commands
| like `npm run build` or `npm run dev`. Additional config files will
| inherit these settings, and can override them when necessary.
|
*/

/** @type {import('@maizzle/framework').Config} */
export default {
  attributes: {
    add: {
      table: {
        border: 0,
        role: "presentation",
      },
      img: {
        border: 0,
      },
      a: {
        target: "_blank",
        rel: "noopener",
      },
    },
  },
  build: {
    content: ["src/emails/MARKETING/{environment}/{locale}/DESIGN_2/**/*.html"],
    static: {
      source: ["src/images/**/*.*"],
      destination: "images",
    },
  },
  components: {
    folders: ["src/components/DESIGN_1/ATOMS", "src/components/DESIGN_1/AUTOMATION/ADVICE", "src/components/DESIGN_1/AUTOMATION/COMMON", "src/components/DESIGN_1/AUTOMATION/LAYOUT", "src/components/DESIGN_2/ATOMS", "src/components/DESIGN_2/MARKETING/ADVICE", "src/components/DESIGN_2/MARKETING/LAYOUT"],
  },
};
