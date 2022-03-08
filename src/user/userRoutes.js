const { Router } = require("express");
const { addUser } = require("./userControllers");
const { hashPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);

// use compare and check password



module.exports = userRouter;