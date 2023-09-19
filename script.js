

newFunction();   

function newFunction() {
    const title = document.getElementById('title');
    document.querySelector("h1").innerText += " from JS";
    // ou
    document.getElementById('title').style.color = 'red';
}
const h2 = document.createElement("h2");
h2.id = "sous-titre";
h2.innerText = "Welcome to the javascript world";
document.querySelector("h1").after(h2);