import { Router, Request, Response } from "express";

//todo: make POST route
export const getRegisterRoute = (router: Router) => {
  router.get("/users/register", function (req: Request, res: Response) {
    res.send("register handler");
  });
};
