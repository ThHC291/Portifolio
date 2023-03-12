/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    locales: ["en", "pt"],
    defaultLocale: "en",
    // domains: [
    //   {
    //     domain: "website.com",
    //     defaultLocale: "en",
    //   },
    //   {
    //     domain: "website.com.br",
    //     defaultLocale: "pt",
    //   },
    // ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}
