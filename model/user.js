const DB = require('../config/mysql.js')

const User = DB.model('User', {
    tableName: 'admin_users'
})

module.exports = User