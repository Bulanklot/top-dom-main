import type { NextConfig } from 'next'
import path from 'node:path'

const isProd = process.env.NODE_ENV === 'production'
const repo = 'top-dom-main'

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: isProd ? `/${repo}` : '',
  // basePath: isProd ? `` : '',
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, 'source/app/styles')],
    prependData: `
  $base: "${isProd ? "/" + repo : ""}";
  @use "bp.scss" as bp;
`
  }
}

export default nextConfig
