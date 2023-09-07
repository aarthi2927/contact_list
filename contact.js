import express from 'express';
import { client } from './index.js';
import { ObjectId } from 'mongodb';

const router=express.Router();

router.post('/add',async function (req,res){
    const data=req.body;
    console.log(data);
    const adddata=await client.db('contactlist')
    .collection('contact').insertOne(data);
    res.send(adddata);
})

router.get('/view',async function (req,res){
const viewdata=await client.db('contactlist')
.collection('contact').find({}).toArray();
res.send(viewdata);
})

router.get('/:id',async function (req,res){
    const {id}=req.params;
    const o_id=new ObjectId(id);
    console.log(id);
     const viewdatabyid=await client.db('contactlist')
     .collection('contact').findOne({_id:o_id});
     console.log(viewdatabyid);
     viewdatabyid
     ? res.send(viewdatabyid):
     res.status("404").send({message:"404 error "});
 })

router.put('/:id',async function (req,res){
   const {id}=req.params;
   const o_id=new ObjectId(id);
   const updateData=req.body;
   console.log(id);
    const updatedatabyid=await client.db('contactlist')
    .collection('contact').updateOne({_id:o_id},{$set:updateData});
    console.log(updatedatabyid);
    updatedatabyid
    ? res.send(updatedatabyid):
    res.status("404").send({message:"404 error "});
})

router.delete("/:id", async function (req, res) {
    console.log(req.params);
     const{id}=req.params;
     const o_id=new ObjectId(id);
     const result=await client.db('contactlist')
     .collection('contact').deleteOne({_id:o_id});
     console.log(result);
     res.send(result);
     })

 

export const contactrouter=router;