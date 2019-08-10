const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let splashWindow;
let path = require('path');

// Put this line at the top

function createWindow() {

    // work around an electron bug where the center option doesnt work with multi monitor setups
    let screenBounds = electron.screen.getPrimaryDisplay().bounds;
    let splashX = screenBounds.x + ((screenBounds.width - 640) / 2);
    let splashY = screenBounds.y + ((screenBounds.height - 360) / 2);

    // Create the splash screen
    splashWindow = new BrowserWindow({
            backgroundColor: "blue",
            width: 640,
            height: 360,
            frame: false,
            fullscreenable: false,
            show: false,
            x: splashX,
            y:splashY,
            title: "Marvelator Splash",
            //    webSecurity: false,
            webPreferences: {
                defaultEncoding: "utf-8"
            }
        }
    );
    // show the splash screen
    splashWindow.loadURL(`file://${__dirname}/build/splashscreen.html`);
    splashWindow.on("ready-to-show", function(){
        splashWindow.setMenu(null);
        splashWindow.show();
        //Load the base URL.
        mainWindow.loadURL(`file://${__dirname}/build/index.html`);
    });

    // Create the main window.
    mainWindow = new BrowserWindow({
            backgroundColor: "blue",
            width: 1280,
            height: 1024,
            fullscreenable: false,
            show: false,
            center: true,
            title: "Marvelator",
            //    webSecurity: false,
            webPreferences: {
                defaultEncoding: "utf-8"
            }
        }
    );
    // get console arguments
    const consoleArguments = process.argv;

    // main window is now ready
    // close the splashscreen and show it
    mainWindow.on('ready-to-show', function () {
        setTimeout(function () {
            //hide the menu
            mainWindow.setMenu(null);
            // Open the DevTools.
            //mainWindow.webContents.openDevTools();
            mainWindow.maximize();
            // close the splashscreen
            splashWindow.close();
            mainWindow.show();
        }, 500);
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    });
}

//accept self signed certificates
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    event.preventDefault();
    callback(true);
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function () {
    createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('browser-window-created', function () {
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});
