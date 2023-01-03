const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()
app.use('/public', express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));

const noob = (name) => {
    return path.join(__dirname,'static','templates',name);
}

app.get('/', (req, res)=>{
    res.sendFile(noob("index.html"))
})

app.post('/get', (req, res)=>{
    res.send("Submitted! " + req.body)
})

app.get('/get', (req, res)=>{
    res.send(req.query.name + " " + toString(req.query.age))
})

console.log("Listening at port:3000 http://127.0.0.1:3000")
app.listen("3000")