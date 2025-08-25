import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const createTask = async ({ title, description, userId }) => {
	if (title && description && userId) {
		const task = await prisma.task.create({
			data: {
				title,
				description,
				ownerId: userId,
			},
		});
	}
};

const getTask = async (userId) => {
	return await prisma.task.findMany({
		where: {
			ownerId: userId,
		},
		orderBy: {
			createdAt: "desc",
		},
	});
};

const updateTask = async (id, userId, data) => {
	const task = await prisma.task.findUnique({ where: { id } });
	console.log("Task from the update task", task);
	if (!task || task.ownerId !== userId) {
		const error = new Error(
			"Task not found or you do not have the permission to update this task"
		);
		error.statusCode = 401;
		throw error;
	}
	return await prisma.task.update({
		where: { id },
		data,
	});
};

const deleteTask = async (id, userId) => {
	const task = await prisma.task.findUnique({ where: { id } });
	if (!task || task.ownerId !== userId) {
		const error = new Error(
			"Task is not found or you do not have the permission to delete this task"
		);
		error.statusCode = 401;
		throw error;
	}
	return await prisma.task.delete({ where: { id } });
};
export default { createTask, updateTask, deleteTask, getTask };
