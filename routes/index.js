var nodemailer = require('nodemailer');

exports.sendInvite = function(req, res, next) {
    var mailOpts, smtpConfig;

    smtpConfig = nodemailer.createTransport('SMTP', {
        service: 'Gmail',
        auth: {
            user: process.env.user,
            pass: process.env.pass
        };
    });

    mailOpts = {
        from: req.body.name + ' &lt;' + 'denverdaniels52@gmail.com' + '&gt;',
        to: req.body.email,
        subject: 'battle tanks',
        text: req.body.message + '. http://host'
    };

    smtpConfig.sendMail(mailOpts, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log(response);
        };
        res.redirect('/');
    });
};
