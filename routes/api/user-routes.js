const router = require('express').Router();
const {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');


// Set up for api/users
router
    .route('/')
    .get(getAllUser) // GET all users +
    .post(createUser); // POST a new user +

// Setup for api/users/:id
router
    .route('/:id')
    .get(getUserById) // GET a single user by its_id and poplulated thought and friend data +
    .put(updateUser) // UPDATE a user by its_id +
    .delete(deleteUser); // DELETE to remove user by its_id +

// Setup for api/users//:userid/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .post(addFriend) // POST to add a new friend to a user's friend list
    .delete(deleteFriend); // DELETE to remove a friend from a user's friend list

module.exports = router;