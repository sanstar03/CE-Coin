const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const app = express();
const web3 = require('./web3');
const {abi,CheckInCoin} = require('./abi');


app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(8000, () => console.log("Server is running 8000"));