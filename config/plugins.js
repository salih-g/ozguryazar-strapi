module.exports = ({ env }) => ({
  ckeditor: true,
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
});
