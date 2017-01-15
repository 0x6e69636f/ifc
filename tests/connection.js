var IFC = require('../ifc.js');
IFC.enableLog = true;
IFC.log("IFC test start");
IFC.init(
  function() {
    console.log("IFC connected");
    IFC.getAirplaneState(function(data) { 
      IFC.log("* Airplane State");
      console.log(data);
    });
    IFC.sendCommand({ "Command": "Commands.FlapsDown", "Parameters": []});
    setTimeout(function(){ IFC.cmd("FlapsUp"); }, 10000);
  },
  function() {
    IFC.log("IFC connection error");
  }
)
IFC.log("IFC waiting for connection");