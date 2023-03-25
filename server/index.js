import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E");
});

const startServer = async () => {
  const port = process.env.PORT || 5000;
  app.listen(port, () =>
    console.log(`Server running on port : http://localhost:${port} 🔥`)
  );
};

startServer();
