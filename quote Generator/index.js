const getter = async () => 
{

	let response = await fetch("https://type.fit/api/quotes");
	let data = await response.json();
	return data;
};

const paragraphText = document.querySelector(".text");
const paragraphAuthor = document.querySelector(".author");
const button = document.querySelector("button");

getter().then(res => 
{
	let random = Math.round(Math.random() * res.length);
	let text = res[random].text;
	let author = res[random].author;
	paragraphText.innerHTML = text;
	paragraphAuthor.innerHTML = author;
})

button.addEventListener("click", (e) => 
{
	getter().then(res => 
{
	let random = Math.round(Math.random() * res.length);
	let text = res[random].text;
	let author = res[random].author;
	paragraphText.innerHTML = text;
	paragraphAuthor.innerHTML = author;
})
})