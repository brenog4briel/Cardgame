const express = require('express')
const userController = require('../controller/userController')
const questionController = require('../controller/questionController')
const router = express.Router()

//users
router.get("/users", userController.getUsers);
router.post("/users", userController.addUser);
router.get("/users/:id", userController.getUser);
router.patch("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/user/:contato",userController.getUserByContact);

//questions
router.get("/questions", questionController.getQuestions);
router.post("/questions", questionController.addQuestion);
router.get("/questions/:id", questionController.getQuestion);
router.put("/questions/:id", questionController.updateQuestion);
router.delete("/questions/:id", questionController.deleteQuestion);

module.exports = router;