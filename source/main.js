'use strict';
require('babelify/polyfill'); //remove this line if you don't care about ES6 pollyfils

document.addEventListener('DOMContentLoaded', main);

function main(){
	console.log('Hey! Ho! Let\'s go!'); //remove this line if you don't care about The Ramones
}

function sayHello(name){
	console.log('hello ' + name);
}