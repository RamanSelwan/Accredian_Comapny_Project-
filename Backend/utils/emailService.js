// // utils/emailService.js
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

// const sendReferralEmail = async (to, name) => {
//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.EMAIL_PASSWORD
//         }
//     });

//     const mailOptions = {
//         from: process.env.EMAIL,
//         to,
//         subject: "Referral Submission Confirmation",
//         text: `Hello ${name},\n\nYour referral has been successfully submitted!\n\nThank you!`
//     };

//     await transporter.sendMail(mailOptions);
// };

// export default sendReferralEmail;
