import express from 'express';
import * as positionController from '../controllers/positionController.js';

const router = express.Router();

router.get('/all', positionController.getAll);
router.get('/:type', positionController.getPositionByType)

export default router;