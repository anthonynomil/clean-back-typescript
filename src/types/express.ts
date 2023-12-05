import e from "express";

export type Route = {
  path: string;
  router: e.Router;
};

type ExtractedSchema<T> = {
  body: T extends { body: infer B } ? B : never;
  params: T extends { params: infer P } ? P : never;
  query: T extends { query: infer Q } ? Q : never;
};

export type ValidatedReq<T> = Request & {
  body: ExtractedSchema<T>["body"];
  params: ExtractedSchema<T>["params"];
  query: ExtractedSchema<T>["query"];
};
