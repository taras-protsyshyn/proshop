import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "jone@com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Anna Doe",
    email: "anna.jane@com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
