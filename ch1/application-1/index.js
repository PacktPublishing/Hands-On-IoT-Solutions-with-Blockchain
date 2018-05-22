var Client = require("ibmiotf");
var appClientConfig = require("./application.json");

var appClient = new Client.IotfApplication(appClientConfig);

appClient.connect();

appClient.on("connect", function () {
    appClient.subscribeToDeviceEvents();
});

appClient.on("deviceEvent", function (deviceType, deviceId, eventType, format, payload) {
    console.log("Device Event from :: " + deviceType + " : " + deviceId + " of event " + eventType + " with payload : " + payload);
});
