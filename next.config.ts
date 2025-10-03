import type { NextConfig } from "next";
import path from 'node:path';

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
sassOptions: {
    includePaths: [path.join(__dirname, 'source/app/styles')],
    prependData: '@use "bp.scss" as bp;'
},

};

export default nextConfig;
