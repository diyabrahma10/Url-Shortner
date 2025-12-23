import express from 'express';
import { getRegisterController } from '../../controllers/register.controller.js';

const router = express.Router();

router.get('/register', getRegisterController);
// router.post('/register', postRegisterController);

export const authRegisterRouter = router;