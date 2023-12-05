import catchAsync from "utils/catchAsync";
import e from "express";
import userService from "services/user.service";
import httpStatus from "http-status";
import ApiError from "utils/ApiError";
import { ValidatedReq } from "types/express";
import { UserCreate, UserGetById, UserRemove, UserUpdate } from "types/requests/user.requests";

const create = catchAsync(async (req: ValidatedReq<UserCreate>, res: e.Response): Promise<void> => {
  const user = await userService.create(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getById = catchAsync(async (req: ValidatedReq<UserGetById>, res: e.Response): Promise<void> => {
  const user = await userService.getById(req.params.userId);
  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  user.password = undefined;
  res.send(user);
});

const update = catchAsync(async (req: ValidatedReq<UserUpdate>, res: e.Response): Promise<void> => {
  await userService.update(req.params.userId, req.body);
  res.status(httpStatus.NO_CONTENT).send();
});

const remove = catchAsync(async (req: ValidatedReq<UserRemove>, res: e.Response): Promise<void> => {
  await userService.remove(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  create,
  getById,
  update,
  remove,
};
