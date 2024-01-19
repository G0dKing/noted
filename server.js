// server.js

const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('./api/data' , cors(), (req, res) => {

});

app.use('/api/auth', authRoutes);

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

mongoose.connect('mongodb://localhost/noted', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './client/dist')));

app.use('/api/auth', authRoutes);

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

const indexPath = path.join(__dirname, './client/dist/index.html');

app.get('*', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
