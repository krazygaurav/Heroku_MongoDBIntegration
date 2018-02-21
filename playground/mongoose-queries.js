const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/Todo");
const {User} =  require("./../server/models/User");

//Quereing the Todos
var id = "5a8bf020dc6e0225a8dac032";

if(!ObjectID.isValid(id))
    return console.log("Wrong ID passed");
Todo.find({
    completed: true
}).then((todos) => {
    if(todos)
        console.log("Todos:",todos);
    else
        console.log("Data not available");
});

Todo.findOne({
    _id: id
}).then((todo) => {
    if(todo)
        console.log("Todo:",todo);
    else
        console.log("Data not available");
});

Todo.findById(id).then((todo) => {
    if(todo)
        console.log("Todo:",todo);
    else
        console.log("Data not available");
}).catch((err) => {
    console.log(err);
});


//Quereing the Users
var user_id = "5a8877ab5ebe7928f4f6e7f8";
if(!ObjectID.isValid(user_id)){
    console.log("Wrong user ID Passed");
    return false;
}
User.findById(user_id).then((user) => {
    if(user)
        console.log("User:",user);
    else
        console.log("User not found");
}).catch((err) => {
    console.log("Error finding User ID", err);
});