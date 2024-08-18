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

        span.addEventListener("click", function(){
            li.remove();
        })

    }

    input.value = " ";

    

   
})


input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { // Check if the pressed key is Enter
        if (input.value === "") {
            alert("You must write something!");
        } else {  
            let li = document.createElement("li");
            let text = document.createTextNode(input.value);
            li.appendChild(text);
            ul.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7"; // "×" symbol for delete button
            li.appendChild(span);

            // Add event listener to the span to remove the list item
            span.addEventListener("click", function() {
                li.remove();
            });

            input.value = ""; // Clear the input field after adding the item
        }
    }
});