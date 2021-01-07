const express = require('express');
const app = express();
const env = require('dotenv');
const path = require('path');
const sendMail = require('./mail');

//Set up ENV
env.config();

const log = console.log;

app.use(express.static(__dirname + "/public"));

//Data parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/email', (req,res)=>{
    //SEND EMAIL HERE
    const {name, phone, openings, role, description, email, company, location} = req.body;
    sendMail(name, phone, openings, role, description, email, company, location, function(err,data){
        if(err){
            res.status(500).send({message: "Server Error!"});
        }else{
            res.json({message: "Email Sent!!"})
        }
    })
})


app.get('/jobpost', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'jobpost.html'));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.listen(3000, () => { log('App listening on port 3000!');});
