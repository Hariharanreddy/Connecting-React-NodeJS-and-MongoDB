import mongoose from "mongoose";

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("Database connected.");
}

main().catch(err => console.log(err));

