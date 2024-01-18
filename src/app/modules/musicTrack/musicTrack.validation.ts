import { z } from "zod";

const createMusicTrackZodSchema = z.object({
	body: z.object({
		title: z.string({
			required_error: "Title is required",
		}),
		artist: z.string({ required_error: "Artist is required" }),
		category: z.string({ required_error: "Category is required" }),
		musicUrl: z
			.string({
				required_error: "Url is required",
			})
			.url(),
	}),
});

export const MusicTrackValidation = {
	createMusicTrackZodSchema,
};
