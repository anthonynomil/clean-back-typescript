import userRoutes from "routes/user.routes";
import authRoutes from "routes/auth.routes";

export default [
  {
    path: "/auth",
    router: authRoutes,
  },
  {
    path: "/user",
    router: userRoutes,
  },
];
