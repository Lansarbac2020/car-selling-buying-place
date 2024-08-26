/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./config/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://carmarketplace_owner:2jhTWJeDEI6M@ep-young-math-a54vh5t7.us-east-2.aws.neon.tech/carmarketplace?sslmode=require',
    }
  };