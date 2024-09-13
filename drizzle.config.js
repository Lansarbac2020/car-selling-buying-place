/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./config/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: import.meta.VITE_POSGRESQL_URL,
    }
  };