/* eslint-disable no-unused-vars */
const { text } = require('express');
const express = require('express');

const messages = [
  {
    text: 'Hi there!',
    user: 'little blue',
    added: new Date(),
  },
  {
    text: 'What is this? Where am I?',
    user: 'Crazyeighty8',
    added: new Date(),
  },
];

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard!', messages: { messages } });
});

router.get('/new', (req, res, next) => {
  res.render('form');
});

router.post('/new', (req, res, next) => {
  const user = req.body['author-name'];
  const message = req.body['message-text'];
  messages.push({ text: message, user, added: new Date() });
  console.log('eventually over');
  res.redirect('/');
});

module.exports = router;
