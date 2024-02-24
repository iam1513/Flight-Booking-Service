const express = require("express");

const { InfoController } = require("../../controllers"); // {} used to import as object

const router = express.Router();

router.get("/info", InfoController.info);

module.exports = router;
