import jwt from "jsonwebtoken";
import configurations from "../config/index.js";
const authMiddleware = (req, res, next) => {
	const token = req.header("Authorization")?.replace("Bearer ", "");
	if (!token) {
		return res.status(400).json({ error: "Authentication failed token missing!" });
	}
	try {
		const decode = jwt.verify(token, configurations.JWT_SECRET);
		req.user = decode;
		next();
	} catch (error) {
		res.status(401).json({ error: "Invalid token" });
	}
};

export default authMiddleware;
