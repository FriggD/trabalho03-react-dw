/*---------------- Libraries -------------------------*/
const express = require('express');
const router = express.Router();
const LivroController = require('../controllers/LivroController');


router.get('/livro', async (req, res) => {
  LivroController.getAll(req, res);
});

router.get('/livro/:id', async (req, res) => {
  LivroController.get(req, res);
});

router.post('/livro', async (req, res) => {
  LivroController.save(req, res);
});

router.put('/livro/:id', async (req, res) => {
  LivroController.update(req, res);
});

router.delete('/livro/:id', async (req, res) => {
  LivroController.delete(req, res);
});

router.delete('/livro', async (req, res) => {
  LivroController.deleteAll(req, res);
});

module.exports = router;