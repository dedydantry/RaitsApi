// var exports = module.exports = {}
// const jwt = require('jsonwebtoken');
// const User = require('../model/user')
// const config = require('../config/config')


// exports.secret = (req, res, next) =>{
//     res.secret = config.secret
//     next()
// }

// exports.validateToken = async(req, res,next) =>{
//     const tokens = req.body.token || req.query.token || req.headers['x-access-token'];
//     if(tokens){
//         jwt.verify(tokens, res.secret, function(err, decoded) {      
//             if (err) {
//               return res.json({ success: false, message: 'Failed to authenticate token.' });    
//             } else {
//               // if everything is good, save to request for use in other routes
//               req.decoded = decoded;    
//               next();
//             }
//           });
//     }

//     else {
        
//         return res.status(403).send({ 
//             success: false, 
//             message: 'No token provided.' 
//         }); 
        
//     }
// }