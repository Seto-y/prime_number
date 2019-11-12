function isPrime(n) {
	if(n <=1) {
		return 0;
	}

	let div = 2;
		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return 0;
			}

			div++;
		}

		return n;
	}


function printElements(array = []) {
	let result = [];
	
	for(i = 0; i <= array.length-1; i++) {
		result.push(array[i]);
	}
	return result;
}

module.exports = {
	printElements,
	isPrime
}
