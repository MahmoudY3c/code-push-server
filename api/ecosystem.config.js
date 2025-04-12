const config = require("dotenv").config();
console.log(config);

module.exports = {
  apps: [
    {
      name: "code-push-server",
      script: "./bin/script/server.js",
      cwd: __dirname,
      env: {
        NODE_ENV: "development",
        ...config,
      },
      env_production: {
        NODE_ENV: "production",
        ...config,
      },
    },
  ],
};
