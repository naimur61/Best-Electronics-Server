import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
// import { AcademicMusicTrackService } from './academicMusicTrack.service';
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { MusicTrackService } from "./musicTrack.service";
// import pick from '../../../shared/pick';
// import paginationKey from '../../../constants/constants';
// import { IAcademicMusicTrack } from './academicMusicTrack.interface';
// import { academicMusicTrackFilterableFields } from './academicMusicTrack.constant';

const createMusicTrack: RequestHandler = catchAsync(async (req, res) => {
	const { ...musicTrackData } = req.body;

	const result = await MusicTrackService.createMusicTrackToDB(musicTrackData);

	sendResponse(res, {
		statuscode: httpStatus.OK,
		success: true,
		message: "MusicTrack successfully created!",
		data: result,
	});
});

// const getAllMusicTracks: RequestHandler = catchAsync(async (req, res) => {
//   const filters = pick(req.query, academicMusicTrackFilterableFields);
//   const paginationOptions = pick(req.query, paginationKey);

//   const result = await AcademicMusicTrackService.getMusicTracksFromDB(
//     filters,
//     paginationOptions,
//   );

//   sendResponse<IAcademicMusicTrack[]>(res, {
//     statuscode: httpStatus.OK,
//     success: true,
//     message: 'MusicTracks retrieved successful!',
//     meta: result.meta,
//     data: result.data,
//   });
// });

// const updateMusicTrack: RequestHandler = catchAsync(async (req, res) => {
//   const id = req.params.id;
//   const body = req.body;

//   const result = await AcademicMusicTrackService.updateMusicTrackToDB(id, body);

//   sendResponse<IAcademicMusicTrack>(res, {
//     statuscode: httpStatus.OK,
//     success: true,
//     message: 'Updated successful!',
//     data: result,
//   });
// });

// const deleteMusicTrack: RequestHandler = catchAsync(async (req, res) => {
//   const id = req.params.id;

//   const result = await AcademicMusicTrackService.deleteMusicTrackFromDB(id);

//   sendResponse<IAcademicMusicTrack>(res, {
//     statuscode: httpStatus.OK,
//     success: true,
//     message: 'Deleted successful!',
//     data: result,
//   });
// });

export const AcademicMusicTrackController = {
	createMusicTrack,
	//   getAllMusicTracks,
	//   getSingleMusicTrack,
	//   updateMusicTrack,
	//   deleteMusicTrack,
};
