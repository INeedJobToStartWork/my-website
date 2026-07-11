import type { NextConfig } from "next";
import withBaseBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = withBaseBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default withBundleAnalyzer(nextConfig);
