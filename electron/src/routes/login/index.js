const remote = require('electron').remote
const main = remote.require('./main.js')
function dosomething() {

    userName = document.getElementById("UserName").value;
    passWord = document.getElementById("Password").value;

    if (userName === "") {
        alert("Please enter a user name!");
        return;
    } else if (passWord === "") {
        alert("Please enter a password!");
    }

    var window = remote.getCurrentWindow()
    isQA = false;
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

/**
 * Opens the Create a New Account Window when the link is pressed.
 */
function openCreateAccountWindow() {
    var currWindow = remote.getCurrentWindow();
    main.openWindow("/src/routes/create-account/createaccount");
    currWindow.close();
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
