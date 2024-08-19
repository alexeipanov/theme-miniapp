import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs/assets',
      fallback: 'index.html',
      precompress: false,
      strict: true
    })
  }
};

export default config;
