const router = require('express').Router();
const userController = require('../Controllers/userController');

//Creation route d'utilisateur
router.post('/create-user', userController.newUser);

//Creation route pour recuperer des utilisateurs
router.get('/get-user', userController.getUser);

//Route pour supprimer un user
router.delete('/delete-user/:id', userController.deletedUser);

//Route pour mettre a jour
router.put('/update-user/:id', userController.updatedUser);


module.exports = router;