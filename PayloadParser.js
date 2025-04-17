function parseUplink(device, payload)
{
    var parsed = payload.asJsonObject();
    env.log(parsed); 
	
    // Store Flow In
    var e = device.endpoints.byAddress("1");
    if (e != null)
        e.updateVolumeSensorStatus(parsed.FlowIn);

    // Store Flow Out
    var e = device.endpoints.byAddress("2");
    if (e != null)
        e.updateVolumeSensorStatus(parsed.FlowOut);

    // Store Pressure In
    var e = device.endpoints.byAddress("3");
    if (e != null)
        e.updatePressureSensorStatus(parsed.PressureIn);

    // Store Pressure Out
    var e = device.endpoints.byAddress("4");
    if (e != null)
        e.updatePressureSensorStatus(parsed.PressureOut);

    // Store Density In
    var e = device.endpoints.byAddress("5");
    if (e != null)
        e.updateGenericSensorStatus(parsed.DensityIn);

    // Store Density Out
    var e = device.endpoints.byAddress("6");
    if (e != null)
        e.updateGenericSensorStatus(parsed.DensityOut);

    // Store Motor Temperature
    var e = device.endpoints.byAddress("7");
    if (e != null)
        e.updateTemperatureSensorStatus(parsed.MotorTemp);

    // Store Totalized
    var e = device.endpoints.byAddress("8");
    if (e != null)
        e.updateGenericSensorStatus(parsed.Totalized);
   
}

/*function buildDownlink(device, endpoint, command, payload) 

{
    env.log("Downlink command: ", command);

    // Inicializa el buildResult como OK al principio
    payload.buildResult = downlinkBuildResult.ok;
    
    // Configura el topic adecuado para MQTT
    payload.topic = "DA3DCB6EB0C6/uplink/34b7dac6b958/command/switch:0";

    // Log para verificar el topic y el comando
    env.log("Enviando comando al topic:", payload.topic);

    // Evalúa el tipo de comando
    switch (command.type) {
        case commandType.onOff:
            switch (command.onOff.type) {
                case onOffCommandType.turnOn:
                    // Comando para encender el switch, utilizando texto "on"
                    payload.setAsString("on");
                    env.log("Comando 'on' enviado");
                    break;
                case onOffCommandType.turnOff:
                    // Comando para apagar el switch, utilizando texto "off"
                    payload.setAsString("off");
                    env.log("Comando 'off' enviado");
                    break;
                default:
                    // Comando no soportado
                    payload.buildResult = downlinkBuildResult.unsupported;
                    env.log("Comando no soportado");
                    return;
            }
            break;
        default:
            // Si el tipo de comando no es soportado
            payload.buildResult = downlinkBuildResult.unsupported;
            env.log("Tipo de comando no soportado");
            return;
    }

    // Si llegaste aquí, el buildResult debería seguir siendo OK
    env.log("Downlink construido correctamente:", payload);
}*/