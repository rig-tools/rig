import http from 'http';

const httpServer = http.createServer(() => {});

const requestListener = (req: http.ClientRequest, res: http.ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log(httpServer.listening);
  res.end('okay');
};

httpServer.on('request', requestListener);

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
