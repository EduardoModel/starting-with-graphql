# Starting with GraphQL
A project to learn the basics about the GraphQL.

## Why use GraphQL?
It offers a different way to communicate with the back-end to request data;
The responsability of which fields needs to be queried is moved to the front-end, giving the users of the API more 
flexibility to choose which data will be retrieved and thus avoiding some issues, like overfetching data.;

## Main benefits of GraphQL
1. It gives more flexibility for the consumers of the API to chose wich data they need at one given time;
2. It avoid the issue of underfetching and overfetching data;
3. Self documenting API;
4. Makes possible to request multiple data with the same query;
5. Supports WebSockets outer of the box with the **Subscription** method;

## How to run the application
First run
```
  yarn
```
or
```
  npm install
```
and then
```
  tsc src/index.ts
  node src/index.js
```