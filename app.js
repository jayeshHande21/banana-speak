var textinput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputdiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getServerURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  alert("Something is wrong! Please try after some time.");
  console.log("Error : " + error);
}
function clickHandler() {
  var inputText = textinput.value;
  if (inputText === "") {
    alert("Please enter the Text ");
  } else {
    fetch(getServerURL(inputText))
      .then((response) => response.json())
      .then((json) => {
        var translatedText = json.contents.translated;
        outputdiv.innerText = translatedText;
      })
      .catch(errorHandler);
  }
}

btnTranslate.addEventListener("click", clickHandler);
