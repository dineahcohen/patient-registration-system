const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/dB');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const auth = require('./routes/auth.routes')
app.use('/api/auth', auth);

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});