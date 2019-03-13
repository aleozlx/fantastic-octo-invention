//import * as express from 'express';
const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const expressWs = require('express-ws')(app);

// Serve static assets from ./static
app.use(express.static(`${__dirname}/static`));

// Instantiate shell and set up data handlers
expressWs.app.ws('/shell', (ws, req) => {
  //  ws.send(data);
  // For all websocket data send it to the shell
    //ws.on('message', (msg) => {
      //   shell.write(msg);
    // });
const fifoPath = "/home/alex/Code/fantastic-octo-invention/logs.fifo";
const fifo = fs.createReadStream(fifoPath);

  fifo.on('data', data => {
    ws.send(data);
  });

  ws.send("hello!");
});

// Start the application
app.listen(5000);
