const input = document.querySelector("input");
const submit = document.querySelector(".submit");
const numbers = document.querySelectorAll(".nums");
const clear = document.querySelector(".clear");
const special = document.querySelectorAll(".spec")
let inputText;
const keyup = (e) => 
{
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
	let operations = /[/*/\-+]+/g;
	let stack = [];
	let val = input.value.split('')
	let ops = input.value.match(operations);
	let nums = input.value.match(NumberParser);
	let postfix = [ ...nums, ...ops];
	let ans = evalRPN(postfix);
	if(ans === NaN) input.value="Inserst Correct Answer";
	else{
	inputText = "";
	input.value = "   Answer:   " + ans;
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
input.disabled = true;
var evalRPN = function(tokens) {
  
    let nums = [];
    let sum = 0;

    for (let item of tokens)
    {
        if(!(isNaN(item))) nums.push(Number(item));
        if (item == "+")
        {
            
            sum = nums[nums.length - 2] + nums[nums.length - 1];
            nums.pop();
            nums.pop();
            nums.push(sum)
            
        }
        if (item == "-")
        {
            sum =    nums[nums.length - 2] - nums[nums.length - 1];
             nums.pop();
            nums.pop();
            nums.push(sum)
        }
        if (item == "/")
        {
            sum = nums[nums.length - 2] / nums[nums.length - 1];
            nums.pop();
            nums.pop();
            if (sum > -1 && sum <= 0 )
            {
                nums.push(0)
            }
            
           else{ nums.push(Math.trunc(sum))}
        }
        if (item == "*")
        {
            sum = nums[nums.length - 2] * nums[nums.length - 1];
            nums.pop();
            nums.pop();
            nums.push(sum)
        }
    }
   
    return nums.pop();;
};
/**
remaining parsing logic
fixed two events from firing off
**/