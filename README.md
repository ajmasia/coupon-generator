# Coupons generator
A web app that generates coupons for example for discounts in a store, through a configurable service made with [Typescript](https://www.typescriptlang.org)

## Install
To test the app, please follow the next steps:

### Clone this repo:
  
```git clone https://github.com/ajmasia/couponGenerator.git```

```git clone git@github.com:ajmasia/couponGenerator.git```

### Run app locally

Install app dependences:

```npm i```

Run app:

```npm start```

Build app

```npm run build```

### Run app with docker:

Install app dependences:

```npm run docker:install```

Run app:

```docker-compose up -d```

Test the app in your browser `http://localhost:3000`.

You can see the results both in the browser window and the browserconsole.



## Changelog

### Version 0.1.0

This first versión generate secuentials coupons using a simple configuration file.

It is necessary to configure the service by entering the neneeded values in `services/couponsGenerator/config.ts`:

```js
export default {
  algorithm: 'secuential',
  amount: 5,
  digits: 5,
  initialValue: 1,
}
```

All this values al required.

----
[License](./LICENSE)