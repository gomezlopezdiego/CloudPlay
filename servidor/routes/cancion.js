import express from "express";
const router = express.Router();

// importar el modelo cancion
import Cancion from "../models/cancion";

// Agregar una cancion
router.post("/nueva-cancion", async (req, res) => {
  const body = req.body;
  try {
    const cancionDB = await Cancion.create(body);
    res.status(200).json(cancionDB);
  } catch (error) {
    return res.status(500).json({ mensaje: "Ocurrio un error", 
    error });
  }
});

// Exportamos la configuración de express app
module.exports = router;