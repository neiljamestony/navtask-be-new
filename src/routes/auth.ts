import express from "express";
import { login, register, hasAccess, logout, getUserData } from "../controller/AuthController";
import { authenticate } from "../middleware/middleware";
import passport from "passport";

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/hasAccess', authenticate, hasAccess)
router.post('/logout', logout);
router.get('/getUserData', authenticate, getUserData)


// router.get('/google', passport.authenticate("google", {
//     scope: ["email", "profile"],
//     state: "http://localhost:5173/register"
// }), google);

// router.get(
//   "/google/callback",
//   passport.authenticate("google", { session: false }),
//   googleCallback
// );

// router.get('/facebook', passport.authenticate("facebook", {
//     scope: ["email"],
//     state: "http://localhost:5173/register"
// }), facebook);

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", { session: false }),
//   facebookCallback
// );


export default router;