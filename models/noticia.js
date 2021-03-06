const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
  titulo: { type: String },
  subtitulo: { type: String },
  data_publicacao: { type: Date },
  descricao: { type: String },
  conteudo: { type: String },
  autor: { type: String }
  });

const Noticia = mongoose.model("Noticias", NoticiaSchema);
module.exports = Noticia;