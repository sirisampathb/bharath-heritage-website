import { initServer, app } from "../server/index";

// Vercel serverless function entry point
export default async (req: any, res: any) => {
  // Ensure server is initialized (routes registered, etc.)
  await initServer();
  
  // Hand off the request to the Express app
  return app(req, res);
};
