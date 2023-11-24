import { client } from './index.js';
import { ObjectId } from 'mongodb';
export async function getMovieById(id) {
  const o_id=new ObjectId(id);
  return await client.db("b30wd").collection("movies")
    .findOne({_id:o_id});
}

export async function getAllMovies() {
  return await client.db("b30wd").collection("movies")
    .find({})
    .toArray();
}
export async function deleteMovie(id) {
  const o_id=new ObjectId(id);
  return client.db("b30wd")
    .collection("movies")
    .deleteMany({ _id: o_id });
}
export async function createMovies(data) {
  return await client.db("b30wd")
    .collection("movies").insertOne(data);
}
export async function updateMovie(id, updateData) {
  const o_id=new ObjectId(id);
  return client.db("b30wd")
    .collection("movies") 
    .updateOne({ _id: o_id }, { $set: updateData });
}
