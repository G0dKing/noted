const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/data', cors(), (req, res) => {
    // Your code here
});

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/noted', {
  // MongoDB options
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(express.static(path.join(__dirname, './client/dist')));

const indexPath = path.join(__dirname, './client/dist/index.html');

app.get('*', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
