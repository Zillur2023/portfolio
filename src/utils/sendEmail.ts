import config from '@/config';
import nodemailer from 'nodemailer';
// import config from '../config';

// export const sendEmail = async (to: string, html: string) => {
export const sendEmail = async (data: {name:string, email:string, message: string}) => {
    const {name, email , message} = data
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production', // Use TLS in production
    auth: {
      user: 'zillurrahmanbd12@gmail.com',
      pass: config.send_email_secret
    },
  });

  try {
    await transporter.sendMail({
    //   from: "zillurrahmanbd12@gmail.com", 
      from: email, 
      to: "zillurrahmanbd12@gmail.com", // list of receivers
      subject: 'Reset your password within ten minutes!', // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
      html:"", // HTML body
    });
  } catch (error) {
    console.error(`Error sending email: ${error}`);
  }

};
