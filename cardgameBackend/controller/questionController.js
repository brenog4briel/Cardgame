const Question = require('../models/Questions');

function getQuestions(req, res) {
  Question.findAll().then((result) => res.json(result));
}

function getQuestion(req, res) {
  Question.findAll({
    where: {id: req.params.id}
  })
  .then((result) => res.json(result));
}

function addQuestion(req, res) {
  Question.create({
    titulo: req.body.titulo,
    dificuldade: req.body.dificuldade,
    opcao1: req.body.opcao1,
    opcao2: req.body.opcao2,
    opcao3: req.body.opcao3,
    opcaoCorreta: req.body.opcaoCorreta,
    
  }).then((result) => res.json(result));
}

async function updateQuestion(req, res) {
  await Question.update(
    {
      titulo: req.body.titulo,
      dificuldade: req.body.dificuldade,
      opcao1: req.body.opcao1,
      opcao2: req.body.opcao2,
      opcao3: req.body.opcao3,
      opcaoCorreta: req.body.opcaoCorreta,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((result) => res.json(result));
}

async function deleteQuestion(req, res) {
  await Question.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => res.json(result));

}

module.exports = { getQuestions, addQuestion, getQuestion, updateQuestion, deleteQuestion };