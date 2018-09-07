const remote = require('electron').remote
const main = remote.require('./main.js')
function dosomething() {
    var window = remote.getCurrentWindow()
    main.openWindow('/index')
    window.close()
    alert(1)
}