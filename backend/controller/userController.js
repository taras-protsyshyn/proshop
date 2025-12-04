import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/userModel.js";
import { generateAuthCookieOptions } from "../utils/generateAuthCookieOptions.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const cookie = generateAuthCookieOptions(user._id);
  res.cookie(...cookie);

  if (user && (await user.matchPassword(password))) {
    res.json({ _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register user
// @route   POST /api/users/register
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password });

  if (user) {
    const cookie = generateAuthCookieOptions(user._id);
    res.cookie(...cookie);

    res
      .status(201)
      .json({ _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Logout user
// @route   POST /api/users/logout
// @access  Private
export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});

// @desc    Get user profile
// @route   Get /api/users/profile
// @access  Private
export const getUser = asyncHandler(async (req, res) => {
  res.json("Not implemented yet");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUser = asyncHandler(async (req, res) => {
  res.json("Not implemented yet");
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
export const getUsers = asyncHandler(async (req, res) => {
  res.json("Not implemented yet");
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
export const getUserById = asyncHandler(async (req, res) => {
  res.json("Not implemented yet");
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
export const updateUserById = asyncHandler(async (req, res) => {
  res.json("Not implemented yet");
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
export const deleteUser = asyncHandler(async (req, res) => {
  res.json("Not implemented yet");
});
