

function  ShowAppName ()
{
cordova.getAppVersion.getAppName ( function (appname) {alert(appname)})
}

function  ShowAppVersion ()
{
cordova.getAppVersion.getAppVersionCode ( function (vercode) {alert(vercode)})
}

console.log("weinre debuging...")