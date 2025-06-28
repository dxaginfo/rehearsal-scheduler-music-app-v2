const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('API is running'));
// Implement API routes for users, events, attendance, etc.
app.listen(4000, () => console.log('API listening on 4000'));
