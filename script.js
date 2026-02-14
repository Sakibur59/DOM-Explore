let section = document.createElement("section")
section.innerText = 'hello';

let main = document.getElementById("main-section")
main.appendChild(section);

let ul = document.createElement("ul");
let li = document.createElement("li");
li.innerText="Mango";
ul.appendChild(li);

section.appendChild(ul)
