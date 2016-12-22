var a,b, result;
function getValues(){
	a = Number(document.getElementById('a').value);
	b = Number(document.getElementById('b').value);
}

// var sum = document.getElementById('sum');
// var sub = document.getElementById('sub');
// var mult = document.getElementById('mult');
// var div = document.getElementById('div');

// sum.addEventListener('click', function()
// {
// 	getValues();
// 	result = a + b;
// 	alert("The sum is equals to " + result)
// });

// sub.addEventListener('click', function()
// {
// 	getValues();
// 	result = a - b;
// 	alert("The rest is equals to " + result)
// });

// mult.addEventListener('click', function()
// {
// 	getValues();
// 	result = a * b;
// 	alert("The operation is equals to " + result)
// });

// div.addEventListener('click', function()
// {
// 	getValues();
// 	result = a / b;
// 	alert("The operation is equals to " + result)
// });

var equals = document.getElementById('equals');

equals.addEventListener('click', function(){
	getValues();
	var operation = document.getElementById('operation').value;
	switch(operation)
	{
		case "+": 
			result = a + b;
			break;

		case "-":
			result = a - b;
			break;

		case "*":
			result = a * b;
			break;

		case "/":
			result = a / b;
			break;

		case "%":
			result = a % b;
			break;
	}
	document.getElementById('result').value = result;
});


