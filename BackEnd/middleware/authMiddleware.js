const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // Get the token
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) return res.status(401).json({ error: 'Access denied, no token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode
    req.user = decoded; // Attach decoded user to request
    next(); // Go to the next middleware or route
  } catch (err) {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
};

module.exports = authenticateToken;
