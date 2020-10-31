import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=> {
    res.json({ip: req.connection.remoteAddress});
})

app.post('/post', (req,res)=> {
    console.log(req.params);
    res.json({a: "hello"})
})

app.listen(4000, "0.0.0.0",()=> {
    console.log("You are listening to port 4000")
});