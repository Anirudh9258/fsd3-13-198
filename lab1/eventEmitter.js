 import{ 
    EventEmitter
}
from "node:events";
const task=new EventEmitter();
const sayhi = (name) => {
    console.log(`logged in as ${name}`);
};
const starts = () =>{
    console.log("system started");
}
task.on("greet", starts);
task.on("greet", sayhi);
task.on("greet",(name)=>{
    console.log(`${name} started shopping`);
});

task.emit("greet", "Anirudh god");
task.emit("greet", "Abhishek");