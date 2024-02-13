// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const authenticate = async (req, res, next) => {
//   try {
//     console.log(req.headers);
//     const authHeader = req.headers.authorization;
//     console.log("Authorization Header:", authHeader);

//     if (!authHeader) {
//       return res.status(401).json({ message: "Authentication required" });
//     }

//     // Split the header to get the token part (assuming format is "Bearer <token>")
//     const token = authHeader.split(" ")[1];
//     console.log("Extracted Token:", token);

//     if (!token) {
//       return res.status(401).json({ message: "Token not found" });
//     }

//     const decoded = jwt.verify(token, process.env.SECRET_PRIVATE_KEY);
//     const user = await User.findOne({ username: decoded.username });

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     console.log("Authentication Error:", error);
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

// module.exports = { authenticate };
