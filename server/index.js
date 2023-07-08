// express is defacto means default for creating server
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import "./db/conn.js";
import {Users} from "./models/userSchema.js"

const port = 8000;
const app = express();
app.use(cors());
app.use(bodyParser.json());


//API
app.post("/demo", async (req, res) => {
    
    try {
        const {username, password} = req.body;
        console.log(req.body);

        //creating new object
        let user =  new Users();

        user.username = username;
        user.password = password;

        const doc = await user.save();      //returns a document
        
        res.status(200).json({status: 200, message: doc});

    } catch (error) {
        res.status(400).json({status: 400, message: error});
    }
})

app.get("/demo", async (req, res) => {
    try {

        const users = await Users.find({});
        res.json(users);
    
    } catch (error) {
        res.status(400).json({status: 400, message: error});
    }
})




//SERVER LISTENING
app.listen(port, (req, res) => {
    console.log(`Server working at port : ${port}`);
})

