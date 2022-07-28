const express = require('express')
const cors = require('cors')

// create application
const app = express()
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Corriendo en el puerto ' + port)
})

app.use(cors())

// def raiz route
app.get('/', (req, res) => {
  res.send('Sevidor en express')
})
