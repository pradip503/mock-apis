const express = require('express');
const app = express();


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/ecommerce/success', (req, res) => {
    res.status(200).send({
        statusCode: 200,
        apiName: "Ecommerce Service",
        description: "This is up sample api!"
    });
});


app.get('/comment/success', (req, res) => {
    res.status(200).send({
        statusCode: 200,
        apiName: "Comment Service",
        description: "This is up sample api!"
    });
});

app.get('/payment/success', (req, res) => {
    res.status(200).send({
        statusCode: 200,
        apiName: "Payment Service",
        description: "This is up sample api!"
    });
});

app.get('/demo/failure', (req, res) => {
    res.status(500).json({
        statusCode: 500,
        apiName: "Messaging Service",
        description: "This is down sample api!"
    });
});

app.listen(4000, (error) => {
    if(error) {
        console.log(error);
    }
    console.log('Listening on 4000..');
});