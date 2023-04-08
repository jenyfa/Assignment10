
const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "files", "glo recipe.jpg"), "utf-8", (err,data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile(
    path.join(__dirname, "files","assign10.txt"),
    "Perfection does not exist", 
    (err) => {
        if (err) throw err;
        console.log ("Data has been generated");
        fs.appendFile(
            path.join(__dirname, "files","assignment10.txt"),

        )
    }
);

//Event logs
const logEvents = require("./logEvents");
const events = require("events");

const myEvent = new events.EventEmitter();

myEvent.on("log", (msg) => {
    logEvents(msg);
});

setTimeout(() => {
    myEvent.emit("log", "Log Event Emitted");
}, 2000);