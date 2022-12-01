/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// const dotenv = require("dotenv");
// dotenv.config();

// module.exports = nextConfig;

import * as dotenv from "dotenv";
dotenv.config();

export default nextConfig;
