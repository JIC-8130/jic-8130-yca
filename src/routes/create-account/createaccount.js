// const electron = require('electron')
// const url = require('url')
// const path = require('path')

// const {app, BrowserWindow} = electron;

// let mainWindow;

// app.on('ready', function() {
//     //Create new window
//     mainWindow = new BrowserWindow({
//         title: "Production Application"
//     });
//     // load HTML into window
//     mainWindow.loadURL(url.format({
//         pathname: path.join(__dirname, "createaccount.html"),
//         protocol: "file",
//         slashes: true
//     }));
//     //quit app when closed
//     mainWindow.on('closed', function(){
//         app.quit();
//     })

//     //build menu from template
// });

//Madeline tryna fix dis button
const remote = require('electron').remote
const main = remote.require('./main.js')
function dosomething() {
    var window = remote.getCurrentWindow()
    main.openWindow('../dashboard/index')
    window.close()
}