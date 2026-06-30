const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
