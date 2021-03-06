# helloworld-es6 
[![Coverage Status](https://coveralls.io/repos/github/ollelauribostrom/helloworld-es6/badge.svg?branch=master)](https://coveralls.io/github/ollelauribostrom/helloworld-es6?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/ollelauribostrom/helloworld-es6/badge.svg)](https://snyk.io/test/github/ollelauribostrom/helloworld-es6) [![npm version](https://badge.fury.io/js/helloworld-es6.svg)](https://www.npmjs.com/package/helloworld-es6)

This is a simple example module that returns a "Hello world" greeting in 6 different
languages. To be used as a example/boilerplate for quickly getting started with developing
a node package/cli using ES6 & babel.

> English, Spanish, French, Swedish, Chinese, Turkish

Installation
-------
Local: `npm install helloworld-es6 --save`   
Global (cli): `npm install helloworld-es6 -g` 


Example Usage
-----

##### As module:
```js
import helloWorld from 'helloworld-es6';
console.log(helloWorld()); // => "Hello world"
console.log(helloWorld('Swedish')); // => "Hej Världen"
console.log(helloWorld('french')); // => "Bonjour le monde"
console.log(helloWorld('Parseltongue')); // => "Sorry, I don´t know how to say "Hello World" in Parseltongue yet." 

```

##### As cli:
```sh
helloworld-es6
helloworld-es6 --language swedish
```


Use as boilerplate
------------------------------------------

```sh
# clone it
mkdir my-awsome-package
cd my-awsome-package
git clone git@github.com:ollelauribostrom/helloworld-es6.git .

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start babel file watch
npm start
```


#### Available commands
- `npm start`: Start babel file watch
- `npm run build`: Build to /dist folder
- `npm test`: Run tests
- `npm run coverage`: Run test coverage using nyc, outputs report to /test/coverage
- `npm run coveralls`: Run test coverage using nyc & send report to coveralls (must have specified repo_token in .coveralls.yml)
- `npm run lint`: Run eslint


License
-------
MIT
