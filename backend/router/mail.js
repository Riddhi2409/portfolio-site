const express = require('express')
const Message = require('../model/message.model')
const nodemailer = require('nodemailer')

const router=express.Router();

router.post('/',(req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const userMessage = `Hey, I am ${req.body.name}. My email is ${req.body.email}. (subject - ${req.body.subject}) My message is ${req.body.message}.`;

    const mailOptions={
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "CONTACT REQUEST FROM PORTFOLIO",
        text: userMessage
    }
     transporter.sendMail(mailOptions,(error,info)=>{
        if (error){
            console.log(error)
            res.send('error');
        }
        else {
            console.log(info)
            res.send('success')
        }
     })
})

module.exports=router;