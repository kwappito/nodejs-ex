var nodemailer = require('nodemailer'); // email sender function 

var mailhost = process.env.MAIL_HOST || 'smtp.ethereal.email',
    mailport = process.env.MAIL_PORT || 587,
    mailuser = process.env.MAIL_USER || 'bethany86@ethereal.email',
    mailpass = process.env.MAIL_PASS || 'MwdjcVrFpujaznksKM'

//configuracion smtp
var transporter = nodemailer.createTransport({
    host: mailhost,
    port: mailport,
    auth: {
        user: mailuser,
        pass: mailpass
    }
});

exports.sendEmail = function(req, res){
    // configuracion de envio
    var mailOptions = {
        from: 'Remitente-test',
        to: 'kingforayear@gmail.com',
        subject: 'Asunto -  test mail',
        text: 'Contenido del email',
        html: "<b>Contenido del Mail</b>" // html body
    };

    //envio de mail
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send(500, err.message);
        } else {
            console.log("Email sent");
            res.status(200).jsonp(req.body);
        }
    });
};