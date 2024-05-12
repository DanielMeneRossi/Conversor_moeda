function converter() {
	var input = document.getElementById('txtn')
	var numero = Number(input.value)
	var res = document.getElementById('res')
	var tipo = document.getElementsByName('tipo')
	if (numero == '') {
		res.innerHTML = ("Coloque um número!")
	} else {
		if (tipo[0].checked) {
			var dolar = numero * 5.1568
			res.innerHTML = (`Em dólares é: ${dolar.toLocaleString('pt-BR',{style:'currency', currency: 'USD'})}`)
		} else if (tipo[1].checked) {
			var euro = numero * 5.562898000000001
			res.innerHTML = (`Em euros é: ${euro.toLocaleString('pt-BR',{style:'currency', currency: 'EUR'})}`)
		}
	}
}