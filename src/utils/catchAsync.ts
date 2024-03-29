import e from "express";

const catchAsync = (fn: e.RequestHandler | any) => (req: e.Request, res: e.Response, next: e.NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch((err: Error) => {
    next(err);
  });
};

export default catchAsync;
