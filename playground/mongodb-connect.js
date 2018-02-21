//const MongoClient = require("mongodb").MongoClient;
//Destructuing code
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if(err){
        return console.log("Unable to connect to database");
    }
    var db = client.db("TodoApp");
    console.log("Connected to MongoDB sever");

    // Inserting in Todos collection
    db.collection('Todos').insertOne({
        text: "Something to do",
        completed: true
    }, (err, result) => {
        if(err){
            return console.log("Unable to insert Todo");
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // Inserting in Users collection
    db.collection("Users").insertOne({
        name: "Gaurav Singhal",
        age: 24,
        location: "Jaipur, Rajasthan",
    }, (err, result) => {
        if(err)
            return console.log("Error inserting a document");
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});