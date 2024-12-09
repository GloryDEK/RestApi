require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

//Connection MB au backend
mongoose
.connect(process.env.DB_URL)
.then(() => console.log('Connexion réussie à la base de données'))
.catch((error) => console.error('Erreur de connexion :', error));


const routes = require('./Routes/Router');

//Middleware pour parser le corps des requetes
app.use(express.json());

//La route
app.use('/', routes);



//Demarage du serveur
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});
