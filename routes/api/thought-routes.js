const router = require("express").Router();
const {
  addThought,
  removeThought,
  getAllThought,
  getThoughtById,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// get all thoughts
router.route("/").get(getAllThought);

// get one thought
// router.route("/:thoughtId").delete(removeThought);

// api/thoughts/:userId
router.route("/:userId").post(addThought);

// api/thoughts/:useId/:thoughtId
router
  .route("/:userId/:thoughtId")
  .get(getThoughtById)
  .put(addReaction)
  .delete(removeThought);

// api/thoughts/:userId/:thoughtId/:reactionId
router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
