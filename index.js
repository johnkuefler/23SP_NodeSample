const http = require('http');
const dt = require('./datetimemodule.js');
const url = require('url');
const fs = require('fs');
const id = require('./readidmodule.js');
const age = require('./agegettermodule.js');
const uc = require('upper-case');
const lpad = require('@stdlib/string-left-pad');
const axios = require('axios');

http
  .createServer(function (req, res) {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then(function (response) {
        console.log(response.data);
      });
    res.end();

    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end(uc.upperCase('hello world!!!!!!!'));

    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // let str = lpad('Padme', 5, '$');
    // res.end(str);

    // use a module
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end(id.getId(req));

    // another module
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end(age.getAge(new Date('December 17, 1992')).toString());

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
