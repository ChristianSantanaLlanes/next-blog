module.exports = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // ReactMarkdown内のpropsを受け取り画像をrequireしようとするとエラーになる。raw-loaderの設定を追加するとエラーが出なくなった。
  // ref: https://kenzoblog.vercel.app/posts/nextjs-blog-asset
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
