const express = require("express");
const app = express();
const videos = require("./routes/videos");
const cors= require('cors')
const { v4: uuidv4 } = require('uuid');



app.use(cors())
app.use(express.json());


app.use(express.static('./public/'))



app.use("/videos", videos);

app.listen(8080, ()=>{
    console.log("the app is listening on port 8080")
})


