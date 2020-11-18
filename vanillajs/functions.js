function helloWorld() {
  console.log('Hello, World!');
}

const myFunction = helloWorld;
const myOtherFunction = myFunction;

helloWorld();
myFunction();
myOtherFunction();