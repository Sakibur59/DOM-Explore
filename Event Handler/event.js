document.getElementById("btn").addEventListener('click',function (){
    let btn = document.getElementById("heading");
    btn.innerText="Change the heading title";
})

document.getElementById("btn-2").addEventListener('click',function (){
    let comment = document.getElementById("comment-box")
    let displayValue= comment.value;

    let displayOutput = document.getElementById("comment-container")
    let commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText = displayValue;
    displayOutput.appendChild(commentElement);
    
})

document.getElementById("input").addEventListener("focus",function () {
    console.log("User Typing....")
})
// document.getElementById("btn-3").addEventListener("mouseenter",function () {
//     console.log("mouse enter")
// })
document.getElementById("btn-3").addEventListener("mousemove",function () {
    console.log("Mouse Moving inside the button")
})

document.getElementById("item-list").addEventListener("click",function (event){
    console.log(event.target);
})

