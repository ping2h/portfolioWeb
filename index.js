// index.js
import express from 'express';
import userRoutes from './src/routes/users.js'; 

const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


app.use('/users', userRoutes);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

