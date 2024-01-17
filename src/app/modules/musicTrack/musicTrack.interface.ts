import { Model } from "mongoose";
import { URL } from "url";

export type IMusicTrack = {
	title: string;
	artist: string;
	musicUrl: URL;
};

export type MusicTrackModel = Model<IMusicTrack>;

export type IMusicTrackFilter = {
	searchTerm?: string;
	title?: string;
	artist?: string;
	year?: string;
};
