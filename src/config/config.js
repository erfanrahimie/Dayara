// Environment variables
export const MONGODB_URI = process.env.MONGODB_URI;
export const NODE_ENV = process.env.NODE_ENV;

// Authentication
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_SECRET_ENCODE = new TextEncoder().encode(JWT_SECRET);
export const JWT_EXPIRES_IN = '30d';

// Cookies
export const USER_TOKEN = 'user-token';
export const USER_COOKIE_EXPIRES = 60 * 60 * 24 * 30; 

// DB connection config
export const DB_CONFIG = {
  host: '',
  user: '',
  password: '',
  database: '',
};

// Cloudinary config 
export const CLOUDINARY_CONFIG = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};

// Application config
export const PORT = 3000;
export const BASE_URL ='http://localhost:3000/'

// Default config values
export const DEFAULTS = {
  adminEmail: 'clonerfan@gmail.com',
};

// Project info
export const PROJECT = {
  name: 'Dayara',
  version: '1.0.0',
  description: 'A simple blog :)',
};
