/* eslint-disable import/no-commonjs */
import { Router } from 'express';

const router = Router();

router.get('/status', (req, res) => res.json({ msg: 'server is runing' }));

router.use('/user', require('./user').default);

export default router;
