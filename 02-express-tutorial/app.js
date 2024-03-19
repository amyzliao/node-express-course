const http = require('http');
const {readFileSync} = require('fs');

// get all files
// we only want to read the file one time when we start up the server,
// not every time we load a page, so we put it out here
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    // req = request object (req message from user)
    // res = response object (what we send back to user)
    const url = req.url;
    console.log(url);

    // home page
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>about page<h1>')
    }
    // styles
    else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
    }
    // image/logo
    else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
    }
    // logic
    else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
    }
    // 404 error    
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>ruh roh<h1>')
    }

    // we ALWAYS need res.end to terminate the response
    res.end();
})

server.listen(5000);