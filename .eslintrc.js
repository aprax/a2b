module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'google',
	  'eslint:recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
    'no-var': 0,
    'require-jsdoc': 0,
    'eol-last': 0,
    'no-tabs': 0,
    'max-len': 0,
    'indent': ['error', 'tab'],
  },
};
