module.exports = {
	root: true,
	parser: 'babel-eslint',
	ext: [ '.ts', '.js', '.jsx', '.tsx' ],
	ecmaVersion: 2017,
	globals: {
		document: true,
		window: true,
		spy: true,
		mocha: true,
		stub: true,
		beforeEach: true,
		useFakeTimers: true,
		useFakeXMLHttpRequest: true,
		useFakeServer: true,
		suite: true,
		benchmark: true
	},
	ecmaFeatures: {
		jsx: true,
		modules: true,
		es6: true
	},
	env: {
		browser: true,
		es6: true,
		mocha: true,
		node: true
	},
	rules: {
		'comma-dangle': [ 2, 'never' ],
		'no-cond-assign': [ 2, 'except-parens' ],
		'no-console': 0,
		'no-constant-condition': 2,
		'no-debugger': 1,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty-character-class': 2,
		'no-ex-assign': 2,
		'no-extra-semi': 2,
		'no-func-assign': 2,
		'no-inner-declarations': [ 2, 'both' ],
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-negated-in-lhs': 2,
		'no-obj-calls': 2,
		'no-regex-spaces': 2,
		'no-sparse-arrays': 2,
		'no-unreachable': 2,
		'use-isnan': 2,
		'valid-typeof': 2,
		'no-unexpected-multiline': 2,
		'accessor-pairs': [ 2, {
			setWithoutGet: true
		}],
		curly: [ 2, 'all' ],
		eqeqeq: [ 2, 'allow-null' ],
		'no-alert': 1,
		'no-div-regex': 2,
		'no-eq-null': 2,
		'no-eval': 2,
		'no-fallthrough': 2,
		'no-floating-decimal': 2,
		'no-implied-eval': 2,
		'no-invalid-this': 2,
		'no-loop-func': 2,
		'no-multi-spaces': 2,
		'no-multi-str': 2,
		'no-native-reassign': 2,
		'no-new-func': 2,
		'no-new-wrappers': 2,
		'no-new': 2,
		'no-octal': 2,
		'no-redeclare': [ 2, {
			builtinGlobals: true
		}],
		'no-return-assign': [ 2, 'except-parens' ],
		'no-with': 2,
		radix: 2,
		'vars-on-top': 2,
		'wrap-iife': [ 2, 'inside' ],
		yoda: 2,
		strict: [ 2, 'never' ],
		'no-mixed-operators': 0,
		'no-delete-var': 2,
		'no-shadow-restricted-names': 2,
		'no-unused-vars': 0,
		'no-use-before-define': [ 2, 'nofunc' ],
		'array-bracket-spacing': [ 2, 'always', {
			singleValue: false,
			objectsInArrays: false,
			arraysInArrays: false
		}],
		indent: [ 2, 'tab', {
			SwitchCase: 1
		}],
		'key-spacing': [ 2, {
			afterColon: true
		}],
		'lines-around-comment': [ 2, {
			beforeBlockComment: true,
			allowBlockStart: true,
			allowBlockEnd: true,
			allowObjectStart: true,
			allowObjectEnd: true
		}],
		'linebreak-style': [ 0, 'unix' ],
		'new-cap': [ 2, {
			newIsCap: true,
			capIsNew: true,
			capIsNewExceptions: ['Component']
		}],
		'new-parens': 2,
		'newline-after-var': [ 0, 'always' ],
		'no-array-constructor': 2,
		'no-mixed-spaces-and-tabs': 2,
		'no-multiple-empty-lines': [ 2, {
			max: 2
		}],
		'no-new-object': 2,
		'no-spaced-func': 2,
		'no-trailing-spaces': 2,
		'object-curly-spacing': [ 2, 'always', {
			arraysInObjects: true,
			objectsInObjects: true
		}],
		'padded-blocks': [ 0, 'never' ],
		'quote-props': [ 2, 'as-needed' ],
		quotes: [ 2, 'single', 'avoid-escape' ],
		'semi-spacing': [ 2, {
			after: true
		}],
		semi: [ 2, 'always' ],
		'keyword-spacing': 2,
		'space-before-function-paren': [ 2, {
			anonymous: 'always',
			named: 'never'
		}],
		'space-in-parens': [ 2, 'never' ],
		'space-infix-ops': 2,
		'space-unary-ops': [ 2, {
			words: true
		}],
		'spaced-comment': [ 2, 'always', {
			exceptions: ['*']
		}],
		'wrap-regex': 2,
		'constructor-super': 2,
		'no-class-assign': 2,
		'no-const-assign': 2,
		'no-this-before-super': 2,
		'no-var': 2,
		'prefer-spread': 2,
		'id-match': [ 'error', '^[a-zA-Z]+([A-Za-z]+)*$' ]
	}
};
