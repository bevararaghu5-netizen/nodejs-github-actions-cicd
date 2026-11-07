const http = require('http');

const PORT = process.env.PORT || 3000;

function createServer() {
    return http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.end(JSON.stringify({
            message: 'Hello! Node.js CI/CD Pipeline is working!',
            status: 'Success',
            application: 'GitHub Actions CI/CD Demo'
        }));
    });
}

if (require.main === module) {
    const server = createServer();

    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = { createServer };