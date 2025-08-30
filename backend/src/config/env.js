import "dotenv/config";

export const ENV = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.Mongo_URI,
    NODE_ENV: process.env.NODE_ENV,
    
}