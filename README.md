# butiran-js
Node package for simulation of grain-based system using molecular dynamics method and agent-based model


## module
- **vect3**
	+ `Vect3()` Initialize with three, one, or zero arguments
	+ `strval()` Get string value of a Vect3
	+ `add()` Add some Vect3
	+ `sub()` Substract two Vect3
	+ `mul()` Multiply Vect3 with scalar or vice versa
	+ `div()` Divide Vect3 with scalar
	+ `dot()` Dot two Vect3
	+ `cross()` Cross two Vect3
	+ `len()` Get length of a Vect3
	+ `unit()` Get unit vector of a Vect3
	+ `neg()` Get negative of a vector


## usage
```javascript
var butiran = require("butiran");
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
```

```
Vect3 { x: 3, y: 4, z: 0 }
a = (3, 4, 0)
b = (4, -3, 0)
a x b = (0, 0, -25)
a . b = 0
```