<p align="center">
  <a href="http://github.com/kamranahmedse/developer-roadmap">
    <img src="https://cdn3.iconfinder.com/data/icons/seo-internet-marketing-flat-icons/250/web-code.png" alt="Developer Roadmap" width="96" height="96">
  </a>
  <h2 align="center">Coupons generator</h2>
  <p align="center">Generating coupon codes easily</p>
</p>

# Table of content

- [Table of content](#table-of-content)
  - [Install](#install)
    - [Clone this repo](#clone-this-repo)
    - [Run app locally](#run-app-locally)
    - [Run app with docker](#run-app-with-docker)
  - [Documentaion](#documentaion)
    - [Secuential](#secuential)
    - [Alphanumeric](#alphanumeric)
      - [Patterns](#patterns)
    - [Add new algorithms to service](#add-new-algorithms-to-service)
  - [Technologies](#technologies)
  - [Changelog](#changelog)
    - [Version 0.1.3](#version-013)
    - [Version 0.1.2](#version-012)
    - [Verion 0.1.1](#verion-011)
    - [Version 0.1.0](#version-010)

---

## Install

To test the app, please follow the next steps:

### Clone this repo

`git clone https://github.com/ajmasia/couponGenerator.git`

`git clone git@github.com:ajmasia/couponGenerator.git`

### Run app locally

Install app dependences:

`npm i`

Run app:

`npm start`

Build app

`npm run build`

### Run app with docker

Install app dependences:

`npm run docker:install`

Run app without logs

`docker-compose up -d`

Run app with logs

`docker-compose up`

Test the app in your browser `http://localhost:3000`.

You can see the results both in the browser window and the browserconsole.

## Documentaion

You can use two different types of algorithms to generate coupons codes, `secuentila` and `alphanumeric`. To do it you just have to configure the service through the `config.ts` file. The algorithm type is selected in the algorithm property from the configuration file.

```js
const config: IConfig = {
  algorithm: 'alphanumeric',
}
```

### Secuential

Generate numerical coupons sequentially. You can optionally configure the following parameters: `amount`, `digits` and `startWith`:

```js
const config: IConfig = {
  algorithm: 'secuential',
  config: {
    amount: 12,
    digits: 8,
    startWith: 345,
  }
}
```

By default, undefined parameters have the following values:

```js
const config: IConfig = {
  algorithm: 'secuential',
  config: {
    amount: 5,
    digits: 5,
    startWith: 1,
  }
}
```

### Alphanumeric

Generate alphanumeric coupons. You can optionally configure the following parameters: `amount`, `digits` and `pattern`:

```js
const config: IConfig = {
  algorithm: 'alphanumeric',
  config: {
    amount: 5,
    digits: 8,
    pattern: '#A!',
  }
}
```

By default, undefined parameters have the following values:

```js
const config: IConfig = {
  algorithm: 'secuential',
  config: {
    amount: 5,
    digits: 5,
    startWith: '#A',
  }
}
```

#### Patterns

- '#' Use numerics values
- 'A' Use capital letters
- 'a' Used lowercase letters
- '!' Use special chars like !@#\$ ...

You can combine these patterns. For example `#a` will generate codes using numbers and lowercase letters.

### Add new algorithms to service

All algorithms are stored in `Algortuhms` folder. To add new one, yo need to a new file with the new algorithm name implemente the new class, following the same pattern as the existing ones:

```js
class Secuential2 implements IAlgorithm {
  public getCodes(config: any): string[] {
    const { amount = 5, digits = 5, startWith = 1 } = config
    const maxNumber = getHighestNumOf(digits)

    if (startWith > maxNumber - amount + 1) {
      return ['Error: Initial value it is higher than allowed']
    }

    const result: string[] = Array.from(Array(amount), (x, index) => {
      const code: number = index + startWith

      return padNumber(code.toString(), digits)
    })

    return result
  }
}

export default Secuential2
```

After create the new file you need add it to the algorithms index file:

```js
export { default as secuential } from './Secuential'
export { default as alphanumeric } from './Alphanumeric'
export { default as secuential2 } from './Alphanumeric'
```

From now on it can be used through the configuration file, passing all the configuration parameters through the config property:

```js
const config: IConfig = {
  algorithm: 'secuential2',
  config: {
    amount: 5,
    digits: 5,
    startWith: '#A',
  }
}
```

## Technologies

This project use the next tecnologies trying to use [SOLID](https://en.wikipedia.org/wiki/SOLID) principles:

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) to generate the result page
- [Typescript](https://www.typescriptlang.org/) like leanguage base.
- [Webpack](https://webpack.js.org/) to build the app.
- [Docker](https://www.docker.com/) with [Node](https://nodejs.org/en/) 10 like container image.
- An some develop tools like [tslint](https://palantir.github.io/tslint/) and [babel](https://babeljs.io/)

## Changelog

### Version 0.1.3

- Implement strategy pattern

### Version 0.1.2

- Refactor code and fix some type errors. Now we can custom the file config.
- Update documentation

### Verion 0.1.1

- This version includes the posibility to use two different algoritms defined on the conf file. Now you can select `secuential` or `alphanumeric` algorithms:

  ```js
  export default {
    algorithm: 'alphanumeric',
    amount: 5,
    digits: 5,
    initialValue: 1,
    pattern: '#A',
  }
  ```

- Update documentation

### Version 0.1.0

- This first versión generate secuentials coupons using a simple configuration file. It is necessary to configure the service by entering the neneeded values in `services/couponsGenerator/config.ts`:

  ```js
  export default {
    algorithm: 'secuential',
    amount: 5,
    digits: 5,
    initialValue: 1,
  }
  ```

  All this values al required.

---

[License](./LICENSE.md)
