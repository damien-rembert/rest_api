const { Router } = require("express");
// const { addUser } = require("./userControllers");
// const { hashPassword } = require("../middleware");
// const userRouter = Router();

// userRouter.post("/user", hashPassword, addUser);

// use compare and check password


const { addUser, login, updatePassword } = require("./userControllers");
const { hashPassword, decryptPassword, checkToken } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, login);
userRouter.get("/user", checkToken, login);
userRouter.patch("/user", hashPassword, checkToken, updatePassword);

module.exports = userRouter;


module.exports = userRouter;