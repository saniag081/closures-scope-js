const helloWorld = () => {
	const hello = 'hello Word';
	console.log(hello);
}

helloWorld();
console.log(hello);

var scope = 'i am global';

const functionScope = () => {
	// ambito lexico
	var scope = 'i am just a local';
	const func = () => {
		return scope
	}
	console.log(func());
}

functionScope();
console.log(scope);