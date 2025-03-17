const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Parse JSON bodies
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  // Simple route for testing
  // server.get('/', (req, res) => {
  //   return res.send('Hello World!');
  // });

  // Let Next.js handle other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(3006, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3006');
  });
});
