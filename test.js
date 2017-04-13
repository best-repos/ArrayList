

let ArrayList = require(`${__dirname}/index.js`);

let list = new ArrayList();
//list.setType("number");
list.setType("function");
//let arr = [1,2];
list.add(function(){console.log(1)});
//list.add(1,2,3,4,5,6,"hehe");

console.log(list.get(0)());