const button = document.getElementById("add");
const ul = document.getElementById("list");
const input = document.getElementById("type");

button.addEventListener("click",()=> {

    if(input.value === ""){
        alert("You must write something!")
    }else{  
        let li = document.createElement("li")
        let text = document.createTextNode(input.value);
        li.appendChild(text);
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }

    input.value = " ";
   
})