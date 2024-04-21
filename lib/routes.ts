/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 */
export const publicRoutes = ["/"];

/**
 * Array of routes that are used for authentication
 * These routes will redirect login users to home page (Dashboard)
 */
export const authRoutes = ["/login"];

/**
 * The prefix for the API routes that are used for authentication
 * Routes that start with this prefix are used for API authentication purposes
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path after login (Dashboard)
 */
export const DEFAULT_LOGIN_REDIRECT = "/transactions";
