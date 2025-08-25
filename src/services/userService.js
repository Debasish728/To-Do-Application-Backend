import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from '../prisma/generated/clientPg'
import { PrismaClient } from "../generated/prisma/index.js";
import configurations from "../config/index.js";
	
const prisma = new PrismaClient();

const registerUser = async (email, password) => {
	const existingUser = await prisma.user.findUnique({ where: { email } });
	if (existingUser) {
		const error = new Error("A user with this email is already exists");
		error.statusCode = 409;
		throw error;
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	const newUser = await prisma.user.create({
		data: {
			email,
			password: hashedPassword,
		},
		select: {
			id: true,
			email: true,
			createdAt: true,
		},
	});
	return newUser;
};

const loginUser = async (email, password) => {
	const user = await prisma.user.findUnique({ where: { email } });
	console.log("The user is =>", user);

	if (!user) {
		const error = new Error("Invalid email or password");
		error.statusCode = 401;
		throw error;
	}
	// console.log(user);
	const hasMatch = await bcrypt.compare(password, user.password);
	if (!hasMatch) {
		const error = new Error("Invalid email or password");
		error.statusCode = 401;
		throw error;
	}

	const token = jwt.sign({ id: user.id }, configurations.JWT_SECRET, { expiresIn: "1h" });
	return {
		user: {
			id: user.id,
			email: user.email,
		},
		token,
	};
};

const userService = { registerUser, loginUser };

export default userService;
