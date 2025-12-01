function creatLogEntry(message){
    const now = new Date
    const timestemp = now.toLocalTimeString('th-TH');
    const eventID= Math.random().toString(2,10).toUpperCase(2,10)

    const logMessage = message.toUpperCase();
    return `[${timestemp}] [${eventId}] ${logMessage}`;
}
const log = creartelogEntry('User logged in);
console.log(log);

