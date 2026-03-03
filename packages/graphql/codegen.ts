import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../../apps/web/**/*.graphql",
  documents: "../../apps/web/**/*.graphql",
  generates: {
    "generated/index.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        enumsAsType: true,
        skipTypename: false,
      },
    },
  },
};

export default config;
