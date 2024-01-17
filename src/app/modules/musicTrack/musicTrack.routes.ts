import express from "express";
import { MusicTrackController } from "./musicTrack.controller";
import validateRequest from "../../middlewares/validateRequest";
import { MusicTrackValidation } from "./musicTrack.validation";

const router = express.Router();

router.post(
	"/create-musicTrack",
	validateRequest(MusicTrackValidation.createMusicTrackZodSchema),
	MusicTrackController.createMusicTrack
);

router.get("/", MusicTrackController.getAllMusicTracks);

export const MusicRoutes = router;
