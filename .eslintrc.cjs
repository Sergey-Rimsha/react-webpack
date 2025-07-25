module.exports = {
	env: {
		jest: true,
		es2021: true,
		browser: true,
	},
	extends: [
		"airbnb",
		'airbnb-typescript',
		"airbnb/hooks",
		"plugin:prettier/recommended",
		"plugin:i18next/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: "./tsconfig.json",
	},
	plugins: ['prettier', "i18next"],
	// overrides: [
	// 	{
	// 		files: ['.js', '.ts', '.jsx', '.tsx', '**/*.spec.js', '**/*.test.ts', '**/*.test.tsx', '**/*.spec.tsx'],
	// 	},
	// ],
	rules: {
		"i18next/no-literal-string": ['warn', {markupOnly: true}],
		'max-len': [
			'error',
			{
				code: 120,
				ignoreComments: true
			},
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				pathGroupsExcludedImportTypes: ['react'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
				],
			},
		],
		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': 'off',
		'consistent-return': 'off',
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
		],
		'no-shadow': 'off',
		'no-debugger': 'error',
		'no-unused-vars': 'off',
		'no-magic-numbers': [
			'error',
			{
				ignore: [0, 1, -1],
			},
		],
		'no-use-before-define': 'off',
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: ['state', 'self'],
			},
		],
		'react/display-name': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.jsx', '.tsx'],
			},
		],
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'react/jsx-props-no-spreading': [
			0,
			{
				html: 'ignore',
			},
		],
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true,
			},
		],

	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
			typescript: {
				alwaysTryTypes: true,
				project: ['**/tsconfig.json']
			},
		},
	},
};
