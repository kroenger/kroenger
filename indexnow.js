const https = require("https")

const data = JSON.stringify({
    host: "kroenger.org",
    key: "b32bc83dc7b9483984fefe0fbd2273cc",
    keyLocation: "https://kroenger.org/b32bc83dc7b9483984fefe0fbd2273cc.txt",
    urlList: [
        'https://kroenger.org/',
        'https://kroenger.org/about/',
        'https://kroenger.org/calendar/',
        'https://kroenger.org/eco-friendly-tips/',
        'https://kroenger.org/observance-days-api/',
        'https://kroenger.org/social/',
        'https://kroenger.org/wildlife-biology-careers-and-oppurtunities/',
    ]
});

const options = {
    hostname: 'api.indexnow.org',
    path: '/IndexNow',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': data.length
    }
};

const req = https.request(options, (res) => {
    let responseBody = '';

    console.log(`Status Code: ${res.statusCode}`);
    console.log(`Headers: ${JSON.stringify(res.headers)}`);

    res.on('data', (chunk) => {
        responseBody += chunk;
    });

    res.on('end', () => {
        console.log('Response:', responseBody);
    });
});

req.on('error', (e) => {
    console.error('Request error:', e);
});

req.write(data);
req.end();
