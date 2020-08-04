var hello = 'Hello';
let world = 'Hello world';
let world = 'hello world+';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
	console.log(hello);
	console.log(world);
	console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
	globalVar = 'im global'
}

helloWorld();
console.log(globalVar);

const anotherFunction2 = () => {
	var localVar = globalVar = 'Im Global';
}

anotherFunction2();
console.log(globalVar);