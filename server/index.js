import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import PostRoutes from './routes/posts.js';

const app = express();

app.use('/posts', PostRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());



const CONNECTION_URL="mongodb+srv://klaus139:klaus139@memoriesproject.k0h5oxg.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`database connected && Server running on port ${PORT}`)))
.catch((error)=> console.log(error.message)) 


