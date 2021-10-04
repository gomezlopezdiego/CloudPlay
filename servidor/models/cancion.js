import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cancionSchema = new Schema({
  titulo: { type: String, required: [true, "Titulo obligatorio"] },
  cantante: String,
  genero: String,
  date: { type: Date, default: Date.now },
  activo: { type: Boolean, default: true },
});

// Convertir a modelo
const Cancion = mongoose.model("Cancion", cancionSchema);
export default Cancion;

