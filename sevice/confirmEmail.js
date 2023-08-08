const nodemailer=require('nodemailer')

const config=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'denmaks432@gmail.com',
        pass:'hemvzujwbmsigkow',
    }
    
})


sendMail = async (to,link) =>{
    await config.sendMail({
        to,
        from:'denmaks432@gmail.com',
        subject:'Активація акаунта',
        text:'',
        html:`
        <div>
        Активація акаунта
        <a href=${link}>link</a>
        </div>`
        
    })
}

module.exports=sendMail