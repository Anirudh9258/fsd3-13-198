import http from 'https'

const server = http.createServer((req,res )=> {
    res.write("<h1>Heloo Client<h1>");
    res.end();
});

server.listen(4444, () => console.log("server is running at 4444..."));