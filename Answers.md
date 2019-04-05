1. Describe the biggest difference between `.forEach` & `.map`.
.forEach mutates the original array, map creates a new array 
2. What is the difference between a function and a method?
A method is a function housed within an object
3. What is closure?
A closure is a nested function that has access to it's outter function's variables.  Closures store references to the outter functions variables even after function invocation has completed.
4. Describe the four rules of the 'this' keyword.
Window - default binding of the 'this' keyword
Implicit - method invocation binding of 'this' happens automatically with objects and methods
Explicit - uses function methods: call, apply, bind to explicitly bind 'this' to a function
New - used to create new objects and pass 'this' into constructor functions
5. Why do we need super() in an extended class?
To access the 'this' context of the base class