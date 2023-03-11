import http from 'http';

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});

httpServer.on('error', (err) => {
  throw err;
});

const net = {
  startServer() {
    httpServer.listen(1337, '127.0.0.1', () => {
      console.log('server bound');
    });
  },

  stopServer() {
    console.log('Stop server');
  },

  pollServerStatus() {
    console.log(httpServer.listening);
  },
};

export { net };
