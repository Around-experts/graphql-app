export enum Environment {
  production = "production",
  development = "development",
  test = "test"
}

export const ENVIRONMENT = process.env.NODE_ENV || Environment.development;

export const PORT = process.env.PORT || 4000;

export const ASSETS_BASE_URL = process.env.ASSETS_BASE_URL;

export const AUTH_COOKIE_NAME = "";

export const AUTH_TOKEN_SECRET_KEY =
  process.env.AUTH_TOKEN_SECRET_KEY || "dummy auth token secret key";

export const AUTH_TOKEN_EXPIRES_IN_SECONDS = 30 * 60;
