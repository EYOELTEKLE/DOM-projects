const input = document.querySelector("input");
const submit = document.querySelector(".submit");
const numbers = document.querySelectorAll(".nums");
const clear = document.querySelector(".clear");
const special = document.querySelectorAll(".spec")
let inputText;
const keyup = (e) => 
{

	e.stopPropagation()
	inputText = e.target.value;
	
	let NumberParser = /[0-9]+/g;
	let operations = /[/*/\-+]+/g;
	if (e.key.match(NumberParser) || e.key.match(operations)){
	input.value = input.value + e.key;
	}
	if(e.key == "Backspace")
	{
		
		let val = input.value.split('');
		val.pop();
		input.value = val.join('')

	}

}
window.onkeyup = keyup;

submit.addEventListener("click", () => 
{

	let NumberParser = /[0-9]+/g;
	let operations = /[/*-+]+/g;
	let stack = [];
	let val = input.value.split('')
	let ops = input.value.match(operations);
	let nums = input.value.match(NumberParser);
	if (val[0] in nums)
	{
		for (let i = 0; i < val.length; i++)
		{

		}
	}



})
clear.addEventListener("click", () => 
{
	inputText = ""
	input.value = inputText;
})
numbers.forEach((item) => {


		let i = item.addEventListener('click', (e) => 
		{

			input.value = input.value + item.innerHTML;
		})
	});
special.forEach((item) => {
		let i = item.addEventListener('click', (e) => 
		{

			input.value = input.value + item.innerHTML;
		})
	});

/**

Backpsace added
remaining parsing logic
issue both key press and input event firing!!

**/