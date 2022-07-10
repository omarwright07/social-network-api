const router = require('express').Router();
const {
    getAllThought,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');


// Set up for api/thoughts
router
    .route('/')
    .get(getAllThought) // GET all thoughts
    .post(createThought); // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// Setup for api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById) // GET a single thought by its_id
    .put(updateThought) // UPDATE a thought by its_id
    .delete(deleteThought); // DELETE to remove thought by its_id

// Setup for api/thoughts/:thoughtId/reactions
router
    .route('/:id/reactions')
    .post(addReaction) // POST to create a reaction stored in a single thought's reactions array field

// Setup for api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:id/reactions/:reactionId')
    .delete(removeReaction); // DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;