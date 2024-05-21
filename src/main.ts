// Import necessary modules
import express from 'express';
import bodyParser from 'body-parser';


// Initialize Express application
const app = express();
const PORT = process.env.PORT || 3000;
const dao = require('./dao/userDao');

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Example route
app.get('/users', async (req:any, res:any) => {
    try {
        const users = await dao.getAllUsers();
        res.json(users);
      } catch (err: any) {
        res.status(400).json({ error: err.message });
      }
});

app.post('/users', async (req, res) => {
    try {
      const user = await dao.createUser(req.body);
      res.json(user);
    } catch (err:any) {
      res.status(400).json({ error: err.message });
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
