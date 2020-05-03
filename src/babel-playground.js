// Babel playground.
// Learning and experimenting Babel (https://babeljs.io/) "The compiler for next generation JavaScript"

// Use Babel to transpile some ESNext source code to browser-compatible JS
var input = 'const getMessage = () => "Hello World";';
var output = Babel.transform(input, { presets: ['env'] }).code;
document.getElementById('output1').innerHTML = output;