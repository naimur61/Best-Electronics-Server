"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const musicTrack_routes_1 = require("../modules/musicTrack/musicTrack.routes");
const router = express_1.default.Router();
const modulesRoute = [
    { path: "/music", router: musicTrack_routes_1.MusicRoutes },
    //   { path: '/user', router:   },
];
modulesRoute.forEach((route) => router.use(route.path, route.router));
exports.default = router;
