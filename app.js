
import express from 'express';



import accountRouter from './src/routes/accountRoutes.js';
import positionRoutes from './src/routes/positionRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import './src/schedule/cron.js';

const app = express();
const PORT = 3000;

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  console.log('Request received for root path');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/trade', (req, res) => {
  console.log('Request received for root path');
  res.sendFile(path.join(__dirname, 'public', 'trade.html'));
});

app.get('/account', (req, res) => {
  console.log('Request received for root path');
  res.sendFile(path.join(__dirname, 'public', 'account.html'));
});

/*
app.get('/position', (req, res) => {
  console.log('Request received for root path');
  res.sendFile(path.join(__dirname, 'public', 'positions.html'));
});
*/

app.get('/dashboard', (req, res) => {
  console.log('Request received for root path');
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});


app.use('/accounts', accountRouter);
app.use('/position', positionRoutes);



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

