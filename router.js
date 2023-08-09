import Router from 'express';
import bikControllers from './src/controllers/BikController.js';

const router = new Router();

router.get('/bik', bikControllers.getBik)

export default router;