const router = require('express').Router();
const { 
    getAllThought, 
    getThoughtById, 
    addThought, 
    removeThought, 
    updateThought
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

module.exports = router;