import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { contactrouter } from './contact.js';
dotenv.config();
const app=express();
var Port=process.env.PORT || 1000;
app.use(express.json());
const MONGO_URL=process.env.MONGO_URL;
const config = {
    connectTimeoutMS: 5000,
  socketTimeoutMS: 5000,
  useUnifiedTopology: true
  }
async function createConnection()
{
    const client=new MongoClient(MONGO_URL,config);
    await client.connect();
    console.log('mongo is connect')
return client;
}
export const client=await createConnection();
app.get('/',function(req,res){
    res.send('hello world')
})

app.use(cors());
app.use('/contact',contactrouter)
app.listen(Port,function(){
    console.log('server start from port 8000')
})


