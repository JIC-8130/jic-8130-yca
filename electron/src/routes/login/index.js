const remote = require('electron').remote
const main = remote.require('./main.js')
function dosomething() {
    var window = remote.getCurrentWindow()
    main.openWindow('/src/routes/input-number-of-units/InputNumberOfUnits')
    window.close()
    alert(1)
}