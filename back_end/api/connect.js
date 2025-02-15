// JavaScript
// await sync
// Fullfilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://emanuel0206:wKyxwBdm4QcoOD4N@spotify.x487o.mongodb.net/?retryWrites=true&w=majority&appName=Spotify";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
