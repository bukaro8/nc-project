import "dotenv/config";
import * as env from "env-var";

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  NODE_ENV: env.get("NODE_ENV").default("development").asString(),
};
