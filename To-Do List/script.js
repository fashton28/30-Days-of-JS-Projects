const button = document.getElementById("add");
const ul = document.getElementById("list");
const input = document.getElementById("type");

button.addEventListener("click",()=> {

    if(input.value === ""){
        alert("You must write something!")
    }else{  
        const li = document.createElement("li")
        const text = document.createTextNode(input.value);
        li.appendChild(text);
        ul.appendChild(li);
        


    }

    input.value = " ";
   
})