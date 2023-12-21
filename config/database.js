module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 29927),
      database: env("DATABASE_NAME", "railway"),
      username: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "0000"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  },
});
