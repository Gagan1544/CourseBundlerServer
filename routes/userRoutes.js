import express from "express";
import {
  register,
  login,
  logout,
  getMyProfile,
  changePassword,
  updateProfile,
  updateProfilePicture,
  forgetPassword,
  resetPassword,
  addToPlayList,
  deleteFromPlayList,
  getAllUsers,
  updateUserRole,
  deleteUserProfile,
  deleteMyProfile,
} from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
const router = express.Router();

router.route("/register").post(singleUpload, register);

//Login
router.route("/login").post(login);
//Logout
router.route("/logout").get(logout);
//Get my profile
router.route("/me").get(isAuthenticated, getMyProfile);
//delete my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);
//ChangePassword
router.route("/changepassword").put(isAuthenticated, changePassword);
//UpdateProfile
router.route("/updateprofile").put(isAuthenticated, updateProfile);
//UpdateProfilePicture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateProfilePicture);
//ForgetPassword
router.route("/forgetpassword").post(forgetPassword);
//ResetPassword
router.route("/resetpassword/:token").put(resetPassword);
//AddtoPlayList
router.route("/addtoplaylist").post(isAuthenticated, addToPlayList);

//RemoveFromPlayList
router.route("/deletefromplaylist").delete(isAuthenticated, deleteFromPlayList);

//admin routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);
router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUserProfile);
export default router;
