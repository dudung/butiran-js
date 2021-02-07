/*
	vect3_tests.js
	Test the module Vect3
	
	Sparisoma Viridi | https://github.com/dudung
	
	20210207
	0928 Start this test file.
	0938 Forget to add () after require() as in [1].
	
	References
	1. Nick Panov, Community, "Answer to 'In Node.js, how do I “include” functions from my other files?'", StackOverflow, 20 Jun 2020 at 09:12, url https://stackoverflow.com/a/28066576 [20210207].
*/

// Require module
var Vect3 = require("../butiran/vect3.js")();

var a = new Vect3(1, 2, 3);
console.log(a.strval());

