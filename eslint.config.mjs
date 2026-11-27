import js from "@eslint/js";
import globals from "globals";
import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Dossiers générés (build Next.js) et worktrees de travail : hors du code source
  { ignores: ["dist", ".next/**", "out/**", ".claude/**", "next-env.d.ts"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Exports réservés de l'App Router Next.js (metadata, viewport, config de segment) :
      // légitimes à côté du composant de page ou de layout.
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
          allowExportNames: [
            "metadata",
            "generateMetadata",
            "viewport",
            "generateViewport",
            "revalidate",
            "dynamic",
            "generateStaticParams",
          ],
        },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
    },
  },
  // Règles Next.js (recommended + Core Web Vitals) du plugin déjà installé avec eslint-config-next
  nextPlugin.flatConfig.coreWebVitals,
);
