const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

const taskRouter = require('./modules/task.router');
app.use('/tasks', taskRouter);

app.use(express.static('server/public'));

app.listen(PORT, (req, res)=>{
    console.log(`Listening on port ${PORT}`);
});