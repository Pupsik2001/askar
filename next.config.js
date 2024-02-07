module.export = {
    reactStrictMode: true
}

module.exports.headers = async () => {
    return [
      // ... other headers
      {
        source: '/images/main.mp4',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
};
