const router = require("express").Router();
const {
  addThought,
  removeThought,
} = require("../../controllers/thought-controller");

// api/thoughts/:userId
router.route("/:userId").post(addThought);

// api/thoughts/:useId/:thoughtId
router.route("/:userId/:thoughtId").delete(removeThought);

module.exports = router;
