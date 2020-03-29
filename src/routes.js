import { Router } from "express";

import config from "./config";

/**
 * Contains all API routes for the application.
 */
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    name: config.app.name,
    version: config.app.version
  });
});

export default router;
