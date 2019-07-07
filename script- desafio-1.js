for (var i = 1; i < 100; i++) {
	if(i%3 === 0){
		console.log(i, 'Itelios')
	}

	if(i%5 === 0){
		console.log(i, 'Capgemini')
	}

	if(i%3 === 0 && i%5 === 0){
		console.log(i, 'Itelios, part of Capgemini')
	}

	if(primo(i)){
		console.log(i, 'Número primo')
	}
}