const express = require('express');
const app = express();
const path = require('path');
const sendMail = require('./mail');

const log = console.log;

//Data parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/email', (req,res)=>{
    //SEND EMAIL HERE
    const {subject, email, text} = req.body;
    sendMail(email, subject, text, function(err,data){
        if(err){
            res.status(500).send({message: "Server Error!"});
        }else{
            res.json({message: "Email Sent!!"})
        }
    })
})


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.listen(3000, () => { log('App listening on port 3000!');});
