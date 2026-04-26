//Load env variables into process.env
require('dotenv').config();

const express = require('express'); // build HTTP APIs 
const { Pool } = require('pg');   // connect Node → PostgreSQL --- > PostgreSQL client 
const cors = require('cors');     // allow your React app (different port) to call the API
const bcrypt = require('bcrypt'); // hash passwords (never store plain text
//const jwt = require('jsonwebtoken'); // login → issue token (auth) 

const app = express();


//Middleware -> allows JSON from frontend / postman
app.use(express.json());
app.use(cors());

//DB connection

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'userdb',
    password: 'pass',
    port: 5432,
});

//signup 
app.post('/api/signup', async (req, res) => {
    
    const { username, password,role } = req.body;

    //hash password (security)
    const hashed = await bcrypt.hash(password, 10);

    try {
        await pool.query(
            `INSERT INTO users (username,password,role) VALUES ($1, $2, $3)`,
            [username, hashed,role]
        );

        res.json({ message: "User Created" });
    } catch (err) {
        res.status(400).json({ message: "User already exits" });
    }
});

// login user
app.post('/api/login', async (req,res)=>{
    const {username,password} = req.body;

    const result = await pool.query(
        `SELECT *FROM users WHERE username=$1`,
        [username]
    );

    const user = result.rows[0];
    
    if(!user){
        return res.status(401).json({message:"User not found"});
    }

    //compare password

    const match = await bcrypt.compare(password,user.password);
    if(!match){
       return res.status(401).json({message:"Wrong password"});
    }

    res.json({message:"Login Success"});
}) 


// get user details 

app.get('/api/users',async (req,res)=>{
    const result = await pool.query(
        `SELECT id, username FROM users`
    );

    res.json(result.rows);
});



app.listen(8000, () => console.log("Server started..."));

