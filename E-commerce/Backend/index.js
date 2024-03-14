require('dotenv').config();
const express = require('express');
const cors = require('cors');
const user = require('./src/register/user');
const { connectMongoDB } = require('./mongo');
const app = express()
app.use(express.json())
app.use(cors())
app.get('/api/login, ')
