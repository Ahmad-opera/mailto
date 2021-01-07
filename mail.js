const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const env = require('dotenv');

//Set up ENV
env.config();

const auth = {
    auth: {
        api_key: process.env.api_key,
        domain: process.env.domain
    }
}
const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, phone, openings, role, description, email, company, location, cb) => {
    const mailOptions = { 
        from: email,
        to: 'info.myfuse@gmail.com',
        subject: "User Registration Data!",
        text: `
        name: ${name}
        description: ${description}
        email: ${email}
        phone: ${phone}
        company: ${company}
        location: ${location}
        openings: ${openings}
        role: ${role}
        `
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            cb(err, null);
            console.log(err);
        }else{
            cb(null, data);
        }
    });
}

module.exports = sendMail;