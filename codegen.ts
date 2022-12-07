import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: "operations.graphql",
  generates: {
    "src/generated/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "src/generated/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
