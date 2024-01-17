import httpStatus from "http-status";
import { SortOrder } from "mongoose";
import { IMusicTrack } from "./musicTrack.interface";
import { MusicTrack } from "./musicTrack.model";

const createMusicTrackToDB = async (payload: IMusicTrack) => {
	const result = await MusicTrack.create(payload);
	if (!result) {
		throw new Error("Failed to create user!");
		//  httpStatus.EXPECTATION_FAILED,
	}
	return result;
};

// const getSemestersFromDB = async (
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

// const updateSemesterToDB = async (
//   id: string,
//   payload: Partial<IAcademicSemester>,
// ): Promise<IAcademicSemester | null> => {
//   if (
//     payload.code &&
//     payload.title &&
//     academicSemesterTitleCodeMapper[payload.title] !== payload.code
//   ) {
//     throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code!');
//   }

//   const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
//     new: true,
//   });

//   return result;
// };

// const deleteSemesterFromDB = async (
//   id: string,
// ): Promise<IAcademicSemester | null> => {
//   const result = await AcademicSemester.findByIdAndDelete(id);

//   return result;
// };

export const MusicTrackService = {
	createMusicTrackToDB,
	//   getSemestersFromDB,
	//   getSingleSemesterFromBD,
	//   updateSemesterToDB,
	//   deleteSemesterFromDB,
};
//
