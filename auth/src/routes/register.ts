import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const emailValidator = body("email")
  .isEmail()
  .withMessage("A valid email is required");
const pwValidator = body("password")
  .isLength({ min: 8 })
  .withMessage("Password must be at least 8 chars long")
  .isLength({ max: 20 })
  .withMessage("Password must be no more than 20 chars long");

export const getRegisterRoute = (router: Router) => {
  router.post(
    "/users/register",
    [emailValidator, pwValidator],
    function (req: Request, res: Response) {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;
      res.send(`user registed with pw of ${email}`);
    }
  );
};
