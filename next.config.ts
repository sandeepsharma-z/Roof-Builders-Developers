import type { NextConfig } from "next";

const nextConfig:NextConfig={
  async redirects(){
    return [
      {source:"/plots",destination:"/properties",permanent:false},
      {source:"/residential",destination:"/properties",permanent:false},
      {source:"/commercial",destination:"/properties",permanent:false},
    ];
  },
};

export default nextConfig;
