import { Url } from "../models/url.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/asynHandler.js";
import { nanoid } from "nanoid";

export const createShortUrl = asyncHandler(async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    throw new ApiError(400, "Original URL is required");
  }
  //if URL already exists, return the existing short code
  const existingUrl = await Url.findOne({ originalUrl });
  if (existingUrl) {
    return res
      .status(200)
      .json(new ApiResponse(200, "Short URL already exists", existingUrl));
  }

  const shortCode = nanoid(6);

  const newUrl = await Url.create({ originalUrl, shortCode });

  res
    .status(201)
    .json(new ApiResponse(201, "Short URL created successfully", newUrl));
});

export const getOriginalUrl = asyncHandler(async (req, res) => {
  const { shortCode } = req.params;

  const urlEntry = await Url.findOne({ shortCode });
  if (!urlEntry) {
    throw new ApiError(404, "Short URL not found");
  }

  res.json(
    new ApiResponse(200, "Original URL retrieved successfully", {
      originalUrl: urlEntry.originalUrl,
    }),
  );
});

export const redirectToOriginalUrl = asyncHandler(async (req, res) => {
  const { shortCode } = req.params;
  const urlEntry = await Url.findOne({ shortCode });
  if (!urlEntry) {
    throw new ApiError(404, "Short URL not found");
  }

  res.redirect(urlEntry.originalUrl);
});
