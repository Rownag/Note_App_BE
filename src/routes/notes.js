const express = require('express');

const getNotesController = require('../controllers/notes/getNotes');
const getNoteController = require('../controllers/notes/getNote');
const createNoteController = require('../controllers/notes/createNote');
const updateNoteController = require('../controllers/notes/updateNote');
const deleteNoteController = require('../controllers/notes/deleteNote');

const router = express.Router();

router.get('/notes', getNotesController);

router.get('/notes/:id', getNoteController);

router.post('/notes', createNoteController);

router.put('/notes/:id', updateNoteController);

router.delete('/notes/:id', deleteNoteController);

module.exports = router;