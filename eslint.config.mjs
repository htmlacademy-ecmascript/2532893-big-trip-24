import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/webpack.config.js"],
}, ...compat.extends("htmlacademy/vanilla"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            noUiSlider: "readonly",
            Pristine: "readonly",
        },

        ecmaVersion: 2022,
        sourceType: "module",
    },
}];