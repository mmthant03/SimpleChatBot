const express = require('express');
const bodyParser = require('body-parser');

const verificationController = require('./controllers/verification');
const messageWebHookController = require('./controllers/messageWebhook');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/', verificationController);
app.post('/', messageWebHookController);

app.listen(process.env.port || 3000, () => console.log("Webhook server is listening to port 3000"));