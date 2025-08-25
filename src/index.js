import app from "./app.js";
import configurations from "./config/index.js";

const PORT = configurations.PORT;

app.get("/", (req, res) => {
	res.send("Hello api");
});

app.listen(PORT || 4000, () => {
	console.log(`Server is running on port ${PORT}`);
});
