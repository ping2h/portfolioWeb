import express from 'express';
import assetListController from '../controllers/assetListController.js';

const router = express.Router();

router.get('/getall', assetListController.getAssetList);

export default router;