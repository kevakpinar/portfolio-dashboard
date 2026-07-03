import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: {
    compilationMode: "annotation",
  },
};

export default nextConfig;

//Use "use memo"; for compiler to optimize whole component automatically