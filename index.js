const http = require('http');
const dt = require('./datetimemodule.js');
const url = require('url');
const fs = require('fs');
const id = require('./readidmodule.js');
const age = require('./agegettermodule.js');

http
  .createServer(function (req, res) {
    // use a module
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end(id.getId(req));

    // another module
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(age.getAge(new Date('December 17, 1995')).toString());

    // read a file
    // fs.readFile('index.html', function (err, data) {
    //   res.writeHead(200, { 'Content-Type': 'text/html' });
    //   res.write(data);
    //   return res.end();
    // });

    // write a file
    // fs.writeFile('mynewfile.txt', 'Hello content!', function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });
  })
  .listen(8080);
