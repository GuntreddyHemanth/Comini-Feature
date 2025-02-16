import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Ensure this is set in .env

async function sendEmail(to, subject, html) {
  const msg = {
    to,
    from: 'guntreddynani3@gmail.com', // Must be verified with Resend
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log('✅ Email sent successfully to', to);
  } catch (error) {
    console.error('❌ Error sending email:', error.response ? error.response.body : error);
  }
}

export default sendEmail;
