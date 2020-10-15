module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST || 5432,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "entities": [
    // "./src/entities/*.ts"
    "./dist/entities/*.js"
  ],
  "migrations": [
    // "./src/database/migrations/*.ts"
    "./dist/database/migrations/*.js"
  ],
  "cli": {
    // "migrationsDir": "./src/database/migrations"
    "migrationsDir": "./dist/database/migrations"
  }
}
