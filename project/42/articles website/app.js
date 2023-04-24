const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))


// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});
// ====



// mongoose
const mongoose = require('mongoose');

mongoose
    .connect(
        // "mongodb+srv://ali:c4a@cluster0.hrfrwld.mongodb.net/all-data?retryWrites=true&w=majority"
        "mongodb://ali:c4a@ac-mgdnonw-shard-00-00.hrfrwld.mongodb.net:27017,ac-mgdnonw-shard-00-01.hrfrwld.mongodb.net:27017,ac-mgdnonw-shard-00-02.hrfrwld.mongodb.net:27017/?ssl=true&replicaSet=atlas-vt4lwk-shard-0&authSource=admin&retryWrites=true&w=majority"
    )
    .then((result) => {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })
    .catch((err) => { console.log(err); })

// mongoose.set('strictQuery', true);

// ====


app.get('/', (req, res) => {
    res.redirect('/article')
})


// index
app.get('/article', (req, res) => {
    res.render("index")
})

// add_new_article
app.get('/add_new_article', (req, res) => {
    res.render("add_new_article")
})


// 404
app.use((req, res) => {
    res.status(404).send("Sorry can't find that!")
})





