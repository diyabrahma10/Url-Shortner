import express from 'express';
import { getLoginController, logoutUser, postLoginController } from '../../controllers/login.controller.js';

const router = express.Router();

router.get('/login', getLoginController);
router.post('/login', postLoginController);
router.route('/logout').get(logoutUser);

export const authLoginRouter = router;