import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push("discord.js", "ws", "bufferutil", "utf-8-validate", "zlib-sync");

      config.module.rules.push({
        test: /\.node$/,
        use: 'node-loader'
      });
    }
    return config;
  },
};

export default nextConfig;
