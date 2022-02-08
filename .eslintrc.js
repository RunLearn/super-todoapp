module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        // Turns off all rules that are unnecessary
        // or might conflict with Prettier(eslint-config-prettier).
        "prettier/@typescript-eslint",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true             // To parse JSX
        },
        "ecmaVersion": "latest",    // 6, 2018, ...
        "sourceType": "module"      // if we use module system
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        /*
         * "off" or 0: No rule
         * "warn" or 1: Warning rule
         * "error" or 2: Error rule
        */
        // 세미콜론은 사용하지 않으며 사용할 시 경고를 띄움.
        "semi": ["warn", "never"]
    }
}