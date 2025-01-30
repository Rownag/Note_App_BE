const jwt = require ("jsonwebtoken")
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        ok: false,
        message: 'Authentication required'
      });
    }

    jwt.verify(token, process.env.SECRET_KEY,
      async (err, decodedToken) => {
        if (err) {
          return res.status(401).json({
            ok: false,
            message: 'Token is invalid'
          });
        }


        if (!decodedToken) {
          return res.status(401).json({
            ok: false,
            message: 'User not found'
          });
        }

        const user = decodedToken;

        req.user = user;

        next();
      });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: `Server error: ${error.message}`
    });
  }
};

module.exports = isAuthenticated;