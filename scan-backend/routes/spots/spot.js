var express = require("express");
var router = express.Router();
const SpotsModel = require("../../database/models/spots");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* GET users listing. */
router.post("/create", async (req, res, next) => {
  res.send("respond with a resource");
  debugger;
  let model = req.body;
  let result = await SpotsModel.create(model);
  res.status(200).send(result);
});

module.exports = router;
