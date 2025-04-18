import mongo from './database/mongoose.js';
import express from 'express';
import cors from 'cors';
import getBugs from './controllers/getBugs.js';
import addBugs from './controllers/addBugs.js';
import dotenv from 'dotenv';


const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    withCredentials: true,
}));
app.use(express.json());
dotenv.config();

mongo();

app.get('/bugs', getBugs);
app.post('/bugs', addBugs)

const runApp = async () => {
    try{
        await app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT || 5000}`);
        });
    }
    catch(error){
        console.error('Error starting the server:', error);
    }
}

runApp();