const User = require('../../database/models/user');

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        ok: false,
        message: `User with ${id} not found`
      });
    }

    return res.status(200).json({
      ok: true,
      data: user
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: `Server error, ${error.message}`
    });
  }
};

module.exports = getUser;