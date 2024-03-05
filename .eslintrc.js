module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
  ],
  // // 'overrides': [
  // //     {
  // //         'env': {
  // //             'node': true
  // //         },
  // //         'files': [
  // //             '.eslintrc.{js,cjs}'
  // //         ],
  // //         'parserOptions': {
  // //             'sourceType': 'script'
  // //         }
  // //     }
  // // ],
  parserOptions: {
    project: './tsconfig.json',
  },
  'plugins': [
      '@typescript-eslint',
  ]
};
