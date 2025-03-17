const nextConfig = {
    // Keep any existing configuration here
    
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'ALLOWALL',
            },
            {
              key: 'Content-Security-Policy',
              value: "frame-ancestors 'self' * http://localhost:3006",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;