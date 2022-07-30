const input = document.querySelector("input");
const submit = document.querySelector(".submit");
const numbers = document.querySelectorAll(".nums");
const clear = document.querySelector(".clear");
const special = document.querySelectorAll(".spec")
let inputText;

const keyup = (e) => 
{
	inputText = e.target.value;
	input.value = input.value + e.key;

}
window.onkeyup = keyup;

submit.addEventListener("click", () => 
{

	let NumberParser = /[0-9]+/g;
	let operations = /[/*-+]+/g;


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

