var express = require("express");
var bodyParser = require("body-parser");

//Local imports
var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");
var {ObjectID} = require("mongodb");

var app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());

app.post('/todos', (request, response) => {
    var todo = new Todo({
        text: request.body.text
    });
    todo.save().then((doc) => {
        response.send(doc);
    }, (err) => {
        response.status(400).send(err);
        console.log("Error occured while saving");
    });
});
app.get('/todos', (request, response) => {
    Todo.find().then((todos) => {
        response.send({
            todos,
            code: 'success'
        });
    }, (e) => {
        response.status(404).send(e);
    });
});
//Get specific TODO
app.get("/todos/:id", (request, response) => {
    var id = request.params.id;
    if(ObjectID.isValid(id)){
        Todo.findById(id).then((todo) => {
            if(todo)
                response.send({todo: todo});
            else
                response.status(404).send({status:"Todo not found"});
        }).catch((err) => {
            console.log("Error occured: ", err);
            response.send({status:"Error occured"});
        });
    }else{
        response.status(404).send({status: "Invalid ID"});
    }
});

app.listen(port, ()=> {
    console.log("Started on Port @",port);
});

module.exports = {app};