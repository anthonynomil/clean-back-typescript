import express, {Router} from "express";
import messageRouter from "./message.router";

const router: Router = express.Router();

const routes = [{
  path: "/",
  router: messageRouter,
}]


routes.forEach((route) => {
  router.use(route.path, route.router);
})

export default router;
