let section = document.createElement("section")
section.innerText = 'hello';

let main = document.getElementById("main-section")
main.appendChild(section);

let ul = document.createElement("ul");
let li = document.createElement("li");
li.innerText="Mango";
ul.appendChild(li);

section.appendChild(ul)

// 2nd way to create HTML element 

let create = document.createElement("section");
main.appendChild(create);

create.innerHTML= `<h1>Create element via JS</h1> 
<p>Explore HTML DOM manipulation</p> <button>Read More</button>`
