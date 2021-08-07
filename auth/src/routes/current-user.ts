import { Router, Request, Response } from "express";

export const getCurrentUserRoute = (router: Router) => {
  router.get("/users/current-user", function (req: Request, res: Response) {
    res.send("current user handler");
  });
};
