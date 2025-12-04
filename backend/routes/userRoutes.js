import Express from "express";

import {
  authUser,
  registerUser,
  logoutUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
  updateUserById,
} from "../controller/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = Express.Router();

router.route("/login").post(authUser);
router.route("/register").post(registerUser);
router.route("/logout").post(logoutUser);
router.route("/profile").get(protect, getUser);
router.route("/profile").put(protect, updateUser);
router.route("/").get(protect, admin, getUsers);
router.route("/:id").get(protect, admin, getUserById);
router.route("/:id").put(protect, admin, updateUserById);
router.route("/:id").delete(protect, admin, deleteUser);

export default router;
