import { emailTemplate } from './template';
import { sendEmail } from '../utils/sendEmail';
import { EmailOptions } from './emailOptions';
import { TemplateOptions } from './templateOptions';

export function contactMessage(data: any) {
  const templateOptions = new TemplateOptions();
	const emailOptions = new EmailOptions('elliot_dev@elliotreed.net');
	emailOptions.subject = 'New contact from elliotreed.net';
	emailOptions.from = `${data.name} <${data.email}>`;

	const content = `
    <tr>
      <td bgcolor="${templateOptions.bgcolor}"
        style="padding: 32px 32px 32px; font-family: sans-serif; font-size: 16px; line-height: 24px; color: ${templateOptions.textColor}; text-align: left;">
        <p>You have a new message from ${data.name}.</p>
        <p style="height: 300px;">${data.message}</p>
      </td>
    </tr>
  `;

	emailOptions.html = emailTemplate(emailOptions.to, content, data.type);
	sendEmail(emailOptions);
	console.log('data: ', data.name);
}
