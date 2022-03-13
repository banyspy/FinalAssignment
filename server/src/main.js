const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const jwt = require('jsonwebtoken')
const app = express()
const port = 8080

let total = 0;

app.post('/increase', (req, res)=>{
    total++;
})

app.post('/refresh', (req, res)=>{
  res.json({data:number})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
