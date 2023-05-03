const nodeMailer=require('nodemailer');

 async function NodemailerFunction(email,subject,data){
    let transport = nodeMailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "7f4bbde8d07c63",
          pass: "fbece406b9cab3"
        }
      });
    
    let info = await transport.sendMail({
        from: '7f4bbde8d07c63@gmail.com', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        text: "Hello world?", // plain text body
        html: `
        <html>
        <head>
            <style>
            </style>
        </head>
        <body>
            <p>Hi ${data.name},</p>
            <p>You requested to reset your password.</p>
            <p> Please, click the link below to reset your password</p>
            <a href="http://${data.link}">Reset Password</a>
        </body>
    </html>
        `, // html body
    });
   return data.link;
}


module.exports=NodemailerFunction