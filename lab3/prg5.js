import http from 'http'
import { bytes } from 'stream/consumers';

const server=http.createServer((req,res)=>{
    //req method ->get post put delete patch 
    console.log ("Method:",req.method);
    console.log("URL:",req,url);
    // browser can send only get request to server 
    // post/put/patch/delete -> can be checked by api tester
    //api tester-postman ,echo api,thunder client
});