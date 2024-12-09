// Importation du schema
const User = require('../Models/userSchema');


// Creation du controller pour la creation d'un utilisateur
const newUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = new User({name, email, password});
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({error: 'erreur serveur interne'});

    }
}

// Creation controller pour la recuperation de l'utilisateur
const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: 'erreur serveur interne'});
    }
}

//Creation controller pour la suppression d'un utilisateur
const deletedUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
        res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur interne' });
    }
}

//Creation controller pour mettre a jour un utilisateur
const updatedUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, password } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            userId, 
            { name, email, password },  //nouvelles données
            { new: true }  
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur interne' });
    }
}


module.exports = {
    newUser,
    getUser,
    deletedUser,
    updatedUser
}
