import dotenv from "dotenv";
dotenv.config();
const configurations = {
	PORT: process.env.PORT,
	DATABASE_URL: process.env.DATABASE_URL,
	JWT_SECRET: process.env.JWT_SECRET,
};
export default configurations;
