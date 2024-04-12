const Express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');



const app = Express();
const userroute = require('./routes/user.route');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//routes
app.use('/', userroute);



app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../frontend', 'sighnup.in.html');
    res.sendFile(filePath);
});






app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

mongoose.connect('mongodb+srv://lewis:admin@cartopiabackend.1ki1ie4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=cartopiabackend')
.then(() => {
    console.log('connected to database');
})
.catch(err => {
    console.log(err);
});



