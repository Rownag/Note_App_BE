const Note = require('../../database/models/note');

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).json({
      ok: true,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Error fetching notes'
    });
  }
};

module.exports = getNotes;
