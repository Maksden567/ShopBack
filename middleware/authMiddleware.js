const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next) => {

    try {
        const token = req.headers.authorization
        if(!token){
            return res.json('Помилка при вході  систему')
        }
    
        const decoded = jwt.verify(token,'secretKey12345')
    
        
        req.user=decoded
        next()
    } catch (error) {
        
        console.log(error)

    }

   
}

module.exports = authMiddleware