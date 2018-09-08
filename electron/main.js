const {app, BrowserWindow} = require('electron')
  let currWin;
  function createWindow () {
    // Create the browser window.
    currWin = new BrowserWindow({width: 800, height: 600})
  
    // and load the index.html of the app.
    currWin.loadFile('electron/src/routes/login/index.html')
    currWin.maximize();
  }
  
  app.on('ready', createWindow)

  exports.openWindow = (filename) => {
    win = new BrowserWindow({width: currWin.width, height: currWin.height})
    win.loadURL(`file://${__dirname}` + filename + `.html`)
    win.maximize();
  }