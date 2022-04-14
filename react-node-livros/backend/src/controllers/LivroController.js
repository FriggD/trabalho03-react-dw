const Livro = require('../models/Livro');
const {Op} = require('sequelize')

exports.getAll = async (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  try {
    const livros = await Livro.findAll({ 
      where: condition,
      order: ['name']
    });
    return res.status(200).json({ livros });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Falha ao recuperar Livros!' });
  }
}

exports.get = async (req, res) => {
  const id = req.params.id;

  try {
    const livro = await Livro.findOne({
      where: { id: id},
      order: ['name']
    });
    return res.status(200).json({ livro });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Falha ao recuperar Livros!' });
  }
}

exports.save = async (req, res) => {
  const { name, author, ano } = req.body;

  console.log(req.body);
  try {
    const livro = await Livro.create({
      name,
      author,
      ano
    });   
    return res.status(200).json({ livro });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Falha interna!' });
  }
}

exports.update = async (req, res) => {
  const id = req.params.id;
  const { name, author, ano } = req.body;

  console.log(req.body);
  try {
    const livro = await Livro.update(
      { name, author, ano },
      { where: { id: id }}
    );   
    return res.status(200).json({ livro });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Falha interna!' });
  }
}

exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    await Livro.destroy(
      { where: { id: id }}
    );   
    return res.status(200).json({"message": "Removido!"});
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Falha interna!' });
  }
}

exports.deleteAll = async (req, res) => {
  const id = req.params.id;

  try {
    await Livro.destroy({ 
      where: {},
      truncate: true
    });   
    return res.status(200).json({"message": "Removido!"});
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Falha interna!' });
  }
}
