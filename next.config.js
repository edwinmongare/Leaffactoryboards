/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: false,
 trailingSlash: true,
 basePath: process.env.NODE_ENV === 'production' ? '/Leaf_Boards' : '',
 publicRuntimeConfig: {
  contextPath: process.env.NODE_ENV === 'production' ? '/Leaf_Boards' : '',
  uploadPath: process.env.NODE_ENV === 'production' ? '/sakai-react/upload.php' : '/api/upload'
 }
};

module.exports = nextConfig;
