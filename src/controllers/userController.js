import userService from "../services/userService.js";

const registerUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await userService.registerUser(email, password);
		res.status(200).json({ message: "user created successfully", user });
	} catch (error) {
		next(error);
	}
};
const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ message: "Email and password required" });
		}
		const { user, token } = await userService.loginUser(email, password);
		res.status(200).json({ user, token });
	} catch (error) {
		next(error);
	}
};

export default { registerUser, loginUser };
