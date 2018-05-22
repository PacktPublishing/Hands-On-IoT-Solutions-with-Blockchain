var iotf = require("ibmiotf");
var config = require("./device.json");

var deviceClient = new iotf.IotfDevice(config);

deviceClient.log.setLevel('debug');

deviceClient.connect();

deviceClient.on('connect', function(){
    console.log("connected");
    setInterval(function function_name () {
        console.log("Event published");
        deviceClient.publish('myevt', 'json', '{"value":' + new Date() +'}', 2);
    },2000);
});