const { app, BrowserWindow } = require("electron");
const path = require("path");

try {
  require("electron-reload")(__dirname, {
    electron: require("electron")
  });
} catch {}

function createWindow() {
  const win = new BrowserWindow({
    width: 650,
    height: 550,
    icon: path.join(__dirname, "../../assets/icon.ico"),
    webPreferences: {
        preload: path.join(__dirname, "../preload/preload.js"),
        contextIsolation: true,
        nodeIntegration: false,
        sandbox: false
    }
  });

  win.loadFile(path.join(__dirname, "../renderer/index.html"));
}

app.whenReady().then(createWindow);