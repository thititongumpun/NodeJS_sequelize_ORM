const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 5500;

//cors and middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Api is ready');
})

//route
const Task = require('./routes/routes');
app.use('/api/task', Task)

//start server
app.listen(port, () => {
    console.log(`listening on port `, {port});    
})

app.use((req, res, next) => {
    let err = new Error("Wrong path");
    err.status = 404;
    next(err);
})


