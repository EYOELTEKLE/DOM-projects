const input = document.querySelector("input");
const submit = document.querySelector(".submit");
const numbers = document.querySelectorAll(".special");
const clear = document.querySelector(".clear");
let inputText;
const keyup = (e) => 
{
	inputText = e.target.value;
	console.log(inputText);

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

numbers.addEventListener("click", (e) => input.innerHTML = e.target.value);
