const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 6590;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

app.use(express.static('server/static'));

app.listen(PORT, (req, res)=>{
    console.log(`Listening on port ${PORT}`);
});