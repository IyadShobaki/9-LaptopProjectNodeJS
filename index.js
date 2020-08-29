// We installed nodemon package (npm install nodemon -g)
// write 'nodemon' in the terminal to start it  
 
const fs = require('fs');  // fileSystem
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
//console.log(__dirname)
//console.log(json);
const laptopData = JSON.parse(json);
//console.log(laptopData);

const server = http.createServer((req, res) => {
    //console.log('Someone did access the server!');
    if(req.url != '/favicon.ico'){
        //console.log(req.url);
        const pathName = url.parse(req.url, true).pathname;
        //console.log(pathName);

        //console.log(url.parse(req.url, true));
        const id = url.parse(req.url, true).query.id;
        //console.log(id);

        if(pathName === '/products' || pathName === '/'){
            res.writeHead(200, { 'Content-type': 'text/html'});
            res.end('This is the PRODUCTS page!');
        }else if (pathName === '/laptop' && id < laptopData.length){
            res.writeHead(200, { 'Content-type': 'text/html'});
            res.end(`This is the LAPTOP page for laptop ${id}!`);
        }else{
            res.writeHead(404, { 'Content-type': 'text/html'});
            res.end('URL was not found on the server!');
        }
    }

});

server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for requests now');
});










