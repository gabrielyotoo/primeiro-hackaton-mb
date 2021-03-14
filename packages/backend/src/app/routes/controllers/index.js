/* eslint-disable import/no-commonjs */
import { Router } from 'express';

const router = Router();

router.get('/status', (req, res) => res.json({ msg: 'server is runing' }));

router.use('/user', require('./UserController').default);
router.use('/session', require('./SessionController').default);
router.use('/target', require('./TargetController').default);
router.use('/goal', require('./GoalController').default);
router.use('/comment', require('./CommentController').default);

export default router;
