import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**"],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "react/no-unescaped-entities": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);
