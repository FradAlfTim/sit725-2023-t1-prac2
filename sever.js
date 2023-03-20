var express = require("express")
var app = express()
var port = process.env.port || 3000;

// Tell our application to serve all the files under the `web` directory
app.use(express.static('web'))

//Here we are configuring express to use inbuilt body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));

app.post('/users', function (req, res, next) {
    let username = req.body.name;
    let html = `<h1>Hello ${username}<br>Welcome to my SIT725-WEEK2-Demo<h1s>` ;
    res.send(html);
});

app.get('/number1/:number1/number2/:number2', (req, res) => {
    const one = parseInt(req.params.number1);
    const two = parseInt(req.params.number2);
    const sum = one + two;
    res.send(`The sum of ${one} and ${two} is ${sum}`);
  });

app.listen(port,()=>{
    console.log("App listening to: "+port)
})
