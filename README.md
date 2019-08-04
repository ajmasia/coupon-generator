# Coupon generator
A web app that generates coupons for example for discounts in a store, through a configurable service made with [Typescript](https://www.typescriptlang.org)

## Install
To test the app, please follow the next steps:

Clone this repo:
  
```git clone https://github.com/ajmasia/couponGenerator.git```

```git clone git@github.com:ajmasia/couponGenerator.git```

### Run app with docker:

Install app dependences:

```npm run docker:install```

Run app:

```docker-compose up -d```

Test the app in your browser `http://localhost:3000`.

You can see the results both in the browser window and the browserconsole.

### Run app locally

Install app dependences:

```npm i```

Run app:

```npm start```

Build app

```npm run build```


## Changelog

### Version 0.1.0

This first versión generate 5 secuentials coupons without using configuration file.

You can set the initial value in the `app.ts` file:

```javascript
Coupons.generate(<initialValue>)
```

----
[License](./LICENSE)