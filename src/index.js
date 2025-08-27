import app from "./app.js";
// import configurations from "./config/index.js";

// const PORT = configurations.PORT;

export default function handler(req, res) {
	return app(req, res);
}
