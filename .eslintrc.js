module.exports = {
  root: true,
  ignorePatterns: ['tailwind.config.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module',
    project: './tsconfig.json',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  },
  globals: {
    SharedArrayBuffer: 'readonly'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    'arrow-body-style': 'off',
    'no-console': 'off',
    'no-control-regex': 'off',
    'no-undef': 'error',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/named': 'off',
    eqeqeq: 'error'
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        configPath: ['./tsconfig.json']
      },
      vite: {
        configPath: './vite.config.ts'
      },
      postcss: {
        configPath: './postcss.config.js'
      },
      tailwindcss: {
        configPath: './tailwind.config.js'
      }
    }
  }
};
