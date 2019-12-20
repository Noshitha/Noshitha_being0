/*console.log("Hello World!..")*/
const express = require('express')
const app = express()
const port = process.env.PORT || 3000 
app.use(express.static('frontend')) //get every css of js or html or image files from frontend folder
var student = {}
student.name="Noshitha"
student.clg="VNRVJIET"
student.regno="17071A12D8"
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html')) //we can also use res.sendFile and res.json accordingly
app.get('/login', (req, res) => res.send('Login Here ...'))
app.get('/resgister', (req, res) => res.send('Register Here'))
app.get('/data', (req, res) => res.json(student))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))