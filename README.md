# dotfast

`Dotfast` is a function that allows you to enter an object, by means of points, and very easily, and is compatible with **typescript**

<a href="https://github.com/yonicalsin/dotfast"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/dotfast" target="_blank">
<img src="https://img.shields.io/npm/v/dotfast" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/dotfast" target="_blank">
<img src="https://img.shields.io/npm/l/dotfast" alt="Package License" /></a>
<a href="https://www.npmjs.com/dotfast" target="_blank">
<img src="https://img.shields.io/npm/dm/dotfast" alt="NPM Downloads" /></a>
<a href="https://github.com/yonicalsin/dotfast" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yonicalsin/dotfast"><img src="https://img.shields.io/badge/Github%20Page-dotfast-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yonicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yonicalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yonicalsin.svg?style=social&label=Follow"></a>

## 🍉 Installation

> First we will have to install, in order to use this wonderful package.

```bash
# Using npm
npm install --save dotfast

# Using yarn
npm add --save dotfast
```

## 🌎 Usage

First we import the function, as follows, You can call the function as `d` or also as `dotfast`

```ts
// For Typescript
import dotfast from 'dotfast';
// Or
import { d } from 'dotfast';

// For Javascript
const dotfast = require('dotfast');
// or
const { d } = require('dotfast');
```

-  First we create an object with data, for this example !

```ts
const data = {
   app: {
      name: 'Dotfast',
      port: 8080,
      db: {
         dialect: 'mysql',
         localhost: 'localhost',
         username: 'root',
         password: '',
         port: 3306,
         tables: [
            {
               name: 'first_table',
            },
            {
               name: 'second_table',
            },
         ],
      },
   },
};

d(data, 'app.db.tables[0].name');
// => first_table

d(data, 'app.port');
//=> 8080

d(data, 'app.url');
//=> undefined

// Default option
d(data, 'app.url', 'http://website.com');
//=> http://website.com
```

#### Array return

`dotfast` also allows to return several selections, within an array

```ts
d(data, ['app.port', 'app.db.port', 'app.name', 'app.db.tables[0]']);
//=> [8080, 3306, "Application", {name: "first_table"}]
```

-  Let's try ES6+ or typescript

```ts
const [appPort, dbPort, appName, firstTable] = d(data, [
   'app.port',
   'app.db.port',
   'app.name',
   'app.db.tables[0]',
]);
/**
 * appPort => 8080
 * dbPort => 3306
 * appName => "Application"
 * firstTable => {name: "first_table"}
 * */
```

### Object return

`dotfast` also returns as an object !

```ts
d(data, {
   appPort: 'app.port',
   dbPort: "app.db.port",
   appName: 'app.name',
   secondTable: 'app.db.tables[1]',
});
/**
 * {
 *    appPort: 8080,
 *    dbPort: 3306,
 *    appName: "Application",
 *    secondTable: {name: "secondTable"}
 * }
 * *
```

-  Let's try ES6+ or typescript

```ts
const { appPort, dbPort, appName } = d(data, {
   appPort: 'app.port',
   dbPort: 'app.db.port',
   appName: 'app.name',
   secondTable: 'app.db.tables[1]',
});

/**
 * appPort => 8080
 * dbPort => 3306
 * appName => "Application",
 * secondTable => {name: "secondTable"}
 * */
```

## ⭐ Support for

`dotfast` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Github [@yonicalsin](https://github.com/yonicalsin)
-  Twitter [@yonicalsin](https://twitter.com/yonicalsin)
-  Instagram [@yoni_calsin](https://instagram.com/yoni_calsin)
-  Medium [@yonicalsin](https://medium.com/yonicalsin)

## 🚀 Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`dotfast` under [License MIT.](LICENSE)
