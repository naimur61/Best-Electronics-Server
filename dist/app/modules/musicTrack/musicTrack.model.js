"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicTrack = void 0;
const mongoose_1 = require("mongoose");
const musicTrackSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    musicUrl: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});
exports.MusicTrack = (0, mongoose_1.model)("MusicTrack", musicTrackSchema);
