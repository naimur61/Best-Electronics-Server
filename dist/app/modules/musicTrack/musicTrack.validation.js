"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicTrackValidation = void 0;
const zod_1 = require("zod");
const createMusicTrackZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }),
        artist: zod_1.z.string({ required_error: "Year is required" }),
        musicUrl: zod_1.z
            .string({
            required_error: "Code is required",
        })
            .url(),
    }),
});
exports.MusicTrackValidation = {
    createMusicTrackZodSchema,
};
