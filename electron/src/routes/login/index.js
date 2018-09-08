const remote = require('electron').remote
const main = remote.require('./main.js')
function dosomething() {
    var window = remote.getCurrentWindow()
    isQA = false;
    userName = document.getElementById("username").value;
    passWord = document.getElementById("password").value;
    if (userName != "" && passWord != "") {

        if (userName == "LM" && passWord == "password1"){
            main.openWindow('/src/routes/input-number-of-units/InputNumberOfUnits')
            window.close()
        }

        if (userName == "QA" && passWord == "password"){
            main.openWindow('/src/routes/dashboard/index')
            window.close()
        }
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
  }

  function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);
  }

  function processData(csv) {
      var allTextLines = csv.split(/\r\n|\n/);
      var lines = [];
      for (var i=0; i<allTextLines.length; i++) {
          var data = allTextLines[i].split(';');
              var tarr = [];
              for (var j=0; j<data.length; j++) {
                  tarr.push(data[j]);
              }
              lines.push(tarr);
      }
    console.log(lines);
  }

  function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
  }
