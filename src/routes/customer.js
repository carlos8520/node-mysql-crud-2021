const express = require("express");
const controller = require("../controllers/customerController");
const router = express.Router();

const customerController = require("../controllers/customerController");

// HANDLES ALL REQUEST ROUTES

// get all route
router.get("/", customerController.list);
// post route
router.post("/add", customerController.save);
// delete route
router.get("/delete/:id", customerController.delete);
// update routes
router.get("/update/:id", customerController.edit);
router.post("/update/:id", customerController.update);

module.exports = router;
