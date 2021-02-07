# log
Notes of the version and other things


## Version 0.0.1 (2021-02-07)
`url` <https://www.npmjs.com/package/butiran/v/0.0.1>

### Try test file
```
$ node tests\vect3_tests.js
Vect3 { x: 3, y: 4, z: 0 }
a = (3, 4, 0)
b = (4, -3, 0)
a x b = (0, 0, -25)
a . b = 0
```

### Get git repository
```
$ git remote -v
origin  https://github.com/dudung/butiran-js (fetch)
origin  https://github.com/dudung/butiran-js (push)
```

### Create `package.json` file
```
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (butiran) butiran
version: (1.0.0) 0.0.1
description: Node package for simulation of grain-based system
entry point: (main.js) main.js
test command: node tests/vect3_tests.js
git repository: https://github.com/dudung/butiran-js
keywords: butiran, md, abm, js
author: Sparisoma Viridi
license: (ISC) MIT
About to write to L:\home\butiran-js\butiran\package.json:

{
  "name": "butiran",
  "version": "0.0.1",
  "description": "Node package for simulation of grain-based system",
  "main": "main.js",
  "scripts": {
    "test": "node tests/vect3_tests.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/dudung/butiran-js.git"
  },
  "keywords": [
    "butiran",
    "md",
    "abm",
    "js"
  ],
  "author": "Sparisoma Viridi",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/dudung/butiran-js/issues"
  },
  "homepage": "https://github.com/dudung/butiran-js#readme"
}


Is this ok? (yes) yes

L:\home\butiran-js\butiran>
```

### Login to npm
```
npm login
Username: dudung
Password:
Email: (this IS public) dudung@gmail.com
Logged in as dudung on https://registry.npmjs.org/.
```

### Publish module
```
$ npm publish --access public
+ butiran@0.0.1
```

### Test before install
```
node vect3_tests.js
internal/modules/cjs/loader.js:573
    throw err;
    ^

Error: Cannot find module 'butiran'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:571:15)
    at Function.Module._load (internal/modules/cjs/loader.js:497:25)
    at Module.require (internal/modules/cjs/loader.js:626:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at Object.<anonymous> (L:\home\butiran-js\tests\vect3_tests.js:26:12)
    at Module._compile (internal/modules/cjs/loader.js:678:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)
    at Module.load (internal/modules/cjs/loader.js:589:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:528:12)
    at Function.Module._load (internal/modules/cjs/loader.js:520:3)
```

### Install using npm
```
cd ..

$ cd tests

$ npm install butiran
npm WARN saveError ENOENT: no such file or directory, open 'tests\package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open 'tests\package.json'
npm WARN tests No description
npm WARN tests No repository field.
npm WARN tests No README data
npm WARN tests No license field.

+ butiran@0.0.1
added 1 package in 6.472s
```


### Test after install
```
node vect3_tests.js
Vect3 { x: 3, y: 4, z: 0 }
a = (3, 4, 0)
b = (4, -3, 0)
a x b = (0, 0, -25)
a . b = 0
```

### Update package
```
$ npm version patch
v0.0.2

$ npm publish
+ butiran@0.0.2
```

### Logout from npm
```
$ npm logout
```