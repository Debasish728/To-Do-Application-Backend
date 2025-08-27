import app from  "../src/app.js"
// import configurations from "./config/index.js";

// const PORT = configurations.PORT;

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel 🚀");
});


export default function handler(req, res) {
  return app(req, res);
}
