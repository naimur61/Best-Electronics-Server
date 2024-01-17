import express from "express";
import { AcademicMusicTrackController } from "./musicTrack.controller";
import validateRequest from "../../middlewares/validateRequest";
import { MusicTrackValidation } from "./musicTrack.validation";
// import validateRequest from '../../middlewares/validateRequest';
// import { MusicTrackValidation } from './MusicTrack.validation';

const router = express.Router();

router.post(
	"/create-musicTrack",
	validateRequest(MusicTrackValidation.createMusicTrackZodSchema),
	AcademicMusicTrackController.createMusicTrack
);

export const MusicRoutes = router;
