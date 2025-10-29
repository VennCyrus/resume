import express from 'express';
import {protect} from '../middleware/authMiddleware.js';
import {createResume, getUserResume, getResumeById, updateResume, deleteResume} from '../controllers/resumeController.js';
import {uploadResumeImages} from '../controllers/uploadimages.js';
import upload from '../middleware/uploadMiddleware.js';

const resumeRouter = express.Router();

resumeRouter.post('/', protect, createResume);
resumeRouter.get('/', protect, getUserResume);
resumeRouter.get('/:id', protect, getResumeById);

resumeRouter.put('/:id', protect, updateResume);
resumeRouter.post('/:id/upload-images', protect, upload.fields([{ name: "thumbnail" }, { name: "profileImage" }]), uploadResumeImages);

resumeRouter.delete('/:id', protect, deleteResume);

export default resumeRouter;