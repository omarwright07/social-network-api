const router = require('express').Router();
const {
} = require('../../controllers/user-controller');


// Set up for api/users
router
    .route('/')
    .get() // GET all users
    .post(); // POST a new user

// Setup for api/users/:id
router
    .route('/:id')
    .get() // GET a single user by its_id and poplulated thought and friend data
    .put() // UPDATE a user by its_id
    .delete(); // DELETE to remove user by its_id

// Setup for api/users//:userid/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .post() // POST to add a new friend to a user's friend list
    .delete(); // DELETE to remove a friend from a user's friend list

module.exports = router;