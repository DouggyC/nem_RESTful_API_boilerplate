const express = require("express");
const router = express.Router();
const { getModels, addModel, getModel, updateModel, deleteModel } = require("../controllers/model_controller");

router
  .route("/")
  .get(getModels)
  .post(addModel)

router
  .route('/:id')
  .get(getModel)
  .put(updateModel)
  .delete(deleteModel)

module.exports = router;
