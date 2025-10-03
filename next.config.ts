import type { NextConfig } from "next";
import path from 'node:path';

const isProd= process.env.NODE_ENV === "production";
const repo = "top-dom-main";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
sassOptions: {
    includePaths: [path.join(__dirname, 'source/app/styles')],
    prependData: '@use "bp.scss" as bp;'
},

};

export default nextConfig;
