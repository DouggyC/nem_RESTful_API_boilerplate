const Model = require("../models/Model");

// @desc GET All 
// @route GET /api/v1/models
exports.getModels = async (req, res, next) => {
  try {
    const model = await Model.find();

    return res.status(200).json({
      success: true,
      count: model.length,
      data: model,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc POST add model
// @route POST /api/v1/models
exports.addModel = async (req, res, next) => {
  try {
    let model = await Model.create(req.body)

    return res.status(200).json({
      success: true,
      data: model
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// @desc GET A single model by id
// @route GET /api/v1/models/:id
exports.getModel = async (req, res, next) => {
  try {
    const model = await Model.findById(req.params.id)

    if (!model) {
      console.log(`Model not found with id of ${req.params.id}`);
    }

    return res.status(200).json({
      success: true,
      data: model
    })
  } catch (err) {
    return res.status(404).json({
      success: false,
      error: 'Error not found'
    })
  }
}

// @desc PUT Update model by id
// @route PUT /api/v1/model/:id
exports.updateModel = async (req, res, next) => {
  try {
    const model = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    return res.status(200).json({
      success: true,
      data: model
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// @desc DELETE model by id
// @route DELETE /api/v1/models/:id
exports.deleteModel = async (req, res, next) => {
  try {
    await Model.findByIdAndDelete(req.params.id)
    return res.status(200).json({
      success: true,
      data: {}
    })
  } catch (err) {
    return res.status(404).json({
      success: false,
      error: 'Error not found'
    })
  }
}