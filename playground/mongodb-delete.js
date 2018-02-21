const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if(err)
        return console.log("Unable to connect to the Server");
    
    var db = client.db("TodoApp");

    //deleteMany
    // db.collection("Todos").deleteMany({completed: true}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     return console.log("Error while deleting the documents");
    // });

    //deleteOne
    // db.collection("Todos").deleteOne ({completed: true}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     return console.log("Unable to detele the document");
    // });

    //Find one and Delete
    // db.collection("Todos").findOneAndDelete({text: 'task 2'}).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndDelete({_id: new ObjectID("5a853804192ecf31186d70b5")}).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

    client.close();
});