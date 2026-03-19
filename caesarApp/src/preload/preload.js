const { contextBridge } = require("electron");
const path = require("path");

const cipher = require(path.join(__dirname, "../core/cipher.js"));

contextBridge.exposeInMainWorld("api", {
  encrypt: (text, shift) => cipher.encrypt(text, shift),
  decrypt: (text, shift) => cipher.decrypt(text, shift)
});