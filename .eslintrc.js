module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'prettier',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  overrides: [
    {
      files: ['src/*.{js,jsx}', 'src/**/*.{js,jsx,}'],
    },
  ],
  rules: {
    'no-use-before-define': 'off',
    complexity: ['error', { max: 7 }],
    camelcase: ['warn', { ignoreDestructuring: true, ignoreImports: true, properties: 'never' }],
    'max-params': ['error', 7],
    'no-cond-assign': 'error',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}

