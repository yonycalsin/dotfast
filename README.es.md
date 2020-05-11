# dotfast

`Dotfast` es una función que te permite ingresar a un objeto, mediante puntos, y muy fácil, y es compatible con **typescript**

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

## 🍉 Instalacion

> Primero tendremos que instalar, para poder utilizar este maravilloso paquete.

```bash
# Usando npm
npm install --save dotfast

# Usando yarn
npm add --save dotfast
```

## 🌎 Uso

Primeramente importamos la función, de la siguiente manera, Puedes llamar a la función como `d` o también como `dotfast`

```ts
// Para Typescript
import dotfast from 'dotfast';
// o
import { d } from 'dotfast';

// Para Javascript
const dotfast = require('dotfast');
// o
const { d } = require('dotfast');
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

d(data, 'app.port');
//=> 8080

d(data, 'app.url');
//=> undefined

// Opción por defecto
d(data, 'app.url', 'http://website.com');
//=> http://website.com
```

#### Retorno de array

`dotfast` también permite retornar varias selecciones, dentro de un array

```ts
d(data, ['app.port', 'app.db.port', 'app.name']);
//=> [8080, 3306, "Application"]
```

-  Probemos con ES6+ o typescript

```ts
const [appPort, dbPort, appName] = d(data, [
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
d(data, {
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
const { appPort, dbPort, appName } = d(data, {
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

## ⭐ Apoyo a

`dotfast` es un proyecto de código abierto con licencia del [MIT](LICENSE). Puede crecer gracias a los patrocinadores y al apoyo de los increíbles patrocinadores. Si quieres unirte a ellos, [contacta conmigo aquí](mailto:helloyonicb@gmail.com).

## 🎩 Manténgase en contacto

-  Author [Yoni Calsin](https://github.com/yoicalsin)
-  Twitter [Yoni Calsin](https://twitter.com/yoicalsin)

## 🚀 Colaboradores

¡Gracias a las maravillosas personas que colaboran conmigo!

## 📜 Licencia

`dotfast` under [License MIT.](LICENSE)
