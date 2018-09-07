const {app, BrowserWindow} = require('electron')
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})
  
    // and load the index.html of the app.
    win.loadFile('src/routes/create-account/createaccount.html')
  }
  
  app.on('ready', createWindow)

  exports.openWindow = (filename) => {
    let win = new BrowserWindow({with: 800, height: 600})
    win.loadURL(`file://${__dirname}` + filename + `.html`)
  }