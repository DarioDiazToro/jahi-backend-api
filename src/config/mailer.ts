import nodemailer from "nodemailer";



export const transporter = nodemailer.createTransport({

    service: process.env.MAILER_SERVICE,
    auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_SECRET_KEY,
    }

});

transporter.verify().then(() => {
    console.log("ready for send emails");
});


