module.exports = {
    extends: [
        'stylelint-config-cmyr',
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-order',
    ],
    customSyntax: 'postcss-html',
    rules: {
        'unit-no-unknown': null,
        'declaration-block-no-redundant-longhand-properties': null
    },
}