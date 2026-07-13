// PS Global Impex Website JavaScript

console.log("Welcome to PS Global Impex!");

document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".button");

    if(button){

        button.addEventListener("click", function(){

            alert("Thank you for contacting PS Global Impex. We will get back to you soon.");

        });

    }

});
