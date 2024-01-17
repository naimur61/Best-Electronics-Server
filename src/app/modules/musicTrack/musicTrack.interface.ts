import { Model } from "mongoose";
import { URL } from "url";

export type IMusicTrack = {
	title: string;
	artist: string;
	category: string;
	musicUrl: URL;
};

export type MusicTrackModel = Model<IMusicTrack>;

export type IMusicTrackFilter = {
	searchTerm?: string;
	category?: string;
	year?: string;
};
