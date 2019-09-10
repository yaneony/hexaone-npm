# HEXA.ONE

## About
A simple NodeJS module to interact with [HEXA.ONE](https://hexa.one) endpoints.

## Installation
To install `hexa.one`, simply run the following command:
```
$ npm i hexa.one
```

## Usage
In order to use all available endpoints by [HEXA.ONE](https://hexa.one) you will need an API_KEY. Check our Discord channel to learn how to get one.

## Example

```
const hexaone = require('./index.js');
const api = new hexaone('API_KEY');

setImmediate(async () => {
  const response = await api.getPrices(578080);
  console.log(response.status);
  console.log(Object.keys(response.data).length + ' Items');
});

/* OR */
api.getPrices(578080).then((response) => {
  console.log(response.status);
  console.log(Object.keys(response.data).length + ' Items');
});
```

As of now you can use `api` object to interact with HEXA.ONE provided endpoints. 
For examples please check [examples](https://github.com/yaneony/hexaone-npm/tree/master/examples) folder.

## More
For more information visit [HEXA.ONE](https://hexa.one)
