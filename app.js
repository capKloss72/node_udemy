import Emitter from "./emitter.js"; // Importing the Emitter class from emitter.js

const emitter = new Emitter(); // Creating an instance of the Emitter classS

emitter.on("event1", () => {
  console.log("Event 1 triggered!");
});

emitter.on("event1", () => {
  console.log("Event 2 triggered: ");
});

emitter.emit("event1");
