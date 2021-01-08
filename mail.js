const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'fe15478dceec67438cb9bb98f071d6f9-3d0809fb-2843a11a',
        domain: 'sandboxb495d01e5d4840c8a8a538faf7a154ec.mailgun.org'
    }
}
const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = { 
        from: email,
        to: 'ahmadee.by@gmail.com',
        subject,
        text
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            cb(err, null);
            console.log(err);
        }else{
            cd(null, data);
        }
    });
}

module.exports = sendMail;