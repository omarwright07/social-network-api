const router = require('express').Router();
const {
} = require('../../controllers/thought-controller');


// Set up for api/thoughts
router
    .route('/')
    .get() // GET all thoughts
    .post(); // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// Setup for api/thoughts/:id
router
    .route('/:id')
    .get() // GET a single thought by its_id
    .put() // UPDATE a thought by its_id
    .delete(); // DELETE to remove thought by its_id

// Setup for api/thoughts/:thoughtId/reactions
router
    .route('/:id/reactions')
    .post() // POST to create a reaction stored in a single thought's reactions array field

// Setup for api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:id/reactions/:reactionId')
    .delete(); // DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;