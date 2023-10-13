const express = require('express');
const router = express.Router();
const votacionechema = require('../models/votacione.js');
const usuarioSchema = require('../models/usuario.js');

router.post('/addvotacione', async (req, res) => {
    const body = req.body;
    const votacione = new votacionechema(body);
    await votacione.save()
      .then((result) => {
        res.json(result)
  
      })
      .catch((err) => {
        console.log(err)
        res.json(err)
      });
  }
  );


  router.get('/getvotacionid/:id', async (req, res) => {
    const vID = req.params.id
    console.log(req.params)
    await usuarioSchema.findOne({
      _id: vID
  
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



  router.put('/agregarVotante/:votacionID/:usuarioID', async (req, res) => {
    const votacionID = req.params.votacionID;
    const usuarioID = req.params.usuarioID;
  
    try {
      // Verifica si la votación y el usuario existen
      const votacion = await votacionechema.findById(votacionID);
      const usuario = await usuarioSchema.findById(usuarioID);
  
      if (!votacion || !usuario) {
        return res.status(404).json({ message: 'Votación o usuario no encontrado' });
      }
  
      // Agrega el ID del usuario al array de votantes en la votación
      votacion.votos.push({ votante: usuarioID });
  
      // Guarda la votación actualizada
      await votacion.save();
  
      res.json({ message: 'Votante agregado con éxito a la votación' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error al agregar el votante a la votación' });
    }
  });


  
module.exports = router;
