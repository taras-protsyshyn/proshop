import jwt from "jsonwebtoken";

export const generateAuthCookieOptions = (userId, cookieName = "jwt") => {
  return [
    cookieName,
    jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "30d" }),
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  ];
};
