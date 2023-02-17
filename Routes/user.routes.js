const express = require("express");
const userController = require("../Controllers/user.controller");
const { verifyJwt } = require("../middleware/Verifyjwt");

const router = express.Router();

router.post("/user", userController.postUser);
router.get("/jwt", userController.getJWT);
router.get("/users", userController.getUser);
router.patch("/users/admin/:id", verifyJwt, userController.updatingRole);
router.get("/users/admin/:email", userController.getAdmin);

module.exports = router;
