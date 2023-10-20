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

router.get('/getvotaciones', async (req, res) => {
  // Obtener todas las votaciones
  await votacionechema.find({})
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    });

}
);


router.put('/agregarvotoM/:votacionID/:votanteID/:votadoMID', async (req, res) => {
  const votacionID = req.params.votacionID;
  const votanteID = req.params.votanteID;
  const votadoMID = req.params.votadoMID;
  try {

    const votacion = await votacionechema.findById(votacionID);
    const votante = await usuarioSchema.findById(votanteID);
    const votadoM = await usuarioSchema.findById(votadoMID);

    if (!votacion || !votante || !votadoM) {
      return res.status(404).json({ message: 'Votación, votante o votadoM no encontrado' });
    }

    // Agrega el ID del votante al array de votosM y el ID de votadoM
    votacion.votosM.push({ votante: votanteID, votadoM: votadoMID });

    // Guarda la votación actualizada
    await votacion.save();

    res.json({ message: 'VotoM agregado con éxito a la votación' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error al agregar el votoM a la votación' });
  }
});




router.put('/agregarvotoH/:votacionID/:votanteID/:votadoMID', async (req, res) => {
  const votacionID = req.params.votacionID;
  const votanteID = req.params.votanteID;
  const votadoMID = req.params.votadoMID;

  try {

    const votacion = await votacionechema.findById(votacionID);
    const votante = await usuarioSchema.findById(votanteID);
    const votadoH = await usuarioSchema.findById(votadoHID);

    if (!votacion || !votante || !votadoM) {
      return res.status(404).json({ message: 'Votación, votante o votadoM no encontrado' });
    }


    votacion.votosM.push({ votante: votanteID, votadoH: votadoHID });


    await votacion.save();

    res.json({ message: 'VotoM agregado con éxito a la votación' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error al agregar el votoM a la votación' });
  }
});

//actualizar estado de la votacion
router.put('/cambiarestadovotacion', async (req, res) => {
  const body = req.body;
  const votacionID = body._id;
  const nuevoEstado = body.estado; // El nuevo estado de la votación (true o false)

  try {

    console.log(votacionID, nuevoEstado)
    // Verifica si la votación existe
    const votacion = await votacionechema.findById(votacionID);

    if (!votacion) {
      return res.status(404).json({ message: 'Votación no encontrada' });
    }

    // Actualiza el estado de la votación con el nuevo estado
    votacion.estado = nuevoEstado;

    // Guarda la votación actualizada
    await votacion.save();

    res.json({ message: 'Estado de la votación actualizado con éxito' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error al actualizar el estado de la votación' });
  }
});

module.exports = router;
