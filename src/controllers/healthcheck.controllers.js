import { asyncHandler } from "../utils/asynHandler.js";
import { ApiResponse } from "../utils/api-response.js";

const healthCheck = asyncHandler(async (req, res) => {
  res.json(new ApiResponse(200, "OK", "server is healthy"));
});

export { healthCheck };
