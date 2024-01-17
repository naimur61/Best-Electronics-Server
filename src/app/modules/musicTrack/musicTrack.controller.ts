import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { MusicTrackService } from "./musicTrack.service";
import pick from "../../../shared/pick";
import paginationKey from "../../../constants/constants";
import { IMusicTrack } from "./musicTrack.interface";
import { musicTrackFilterableFields } from "./musicTrack.constant";

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

const getAllMusicTracks: RequestHandler = catchAsync(async (req, res) => {
	const filters = pick(req.query, musicTrackFilterableFields);
	const paginationOptions = pick(req.query, paginationKey);

	const result = await MusicTrackService.getMusicTrackFromDB(filters, paginationOptions);

	sendResponse<IMusicTrack[]>(res, {
		statuscode: httpStatus.OK,
		success: true,
		message: "MusicTracks retrieved successful!",
		meta: result.meta,
		data: result.data,
	});
});

export const MusicTrackController = {
	createMusicTrack,
	getAllMusicTracks,
};
