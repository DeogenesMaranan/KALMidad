import express from 'express';
import bodyParser from 'body-parser';

import usersRoute from './route/user.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Routes
app.use('/user', usersRoute);
app.get('/', (req, res) => res.send('Hello from Home Page'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));