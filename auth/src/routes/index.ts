import express from "express";
import { getLoginRoute } from "./login";
import { getLogoutRoute } from "./logout";
import { getCurrentUserRoute } from "./current-user";
import { getRegisterRoute } from "./register";

var router = express.Router();

[getLoginRoute, getLogoutRoute, getCurrentUserRoute, getRegisterRoute].forEach(
  (route) => route(router)
);

export default router;
