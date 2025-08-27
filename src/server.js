// server.js (for local development only)
import app from "./app.js";
import configurations from "./config/index.js";

const PORT = configurations.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
