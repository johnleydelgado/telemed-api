// import express from "express";
import express from 'express';
import { createMeeting } from '../controllers/main.controller.js';

const router = express.Router();
// Auth routes
router.post('/createMeeting', createMeeting);

export default router;
