import { Router } from "express";
import {
  createShortUrl,
  getOriginalUrl,
  redirectToOriginalUrl,
} from "../controllers/url.controllers.js";

const router = Router();

router.post("/shorten", createShortUrl);
router.get("/original/:shortCode", getOriginalUrl);
router.get("/redirect/:shortCode", redirectToOriginalUrl);

export default router;
