const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.static('public'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(15000)