const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if(err)
        return console.log("Unable to connect to the Server");
    
    var db = client.db("TodoApp");
    
    db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID('5a84027eeae6911c18093d10')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    }, (err) => {
        return console.log("Error occured - "+err);
    });

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5a8537f4192ecf31186d70b4")
    }, 
    {
        $set: {
            name: "Vaibhav"
        },
        $inc: {
            age: 1
        }
    }, 
    {
        returnOriginal: false
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

    client.close();
});