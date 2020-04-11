// this is our controller file

const knex = require('knex')
const app = require('./app')
const { PORT, DB_URL } = require('./config')

// creating a knex instance here so the connection is explicit
const db = knex({
  client: 'pg',
  connection: DB_URL,
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})