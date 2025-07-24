
import express from 'express';
import userRoutes from './src/routes/users.js'; 
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use('/users', userRoutes);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

