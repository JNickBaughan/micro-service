import { Router, Request, Response } from "express";

//todo: make POST route
export const getLoginRoute = (router: Router) => {
  router.get("/users/login", function (req: Request, res: Response) {
    res.send("login handler");
  });
};
