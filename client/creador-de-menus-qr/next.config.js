/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
    loader: 'imgix',
    path: '', // Aquí puedes especificar un prefijo de URL si es necesario
  },
};

module.exports = nextConfig;
