import express from 'express';
import Routes from './route.js';

const router = express.Router();
router.get('/', (req, res) => {
  res.send('Welcome To Telemed');
});
router.use(Routes);
export default router;
