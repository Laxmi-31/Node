const express = require('express')
const app = express()
const port = 8000

const data=require('./getTimeStories.json')
app.get('/getTimeStories', function (_req, res) {
    res.json(data);
  })

app.get('/', (req, res) => res.send('Home!'))
app.listen(port, () => console.log(` app listening on port ${port}!`))