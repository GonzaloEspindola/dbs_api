const express = require('express')
const path = require('path')
const cors = require('cors')

// create application
const app = express()
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Corriendo en el puerto ' + port)
})

app.use(cors())
app.use(express.static(__dirname + '/public/'))

// def raiz route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/es/index.html'))
})
