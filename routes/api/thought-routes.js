const router = require('express').Router();
const { 
    getAllThought, 
    getThoughtById, 
    addThought, 
    removeThought, 
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThought)

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

  // /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
// router.route('/:thoughtId').delete(removeThought);

//add reaction
router.route('/:thoughtId/reactions').post(addReaction);

//remove reaction
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;