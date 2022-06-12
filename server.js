const express =require('express')
const app = express()

const PORT = 3000
let name = 'Marcus Aurelius'

//app.get('/greeting', (req, res) => {
   // res.send('Hello Stranger!')
//})

  app.get('/greeting/:name', (req, res) => {
   res.send(`Hi there, ${name}!`)
})


app.listen(PORT, (req, res) => {
       console.log(`Server is running on port: ${PORT}`);
})