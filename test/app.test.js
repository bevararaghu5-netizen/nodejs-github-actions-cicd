const { test } = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../src/app');

test('Application should return successful response', async () => {

    const server = createServer();

    await new Promise((resolve) => {
        server.listen(0, resolve);
    });

    try {
        const address = server.address();

        const response = await fetch(
            `http://127.0.0.1:${address.port}`
        );

        const data = await response.json();

        assert.strictEqual(response.status, 200);

        assert.strictEqual(data.status, 'Success');

        assert.strictEqual(
            data.application,
            'GitHub Actions CI/CD Demo'
        );

    } finally {
        await new Promise((resolve, reject) => {
            server.close((error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
});