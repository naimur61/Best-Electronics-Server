import express from "express";
import { AcademicMusicTrackController } from "./musicTrack.controller";
// import validateRequest from '../../middlewares/validateRequest';
// import { MusicTrackValidation } from './MusicTrack.validation';

const router = express.Router();

router.post("/create-musicTrack", AcademicMusicTrackController.createMusicTrack);

// router.patch(
//   '/:id',
//   validateRequest(MusicTrackValidation.updateMusicTrackZodSchema),
//   MusicTrackController.updateSemester,
// );

// router.delete("/:id", MusicTrackController.deleteSemester);
// router.get("/", MusicTrackController.getAllSemesters);
// router.get("/:id", MusicTrackController.getSingleSemester);

export const MusicRoutes = router;
