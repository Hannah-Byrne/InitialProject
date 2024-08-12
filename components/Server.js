
const express = require('express');
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const app = express();
const uri = 'mongodb+srv://hannahbyrne55:test@test.vjo6v0u.mongodb.net/?retryWrites=true&w=majority&appName=Test';
const client = new MongoClient(uri, {});
const database = client.db('User');
const collection = database.collection('User');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

async function connect(){
    try {
        await mongoose.connect(uri);
     
        console.log("Connected to DB");
        //test upload
        const doc = { user: 'JohnDoe', password: 'Password'  };
        const result = await collection.insertOne(doc);
        //end test upload
        console.log("upload success");

    }catch(error){
        console.error(error);
    }
}
async function readIn(usernameInput, passwordInput){
    try {
        await mongoose.connect(uri);
       // const database = client.db('User');
       // const collection = database.collection('User');
        console.log("Connected to DB");
        const doc = { user:usernameInput, password:passwordInput };
        const result = await collection.findOne(doc);
        console.log('Result:', result);
    }catch(error){
        console.error(error);
} 
}

connect();
//readin();
app.listen(8000,() => {
    console.log("Server started on port 8000");
   
});
