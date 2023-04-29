import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import {
  buySubscription,
  cancelSubscription,
  getRazorPayKey,
  paymentVerification,
} from "../controllers/paymentController.js";
const router = express.Router();

//buy subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);
//verify payment and save reference in database
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

//get razorpay key
router.route("/razorpaykey").get(getRazorPayKey);

//cancel subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription);

export default router;
