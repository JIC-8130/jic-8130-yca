const remote = require('electron').remote
const main = remote.require('./main.js')

function openLoginWindow() {
    var currWindow = remote.getCurrentWindow();
    main.openWindow("/src/routes/login/index");
    currWindow.close();
}
