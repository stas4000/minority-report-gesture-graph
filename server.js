const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 8080);

function send(res, status, body, type = 'text/html; charset=utf-8') {
  res.writeHead(status, {
    'Content-Type': type,
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/healthz') {
    return send(res, 200, JSON.stringify({ ok: true }), 'application/json; charset=utf-8');
  }

  if (url.pathname === '/' || url.pathname === '/index.html') {
    return send(res, 200, fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'));
  }

  return send(res, 404, JSON.stringify({ ok: false, error: 'Not found' }), 'application/json; charset=utf-8');
});

server.listen(PORT, () => {
  console.log(`minority-report-gesture-graph listening on http://127.0.0.1:${PORT}`);
});
