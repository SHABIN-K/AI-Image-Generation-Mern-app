import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E");
});

const startServer = async () => {
  const port = process.env.PORT || 5000;
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () =>
      console.log(`Server running on port : ${port} 🔥`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
