const express = require('express')
const { getUsers } = require('./controllers/user-controller')

const app = express()

app.get('/users', getUsers)


app.listen(8000, () => {
  console.log('server is up an running!')
})