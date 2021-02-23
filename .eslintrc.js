module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [  
    "react",
    "import"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true,
    "jest": true
  },
 "rules": {
    // override of airbnb rules
    "no-debugger": 0,
    "import/prefer-default-export": 0,
    // disallow use of multiple spaces
    "no-multi-spaces": ["error", { exceptions: { "ImportDeclaration": true } }], // added exception for import declaration

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    "react/jsx-curly-spacing": ["error", {"when": "always", "allowMultiline": false}], // changed form "never" to "always"

    // enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    "template-curly-spacing": ["error", "always"],

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md

    'no-underscore-dangle': [1, { "allowAfterThis": true }],

    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/no-unescaped-entities": 0,

    // require trailing commas in multiline object literals
    "comma-dangle": ["error", {
      arrays: "never", // changed from "always-multiline" to "never"
      objects: "never", // changed from "always-multiline" to "never"
      imports: "never", // changed from "always-multiline" to "never"
      exports: "never", // changed from "always-multiline" to "never"
      functions: "never" // changed from "always-multiline" to "never"
    }],

    // require parens in arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    "arrow-parens": ["error", "always"],

    // disable camel case names because api using underscore style
    "camelcase": [0],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    "max-len": [1, 100, 2, { // changed "error" to "warning"
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // enforce line breaks between braces
    // http://eslint.org/docs/rules/object-curly-newline
    "object-curly-newline": 0, // disable

    // ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/0745af376cdc8686d85a361ce36952b1fb1ccf6e/docs/rules/anchor-is-valid.md
    "jsx-a11y/anchor-is-valid": [1, {
      components: [], // was components: ['Link']
      specialLink: [],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],

    "jsx-a11y/no-static-element-interactions": 0,

    // require return statements to either always or never specify values
    "consistent-return": [0], // disable consistent-return according to incorrect behavior in arrow function

    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    "arrow-body-style": 0,

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 0,

    // This rule enforces consistent line breaks inside parentheses of function parameters or arguments.
    'function-paren-newline': 0,

    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyUp',
        ],
      },
    ],
    'import/no-webpack-loader-syntax': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    "react/static-property-placement": 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    "@babel/plugin-syntax-dynamic-import": 0,
    // 'import/extensions': 0,

    "template-curly-spacing": "off",
    "indent": [
      "warn",
      2,
      {
        "ignoredNodes": ["TemplateLiteral"],
        "SwitchCase": 1
      }
    ],
    'jsx-a11y/label-has-associated-control': [2, {
      "depth": 3,
    }]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".css", ".scss"]
      }
    }
  }
}
