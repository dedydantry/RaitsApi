var exports = module.exports = {}
const User = require('../model/user')
const jwt = require('jsonwebtoken');

exports.index = async(req, res)=>{
    let result = await User.find()
    return res.json(result)
}

exports.add = async(req, res) => {
    try {

        const save = await new User(req.body)
        await save.save()
        return res.json(save)

    } catch (err) {
        res.json(err)
    }

}

exports.tokens = async(req, res) => {
    const users =  await User.findOne({ "_id": req.params.user_id});

    const token = await jwt.sign({ id: users.email, role: users.role }, res.secret, { expiresIn: 60 * 60 });
    res.cookie('auth', token);
    return res.json({token : token});
}