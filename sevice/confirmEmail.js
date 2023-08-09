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
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh;">
  <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); text-align: center; width:100%">
    <img src='https://img.freepik.com/premium-vector/minimal-cosmetics-logo-design_560109-608.jpg' alt="Логотип" style="width: 300px; height: auto;">
    <h2 style="color: #333333; margin-bottom: 10px;">Підтвердження пошти</h2>
    <p style="color: #777777; margin-bottom: 20px;">Дякуємо за реєстрацію! Будь ласка, натисніть на кнопку нижче, щоб підтвердити вашу адресу електронної пошти.</p>
    <a href=${link} style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; border: none; border-radius: 5px; text-decoration: none;">Підтвердити пошту</a>
  </div>
</body>`
        
    })
}

module.exports=sendMail