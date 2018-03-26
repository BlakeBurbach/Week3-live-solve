const express = require('express');
const router = express.Router();

const tasks = [ 
    {name: 'groceries', completed: true},
    {name: 'laundry', completed: false}
 ];

router.get('/', (req, res)=>{
    res.send(tasks);
});

module.exports = router;