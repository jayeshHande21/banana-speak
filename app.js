function clickHandler() {
 console.log("texted");
 console.log(textinput.value);
};




var textinput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
// var outputdiv=  document.querySelector("#output");
btnTranslate.addEventListener("click", clickHandler);