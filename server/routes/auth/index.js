const express = require ('express');
const passport = require ("passport");
const router = express.Router();
const userController = require ("../../controllers/userController");

router.get('/user', userController.getUser);
router.post('/login', userController.auth, passport.authenticate('local'), userController.authenticate);
router.post('/logout', userController.logout);
router.post('/signup', userController.register);


module.exports = router;