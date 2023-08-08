const UserSchema= require('../../models/UserModel.js')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose')

class AuthControler {


     async login(req,res){
        try {
            const {email,password}=req.body
            const User = mongoose.model('User' , UserSchema)
            const user = await User.findOne({email}).exec()
            if(!user._doc){
                return res.json('Неправильно веддені дані')
            }
            const rightPassword = bcrypt.compareSync(password,user.password)
            if(!rightPassword){
                return res.json('Неправильно веддені дані')
            }
            const {password:password1,...userData}  = user._doc
            const token=jwt.sign({id:userData._id},'secretKey12345',{expiresIn:'24h'})
            await res.setHeader('Autorization', token);

            return res.json({userData,token})

        } catch (error) {
            console.log(error)
        }
        
    }

    async getUser(req,res){
        try {
            const User = mongoose.model('User' , UserSchema)
            const user = await User.findById(req.user.id)
            if(!user._doc){
                res.json('Такого юзера немаэ в системі')
            }
            const{password,...userData}=user._doc
            return res.json(userData)

        } catch (error) {
            console.log(error)
        }


    }



    async register(req,res){
        const {email,fullname,password}=req.body
        const salt=await bcrypt.genSalt(5)
        const passwordHash= await bcrypt.hash(password,salt)
        const User =  mongoose.model('User' , UserSchema)
        const isAgainEmail = await User.findOne({email}).exec()
        const isAgainUser = await User.findOne({fullname}).exec()
        if(isAgainUser){
            return res.json('Таке імя вже зайнято. Оберіть інше')
        }
        if(isAgainEmail){
            return res.json('Такий юзер є в системі')
        }
        const doc =  new User({role:'user',email,fullname,password:passwordHash})
        const {password:password1,...userData}  = doc._doc
        await doc.save()
        return res.json(userData)
        
    }


}


module.exports= new AuthControler()

