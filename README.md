# dotfast

`Dotfast` es una funcion que te permite ingresar a un objeto, mediante puntos, y muy facil, y es compatible con typescript

<a href="https://github.com/yoicalsin/dotfast"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/dotfast" target="_blank">
<img src="https://img.shields.io/npm/v/dotfast" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/dotfast" target="_blank">
<img src="https://img.shields.io/npm/l/dotfast" alt="Package License" /></a>
<a href="https://www.npmjs.com/dotfast" target="_blank">
<img src="https://img.shields.io/npm/dm/dotfast" alt="NPM Downloads" /></a>
<a href="https://github.com/yoicalsin/dotfast" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yoicalsin/dotfast"><img src="https://img.shields.io/badge/Github%20Page-dotfast-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yoicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yoicalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yoicalsin.svg?style=social&label=Follow"></a>

## 🍉 Installation

> Primero tendremos que instalar, para poder utilizar este maravilloso paquete.

```bash
# Using npm
npm install --save dotfast

# Using yarn
npm add --save dotfast
```

## 🌎 Usage

Primeramente importaremos la funcion, de la siguiente manera !
Puedes llamar a la funcion como `dtf` o tambien como `dotfast`

```ts
// For Typescript
import dtf from 'dotfast';

// Javascript
const dtf = require('dotfast');
```

-  Primero creamos un objeto con datos, para este ejemplo !

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
         tables: [],
      },
   },
};

dtf(data, 'app.port');
//=> 8080

dtf(data, 'app.url');
//=> undefined

// Default option
dtf(data, 'app.url', 'http://website.com');
//=> http://website.com
```

#### Retorno de array

`dotfast` tambien permite retornar varias selecciones, dentro de un array

```ts
dtf(data, ['app.port', 'app.db.port', 'app.name']);
//=> [8080, 3306, "Application"]
```

-  Probemos con ES6+ o typescript

```ts
const [appPort, dbPort, appName] = dtf(data, [
   'app.port',
   'app.db.port',
   'app.name',
]);
/**
 * appPort => 8080
 * dbPort => 3306
 * appName => "Application"
 * */
```

### Retorno de objeto

`dotfast` tambien retorna como un objeto !

```ts
dtf(data, {
   appPort: 'app.port',
   dbPort: "app.db.port",
   appName: 'app.name',
});
/**
 * {
 *    appPort: 8080,
 *    dbPort: 3306,
 *    appName: "Application"
 * }
 * *
```

-  Probemos con ES6+ o typescript

```ts
const { appPort, dbPort, appName } = dtf(data, {
   appPort: 'app.port',
   dbPort: 'app.db.port',
   appName: 'app.name',
});

/**
 * appPort => 8080
 * dbPort => 3306
 * appName => "Application"
 * */
```

## ⭐ Support for

`dotfast` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Author [Yoni Calsin](https://github.com/yoicalsin)
-  Twitter [Yoni Calsin](https://twitter.com/yoicalsin)

## 🚀 Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`dotfast` under [License MIT.](LICENSE)
