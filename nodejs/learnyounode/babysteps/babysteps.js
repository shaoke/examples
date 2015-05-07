//console.log(process.argv);)
function sum(){
	var result = 0;
	for(var i=0; i<arguments.length; i++){
		result+=Number(arguments[i]);
	}
	return result;
}

console.log(sum.apply(this, Array.prototype.slice.call(process.argv, 2)));

//console.log(Array.prototype.slice.call(process.argv, 2));
