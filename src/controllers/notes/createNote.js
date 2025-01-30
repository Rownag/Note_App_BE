const Note = require('../../database/models/note');

const createNote = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      ok: false,
      message: 'Title and content are required',
    });
  }

  try {
    const note = new Note({ title, content });
    const savedNote = await note.save();

    res.status(201).json({
      ok: true,
      message: 'Note created successfully',
      data: savedNote,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      message: 'Error creating note',
    });
  }
};

module.exports = createNote;
