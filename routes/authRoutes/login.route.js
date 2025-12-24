import express from 'express';
import { getLoginController } from '../../controllers/login.controller.js';

const router = express.Router();

router.get('/login', getLoginController);
// router.post('/login', postLoginController);

export const authLoginRouter = router;