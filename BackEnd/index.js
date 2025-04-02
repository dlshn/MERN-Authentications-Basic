const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT;

const UserRoute = require('./routes/UserRoute');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

//database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch(err => console.error("❌ MongoDB Connection Failed:", err));

app.use('/api/user', UserRoute);





app.listen(port, ()=> console.log(`Listening on ${port}`));