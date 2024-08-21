document.addEventListener("onload", function(){

})





const button = document.getElementById("button");
const input = document.getElementById("input");

button.addEventListener("click", function() {

    const value = input.value;
    let image = document.getElementById("img");
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`



})

 