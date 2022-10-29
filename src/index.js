const fs = require('fs');
const path = require('path')
const express = require('express')
const app = express()
app.use(express.static(path.resolve('./public')));

app.get('/', function (req, res) {
    const html = fs.readFileSync('./src/index.html', 'utf8')
    res.send(html)
})

app.get('/cheatSheet', function (req, res) {
    const html = fs.readFileSync('./src/cheatSheet.html', 'utf8')
    res.send(html)
})

app.listen(process.env.PORT || 3000)