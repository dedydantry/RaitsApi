const User = require('../model/user.js')

var exports = module.exports = {}

const getUser = () => {
    return new Promise((resolve, reject) => {
        User.get()
            .then(result => {
                if(result === null) return resolve({
                        status:true,
                        data:[]
                })
                result = result.toJSON()
                return resolve({
                    status:true,
                    data:result
                })
            })
            .catch(err => {
                reject(err)
            })
    })
}

exports.index = async(req, res)=>{
    try {
        let user = await getUser()
        return res.json(user)
    } catch (error) {
        throw error
    }
}