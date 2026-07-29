import {readFile} from "fs/promises";

 const data =await readFile ("study.txt","utf-8");
 console.log("file contents");
 console.log(data);
