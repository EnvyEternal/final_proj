const nodemailer = require('nodemailer')
const {MAIL_MODERATOR, MAIL_MODERATOR_PASSWORD} = require("../constants");

let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com.com',
    service: 'outlook',
    encryption: 'STARTTLS',
    port: 587,
    auth: {
        user: 'squadhelpmoderator@outlook.com',
        pass: 'n+Y"a9nZ7c',
    }
})
module.exports.resultEmailAccept = async(data, offer) =>{
    const user = data.dataValues;
    await transporter.sendMail({
    from: 'squadhelpmoderator@outlook.com',
    to: `${user.email}`,
    subject: 'Result moderation offer',
    text: `Hello dear ${user.firstName} ${user.lastName} your offer ${offer} was moderated and accepted by moderator, congratulations`,
})}

module.exports.resultEmailReject = async(data, offer) =>{
    const user = data.dataValues;
    await transporter.sendMail({
        from: 'squadhelpmoderator@outlook.com',
        to: `${user.email}`,
        subject: 'Result moderation offer',
        text: `Hello dear ${user.firstName} ${user.lastName} your offer ${offer} was moderated and rejected by moderator, good luck next time`,
    })}


