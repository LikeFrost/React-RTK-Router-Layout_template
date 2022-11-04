module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'max-line-length': 200,
    indentation: null,
    'string-quotes': null,
    'rule-empty-line-before': null,
    'selector-combinator-space-before': null,
  },
  overrides: [
    {
      files: ['**/*.less'],
      //customSyntax: 'postcss-less',
    },
  ],
};
