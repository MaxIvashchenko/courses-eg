module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'prettier --write --config ./.prettierrc',
    'eslint --fix'
  ],
  '*.{html,css,scss}': ['prettier --write --config ./.prettierrc']
};
