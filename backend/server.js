const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Matfen',
    password: 'Geralt2077!',
    database: 'heroes'
});

db.connect((error) => {
    if (!error) {
        console.log('Connection réussie');
    } else {
        console.log('Echec de la connection');
    }
});

app.listen(PORT, () => {
    console.log('Connection au port serveur ' + PORT);
});

// LOGIN
app.post('/login', (req, res) => {
    let adress = req.body.adress;
    let pass = req.body.pass;

    let qr = `SELECT * FROM user WHERE adress = ? AND pass = ?`;

    db.query(qr, [adress, pass], (error, results) => {
        if (!error) {
          if (results.length > 0) {
            return res.status(200).send({ message: "Connexion réussie" });
          } else {
            return res.status(400).send({ message: "Adresse ou mot de passe incorrect." });
          }
        } else {
          return res.status(500).send({ message: "Erreur interne du serveur" });
        }
    });
});


// REGISTER
app.post("/signup", (req, res) => {
  let user = req.body;
  let query = `SELECT pseudo, adress, phone, pass FROM user WHERE adress = ?`;

  db.query(query, [user.adress], (error, results) => {
    if (!error) {
      if (results.length <= 0) {
        let qr = `INSERT INTO user (pseudo, adress, phone, pass) VALUES (?, ?, ?, ?)`;
        db.query(
          qr,
          [user.pseudo, user.adress, user.phone, user.pass],
          (error, results) => {
            if (!error) {
              return res.status(200).send({ message: "Enregistrement réussi" });
            } else {
              console.error(error);
              return res
                .status(500)
                .send({ message: "Echec de l'enregistrement" });
            }
          }
        );
      } else {
        return res.status(400).json({ message: "Compte déjà existant." });
      }
    } else {
      return res.status(400).json({ message: error });
    }
  });
});

// SEARCH
app.get("/comics/:title", (req, res) => {
  const title = req.params.title;

  let qr = `SELECT * FROM comics WHERE title LIKE ?`;

  db.query(qr, [`%${title}%`], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: "Internal server error" });
    }
    if (result.length > 0) {
      res.send({
        message: "get titles success",
        data: result,
      });
    } else {
      res.send({
        message: "get titles error",
      });
    }
  });
});


// MESSAGE
app.post("/message", (req, res) => {
  let adress = req.body.adress;
  let subject = req.body.subject;
  let message = req.body.message;
  let qr = `insert into message (adress, subject, message) values (?, ?, ?)`;

  db.query(qr, [adress, subject, message], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: "Internal servor error" });
    }
    if (result.affectedRows > 0) {
      res.send({
        message: "post message success",
      });
    } else {
      res.send({
        message: "post message error",
      });
    }
  });
});