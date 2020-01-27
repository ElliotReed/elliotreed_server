import nodemailer from 'nodemailer';

export async function sendEmail(messageToEmail: any) {
	// create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		host: 'mail.elliotreed.net',
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASSWORD,
		},
	});

	// send mail with defined transport object
	const info = await transporter.sendMail(messageToEmail);

	console.log('Message sent: %s', info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}
