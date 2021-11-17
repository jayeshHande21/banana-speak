var btnTranslate = document.querySelector("#btn-translate");
var textinput = document.querySelector("#text-input");
var outputdiv=  document.querySelector("#output");


function clickHandler() {
    outputdiv.innerText="ajfjaefkakfjkf  "  +     textinput.value;
};
btnTranslate.addEventListener("click", clickHandler);