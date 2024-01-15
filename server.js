const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './client/dist')));

app.use(cors());

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
