const express = require('express');
const router = express.Router();
const usuarioSchema = require('../models/usuario.js');

// Agregar un usuario
router.post('/addusuario', async (req, res) => {
  const body = req.body;
  const usuario = new usuarioSchema(body);
  await usuario.save()
    .then((result) => {
      res.json(result)

    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    });
}
);

//comprobacion de usuario login
router.post('/login', async (req, res) => {
  const body = req.body;
  console.log(body)
  const contrasena = body.contrasena
  const rut = body.rut
  const resp = await usuarioSchema.findOne({ rut, contrasena })
    .then((result) => {
      console.log("result")
      console.log(result)
      console.log(JSON.stringify(result))
      if (JSON.stringify(result) !== "null") {
        result.contrasena = ""
        res.json(result)
      } else {
        res.send(false)
      }
    })
    .catch((err) => {
      res.json(err)
    });

});

// Obtener usuario con un id
router.get('/getusuarioid/:id', async (req, res) => {
  const userID = req.params.id
  console.log(req.params)
  await usuarioSchema.findOne({
    _id: userID

  })
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    });

}
);


router.get('/getusuarios', async (req, res) => {
  // Obtener todas las votaciones
  await usuarioSchema.find({})
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    });

}
);
module.exports = router;
