module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
  ],
  overrides: [
  ],
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'react-perf',
    'simple-import-sort',
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {ignoreRestSiblings: true}],
    '@typescript-eslint/brace-style': [
      'error',
    ],
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        imports: 'always-multiline',
        objects: 'always-multiline',
        enums: 'always-multiline',
        arrays: 'always-multiline',
        functions: 'never',
        generics: 'ignore',
      },
    ],
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': [
      "error",
      "type",
    ],
    '@typescript-eslint/consistent-indexed-object-style': [
      'error',
      'record',
    ],
    '@typescript-eslint/default-param-last': [
      'error',
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/keyword-spacing': 'error',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'array-element-newline': [
      'error',
      'consistent',
    ],
    'arrow-body-style': 'error',
    'arrow-parens': [
      'off',
      'always',
    ],
    'arrow-spacing': 'error',
    'brace-style': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'computed-property-spacing': [
      'error',
      'never',
    ],
    'consistent-return': 'off',
    'constructor-super': 'error',
    'default-case-last': 'error',
    'default-param-last': 'off',
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: [
      'error',
      'smart',
    ],
    'function-call-argument-newline': [
      'error',
      'consistent',
    ],
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'id-blacklist': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-unresolved': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        ObjectExpression: 'first',
        FunctionDeclaration: {
          parameters: 'first',
        },
        FunctionExpression: {
          parameters: 'first',
        },
      },
    ],
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'key-spacing': 'error',
    'keyword-spacing': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': [
      'warn',
      2,
    ],
    'max-depth': 'error',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'max-params': [
      'error',
      5,
    ],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4,
      },
    ],
    'no-await-in-loop': 'error',
    'no-cond-assign': 'error',
    'no-console': ['warn', {allow: ['warn', 'error', 'info', 'table']}],
    'no-constructor-return': 'warn',
    'no-debugger': 'warn',
    'no-dupe-class-members': 'off',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-empty-function': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-global-assign': 'error',
    'no-irregular-whitespace': 'error',
    'no-loop-func': 'off',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'off',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-curly-spacing': 'off',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never',
    ],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '&&': 'ignore',
          '||': 'ignore',
          '-': 'before',
          '+': 'before',
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: [
          'case',
          'default',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: [
          'const',
          'let',
          'var',
        ],
      },
    ],
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    quotes: 'off',
    radix: 'error',
    'react-perf/jsx-no-new-object-as-prop': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-boolean-value': [
      'error',
      'never',
    ],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
      },
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never',
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline',
    ],
    'react/jsx-fragments': [
      'error',
      'syntax',
    ],
    'react/jsx-key': 'error',
    'react/jsx-no-bind': 'off',
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'allow',
        closingSlash: 'allow',
      },
    ],
    'react/jsx-wrap-multilines': 'error',
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'react/state-in-constructor': [
      'error',
      'never',
    ],
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'react-perf/jsx-no-new-array-as-prop': 'off',
    'require-atomic-updates': 'warn',
    'require-await': 'off',
    semi: 'off',
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'simple-import-sort/imports': ['warn', {
      groups: [
        [
          '^\\u0000',
        ],
        [
          '^react',
          '^mobx',
          '^@mui',
          '^@\\w',
          '^@?\\w',
          '^',
          '^\\.',
        ],
        [
          '^.+\\./styles.tsx$',
        ],
      ],
    }],
    'simple-import-sort/exports': 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': [
      'error',
      'never',
    ],
    'use-isnan': 'error',
  },
};
