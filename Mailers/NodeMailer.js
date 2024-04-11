import { createTransport } from "nodemailer";

//creating transport to send mail
export const transport=createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth:{
        user: "belle.blick37@ethereal.email",
        pass: "mAgdAXxxKzdNjturdp",
    },
})