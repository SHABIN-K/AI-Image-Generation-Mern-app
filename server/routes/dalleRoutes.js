import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("DALL E server");
});

router.route("/").post(async(req, res) => {
    try {
        const { prompt } = req.body;
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
          });
          image_url = response.data.data[0].url;
    } catch (error) {
        
    }
  });


export default router;