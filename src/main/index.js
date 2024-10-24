const { app, BrowserWindow } = require('electron');
const path = require('path');
function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'genesis DB Tool',
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Asegúrate de usar `path.join` correctamente
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        }
    });

    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
}

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
    if(process.platform === 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createMainWindow();
    }
});