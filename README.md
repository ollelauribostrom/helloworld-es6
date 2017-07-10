# helloworld-es6

This is a simple example module that returns a "Hello world" greeting in 5 different 
languages. To be used as a boilerplate for quickly getting started with developing a 
node package/cli using ES6 & babel.


Installation
-------
Local: `npm install helloworld-es6 --save`
Global (cli): `npm install helloworld-es6 -g` 


Example Usage
-----

```js
import helloWorld from 'helloworld-es6';
console.log(helloWorld()); // => "Hello world"
console.log(helloWorld('Swedish')); // => "Hej Världen"
console.log(helloWorld('french')); // => "Bonjour le monde"

```

```sh
helloworld-es6 
helloworld-es6 --language swedish
```


Use as boilerplate
------------------------------------------

```sh
# clone it
git clone git@github.com:ollelauribostrom/helloworld-es6.git
cd helloworld-es6

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install
```


#### Available commands
- `npm run dev`: Start development live-reload server
- `npm run build`: Build project to /dist folder
- `npm start`: Build and run project from /dist folder as in production
- `npm test`: Run tests
- `npm run coverage`: Run test coverage using nyc, outputs report to /test/coverage
- `npm run lint`: Run eslint


License
-------
MIT