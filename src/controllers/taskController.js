import taskService from "../services/taskService.js";

const createTask = async (req, res, next) => {
	try {
		const { title, description } = req.body;
		const userId = req.user.id;
		const task = await taskService.createTask({ title, description, userId });
		res.status(200).json(task);
	} catch (error) {
		next(error);
	}
};

const getTask = async (req, res, next) => {
	try {
		const userId = req.user.id;
		const tasks = await taskService.getTask(userId);
		res.status(200).json(tasks);
	} catch (error) {
		next(error);
	}
};

const updateTask = async (req, res, next) => {
	try {
		const { id } = req.params;
		const userId = req.user.id;
		const data = req.body;
		console.log("recived data from the body", data);
		if (data) {
			const task = await taskService.updateTask(parseInt(id), userId, data);
			res.status(200).json(task);
		} else {
      res.status(400);
			console.log("The data is not coming from the body");
		}
	} catch (error) {
		next(error);
	}
};

const deleteTask = async (req, res, next) => {
	try {
		const { id } = req.params;
		const userId = req.user.id;
		const task = await taskService.deleteTask(parseInt(id), userId);
		res.status(200).json(task);
	} catch (error) {
		next(error);
	}
};

export default { createTask, getTask, updateTask, deleteTask };
