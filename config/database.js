module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "https://viaduct.proxy.rlwy.net"),
      port: env.int("DATABASE_PORT", 29927),
      database: env("DATABASE_NAME", "railway"),
      username: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "AE*ggeDea2d6a-gcdA1BD3dbff*A-gEE"),
    },
    debug: false,
  },
});
