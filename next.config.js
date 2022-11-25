/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

import * as dotenv from "dotenv";
dotenv.config();

export default nextConfig;
