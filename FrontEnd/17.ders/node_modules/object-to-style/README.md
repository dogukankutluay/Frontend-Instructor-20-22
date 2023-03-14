# object-to-style

npm i object-to-style --save

const objectToStyle = require('object-to-style');

const style = objectToStyle({ color:'red', 'background-color':'blue' });

console.log(style);  // 'color: red; background-color: blue;'
