import { Router, Request, Response } from "express";

//todo: make POST route
export const getLogoutRoute = (router: Router) => {
  router.get("/users/logout", function (req: Request, res: Response) {
    res.send("log out handler");
  });
};
