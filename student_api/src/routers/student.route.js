const express = require("express")
const studentController = require("../controllers/student.controller")
const router = express.Router();

router.get("/", studentController.getAllstudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.createStudent);

module.exports = router;
