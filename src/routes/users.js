// routes/users.js
import express from 'express';

const router = express.Router();

// GET /users
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});



export default router;
