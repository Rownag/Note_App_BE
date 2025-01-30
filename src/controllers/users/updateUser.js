const User = require('../../database/models/user');

const updateUser = async (req, res) => {
  const { id } = req.params;  // Extracting user ID from the URL
  const { firstName, lastName, age, email, password } = req.body;  // Adjust these to the actual fields of the User model

  if (!id) {
    return res.status(400).json({
      ok: false,
      message: 'User ID is required',
    });
  }

  // Ensure at least one field is provided to update
  if (!firstName && !lastName && !age && !email && !password) {
    return res.status(400).json({
      ok: false,
      message: 'At least one field (firstName, lastName, age, email, password) is required',
    });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,  // The ID of the user to update
      {
        firstName,
        lastName,
        age,
        email,
        password,
        updatedAt: Date.now(),  // Adding updated timestamp
      },
      { new: true, runValidators: true }  // Ensure that the updated document is returned and validations are run
    );

    if (!updatedUser) {
      return res.status(404).json({
        ok: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      ok: true,
      message: 'User updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: 'Error updating User',
      data: error.message,
    });
  }
};

module.exports = updateUser;
