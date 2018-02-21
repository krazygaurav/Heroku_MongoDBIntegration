const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if(err)
        return console.log("Unable to connect to MongoDB");
    var db = client.db("TodoApp");
    console.log("Connected to MongoDB Server");
    
    //Getting documents using Object ID
    db.collection("Todos").find({_id: new ObjectID('5a84027eeae6911c18093d10')}).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log("Unable to fetch the results");
    });

    //Getting total documents
    db.collection("Todos").find().count().then((count) => {
        console.log(`Total Todos in Collections are ${count}`);
    }, (err) => {
        console.log("Problem getting all the Todos");
    });

    //
    db.collection("Users").find({name: 'Gaurav Singhal'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
        if(err)
            return console.log("Error finding names");
    });
    client.close();
});