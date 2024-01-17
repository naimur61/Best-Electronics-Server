import express from "express";
import { MusicRoutes } from "../modules/musicTrack/musicTrack.routes";

const router = express.Router();

const modulesRoute = [
	{ path: "/music", router: MusicRoutes },
	//   { path: '/user', router:   },
];

modulesRoute.forEach((route) => router.use(route.path, route.router));

export default router;
