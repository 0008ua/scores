#!/usr/bin/env node
import app from '../app';
import debug from 'debug';
debug('server:server');
import config from '../config';
import winston from '../config/winston';
const log = winston(module);

import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import util from 'util';




/*
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || config.get('port'));
app.set('port', port);

/*
 * Create HTTP or HTTPS server.
 */
let server: http.Server | https.Server;
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log('port', port);
if (process.env.NODE_ENV === 'development') {
  const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '..', '..', 'security', 'cert.key')),
    cert: fs.readFileSync(path.join(__dirname, '..', '..', 'security', 'cert.pem')),
  };
  server = https.createServer(httpsOptions, app);
} else {
  server = http.createServer(app);
}


/*
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/*
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: any) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case 'EACCES':
    console.error(bind + ' requires elevated privileges');
    process.exit(1);
    break;
  case 'EADDRINUSE':
    console.error(bind + ' is already in use');
    process.exit(1);
    break;
  default:
    throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr!.port;
  debug('Listening on ' + bind);
  log.verbose(`Server listening on ${util.format(bind)}`);
}
