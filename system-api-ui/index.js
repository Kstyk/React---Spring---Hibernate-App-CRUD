const electron = require("electron");
const { BrowserWindow } = require("electron/main");
const { app, ipcMain } = electron;

let mainWindow;
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(`${app.getAppPath()}\\build\\index.html`);
});

ipcMain.on("number", (event, value) => {
  console.log(value);
});
