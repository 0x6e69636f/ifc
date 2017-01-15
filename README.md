# ifc
A Javascript client for Infinite Flight simulator API

## Connection to Infinite Flight Connect API

Infinite Flight Connect is an built-in API that allows you to send command to Infinite Flight. You must enable it in Infinite Flight Settings > General > "Enable Infinite Flight Connect".

### Initialization 
`init(successCallback, errorCallback)`

* `successCallback` is the function to be executed after the connection has been established with Infinite Flight
* `errorCallback` is the function to be executed in case of Error

Example : 

```
IFC.init(
  function() {
    console.log("IFC connected");
    IFC.sendCommand({ "Command": "Commands.FlapsDown", "Parameters": []});
  },
  function() {
    IFC.log("IFC connection error");
  }
)
```

### Sending a Command

To send a command to Infinite Flight, you may use the shortcut function `IFC.cmd()` or the full function for complex commands. You'll find a full list of commands on the [API Docs repo](https://github.com/flyingdevelopmentstudio/infiniteflight-api)

Examples :
* Flaps Down : `IFC.cmd("FlapsDown")` will lower the flaps down. (Full Command equivalent is: `IFC.sendCommand({ "Command": "Commands.FlapsDown", "Parameters": []});`
* Camera Move : this one require params, so let's call the full command call : ` "Command": "NetworkJoystick.SetPOVState", "Parameters": [ { "Name": "X", "Value": 0 }, { "Name": "Y", "Value": 0 } ] }`


### Connection to ForeFlight Link API 

Fore Flight Link broadcasts various data about the player's plane and traffic planes around him. ForeFlight Link must be enabled from Infinite Flight Settings > General > Enable ForeFlight Link

You can use IFC to listen to ForeFlight Link messages : 

`initForeFlight(onForeFlightDataReceived)`

(TODO: example to come ...)

Received Data is formatted according to the official documentation : https://www.foreflight.com/support/network-gps/


