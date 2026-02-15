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