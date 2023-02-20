const express = require('express')
const app = express()

app.get('/xyz', (req, res) => {
  res.send('Hello World')
})
// app.put('/', (req, res) => {
//     res.send('This is put method')
//   })
// app.post('/', (req, res) => {
//     res.send('Post')
//   })
// app.delete('/', (req, res) => {
//     res.send('Delete')
//   })


app.listen(3000,()=> {
    console.log("server is running on port 3000")
})