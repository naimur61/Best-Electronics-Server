import httpStatus from "http-status";
import { SortOrder } from "mongoose";
import { IMusicTrack } from "./musicTrack.interface";
import { MusicTrack } from "./musicTrack.model";
import { ApiError } from "../../../errors/ApiError";

const createMusicTrackToDB = async (payload: IMusicTrack) => {
	const result = await MusicTrack.create(payload);
	if (!result) {
		throw new ApiError(httpStatus.EXPECTATION_FAILED, "Failed to create user!");
	}
	return result;
};

const getMusicTrackFromDB = async () => {
	console.log("object");
};
// const getMusicTrackFromDB = async (
//   filters: IAcademicSemesterFilter,
//   paginationOptions: IPaginationOptions,
// ): Promise<IGenericResponse<IAcademicSemester[]>> => {
//   const { page, limit, skip, sortBy, sortOrder } =
//     HelperPagination.calculatePagination(paginationOptions);

//   const { searchTerm, ...filtersData } = filters;

//   const andCondition = [];
//   if (searchTerm) {
//     andCondition.push({
//       $or: academicSemesterSearchableFields.map(field => ({
//         [field]: {
//           $regex: searchTerm,
//           $options: 'i',
//         },
//       })),
//     });
//   }

//   if (Object.keys(filtersData).length) {
//     andCondition.push({
//       $and: Object.entries(filtersData).map(([field, value]) => ({
//         [field]: value,
//       })),
//     });
//   }

//   const sortCondition: { [key: string]: SortOrder } = {};
//   if (sortBy && sortOrder) {
//     sortCondition[sortBy] = sortOrder;
//   }

//   const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};

//   const result = await AcademicSemester.find(whereCondition)
//     .sort(sortCondition)
//     .skip(skip)
//     .limit(limit);
//   const total = await AcademicSemester.countDocuments();

//   return {
//     meta: {
//       page,
//       limit,
//       total,
//     },
//     data: result,
//   };
// };

export const MusicTrackService = {
	createMusicTrackToDB,
	getMusicTrackFromDB,
};
