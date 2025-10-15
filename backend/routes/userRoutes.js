import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)

//PROTECTED ROUTE AS TOKEN WILL BE REQUIRED
router.get('/profile', protect, getUserProfile)

export default router;