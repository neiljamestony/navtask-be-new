import express from "express";
import { login, register, hasAccess, logout, getUserInfo, checkDbConnection, facebookCallback, googleCallback } from "../controller/AuthController";
import { authenticate } from "../middleware/middleware";
import passport from "passport";

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/hasAccess', authenticate, hasAccess)
router.get("/test", checkDbConnection)
router.post('/logout', logout);
router.get('/getUserData', authenticate, getUserInfo)


router.get("/google", (req, res, next) => {
const state =
typeof req.query.state === "string"
    ? req.query.state
    : undefined;
  passport.authenticate("google", {
    scope: ["email", "profile"],
    state,
  })(req, res, next);
});

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleCallback
);

router.get("/facebook", (req, res, next) => {
const state =
typeof req.query.state === "string"
    ? req.query.state
    : undefined;
  passport.authenticate("facebook", {
    scope: ["email"],
    state,
  })(req, res, next);
});

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { session: false }),
  facebookCallback
);


export default router;