const knex = require ('knex')
const bookshelf = require ('bookshelf')
const eloquent = require ('bookshelf-eloquent')

const main = knex({
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : '121212',
      database : 'dropy',
      charset  : 'utf8'
    }
});

const DB = bookshelf(main)
// DB.plugin('registry')
DB.plugin(eloquent)

module.exports = DB