// direct connection

// import postgres from "postgres";

// const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });

// try {
//   const students = await sql`SELECT * FROM students`;
//   console.log("data", students);
// } catch (error) {
//   console.error("error", error);
// } finally {
//   await sql.end();
// }

// // supabase client

import { createClient } from "@supabase/supabase-js";
const { SUPABASE_PROJECT_ID, SUPABASE_KEY } = process.env;

// Create a single supabase client for interacting with your database
const supabase = createClient(
  `https://${SUPABASE_PROJECT_ID}.supabase.co`,
  SUPABASE_KEY
);
const { data, error } = await supabase.from("students").select();
if (error) {
  console.log(`error`, error);
} else {
  console.log(`data`, data);
}

// coonect to atlas
//yishain11  xEZ767K0S9QWW7Ly

import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://yishain11:xEZ767K0S9QWW7Ly@cluster0.rkr4plx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
