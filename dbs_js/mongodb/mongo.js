
import { MongoClient, ServerApiVersion } from "mongodb"
const password = process.env.MONGODB_PASSWORD
const uri = `mongodb+srv://yishain11:${password}@cluster0.gqjbd9c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const db = await client.db("kodkod");
        const collection = await db.collection("books")
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
