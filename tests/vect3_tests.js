/*
	vect3_tests.js
	Test the module Vect3
	
	Sparisoma Viridi | https://github.com/dudung
	
	20210207
	0928 Start this test file.
	0938 Forget to add () after require() as in [1].
	0946 Find [2] for built-in modules of Node.js 6.10.3.
	1122 That Vect3 = butiran.Vect3() is interesting.
	
	References
	1. Nick Panov, Community, "Answer to 'In Node.js, how do I “include” functions from my other files?'", StackOverflow, 20 Jun 2020 at 09:12, url https://stackoverflow.com/a/28066576 [20210207].
	2. -, "Node.js Built-in Modules", W3Schools, url https://www.w3schools.com/nodejs/ref_modules.asp [20210207].
*/

// Set mode: false (develop), true (install)
var NPM_INSTALL = true;

// Require module
var butiran;
if(!NPM_INSTALL) {
	butiran = require("../butiran/main");
} else {
	butiran = require("butiran");
}
var Vect3 = butiran.Vect3();

var a = new Vect3(3, 4, 0);
console.log(a);
console.log("a = " + a.strval());

var b = new Vect3(4, -3, 0);
console.log("b = " + b.strval());

var c = Vect3.cross(a, b);
console.log("a x b = " + c.strval());

var d = Vect3.dot(a, b);
console.log("a . b = " + d);
