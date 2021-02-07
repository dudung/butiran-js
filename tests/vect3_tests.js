/*
	vect3_tests.js
	Test the module Vect3
	
	Sparisoma Viridi | https://github.com/dudung
	
	20210207
	0928 Start this test file.
	0938 Forget to add () after require() as in [1].
	0946 Find [2] for built-in modules of Node.js 6.10.3.
	
	References
	1. Nick Panov, Community, "Answer to 'In Node.js, how do I “include” functions from my other files?'", StackOverflow, 20 Jun 2020 at 09:12, url https://stackoverflow.com/a/28066576 [20210207].
	2. -, "Node.js Built-in Modules", W3Schools, url https://www.w3schools.com/nodejs/ref_modules.asp [20210207].
*/

// Require module
var butiran = require("../butiran/main");
var Vect3 = butiran.Vect3();

console.log(butiran);
console.log(Vect3);

var a = new Vect3(1, 2, 3);
console.log(a);

