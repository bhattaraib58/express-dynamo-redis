import express from "express";

import config from "./config";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    name: config.app.name,
    version: config.app.version
  });
});

export default app;
