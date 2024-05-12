function converter(){
	var input = document.getElementById('txtn')
	var numero = Number.parseFloat(input.value)
	var dolar = numero * 5.1568
	Number(dolar)
	var res = document.getElementById('res')
	res.innerHTML = (`Em dólares é: ${dolar.toFixed(2)}`)
}