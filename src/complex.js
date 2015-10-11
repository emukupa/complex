// Complex numbers 
// verbose code on purpose
// just playing around with node.js
function Complex(real, im) {
  this.r = real;
  this.i = im;
  
  // Complex multiplication
  // (a, b)(c, d) = (ac - bd), (ad + bc) 
  this.mult = function(complex) {
    var a = this.r;
    var b = this.i;
    var c;
    var d;
    if(arguments.length === 1 && typeof arguments[0] === "number") {
      c = arguments[0];
      d = 0;
    } else if(arguments.length === 2 && typeof arguments[0] === "number" && typeof arguments[1] === "number") {
      c = arguments[0];
      d = arguments[1];
    } else {
      c = complex.r;
      d = complex.i;
    }
    var real = a * c - b * d;
    var im = a * d + b * c;
    return new Complex(real, im);
  };

  // Complex division
  // (a, b)/(c, d) = ((ac+bd)/(c^2+d^2), (bc-ad)/(c^2+d^2))
  this.div = function(complex) {
    var a = this.r;
    var b = this.i;
    var c = complex.r;
    var d = complex.i;
    var real = (a*c+b*d)/(c*c+d*d);
    var im = (b*c-a*d)/(c*c+d*d)
    return new Complex(real, im);
  };
  
  // Complex power
  // Let z = r(cos θ + i sin θ)
  // Then z^n = r^n (cos nθ + i sin nθ)
  this.pow = function(n) {
    //console.log(this);
    var θ = Math.atan2(this.i, this.r);
    var r = Math.sqrt(this.r * this.r + this.i * this.i);
    var real = Math.pow(r, n) * Math.cos(n*θ);
    var im = Math.pow(r, n) * Math.sin(n*θ);
    return new Complex(real, im);
  };
  
  this.add = function(complex) {
    var c;
    var d;
    if(arguments.length === 1 && typeof arguments[0] === "number") {
      c = arguments[0];
      d = 0;
    } else if(arguments.length === 2 && typeof arguments[0] === "number" && typeof arguments[1] === "number") {
      c = arguments[0];
      d = arguments[1];
    } else {
      c = complex.r;
      d = complex.i;
    }
    return new Complex(this.r + c, this.i + d);
  };
  
  this.sub = function(complex) {
    return new Complex(this.r - complex.r, this.i - complex.i);
  };
  
  this.toPolar = function(complex) {
    var φ = Math.atan2(this.i, this.r);
    var r = Math.sqrt(this.r * this.r + this.i * this.i);    
    return {r: r, phi: φ}; 
  };
};

exports.Complex = Complex;
