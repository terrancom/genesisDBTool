const { app, BrowserW, BrowserWindow } = require('electron');
const { path } = require('express/lib/application');

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'genesis DB Tool',
        width: 800,
        height: 600,
    });

    mainWindow.loadFiles(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();
});