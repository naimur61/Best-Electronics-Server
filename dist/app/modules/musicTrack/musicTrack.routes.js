"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicRoutes = void 0;
const express_1 = __importDefault(require("express"));
const musicTrack_controller_1 = require("./musicTrack.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const musicTrack_validation_1 = require("./musicTrack.validation");
const router = express_1.default.Router();
router.post("/create-musicTrack", (0, validateRequest_1.default)(musicTrack_validation_1.MusicTrackValidation.createMusicTrackZodSchema), musicTrack_controller_1.MusicTrackController.createMusicTrack);
router.get("/", musicTrack_controller_1.MusicTrackController.getAllMusicTracks);
exports.MusicRoutes = router;
