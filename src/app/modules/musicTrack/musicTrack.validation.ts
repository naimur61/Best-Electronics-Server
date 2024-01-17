import { z } from "zod";

const createMusicTrackZodSchema = z.object({
	body: z.object({
		title: z.string({
			required_error: "Title is required",
		}),
		artist: z.string({ required_error: "Year is required" }),
		musicUrl: z
			.string({
				required_error: "Code is required",
			})
			.url(),
	}),
});

export const MusicTrackValidation = {
	createMusicTrackZodSchema,
};
