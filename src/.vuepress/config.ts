import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { openGraphPlugin } from 'vuepress-plugin-open-graph'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://himastatut.my.id#website",
      "url": "https://himastatut.my.id",
      "name": "Himastatut Docs",
      "alternateName": "HIMASTAT-UT",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "description": "Dokumentasi Kegiatan Himpunan Mahasiswa Statistika",
      "inLanguage": "id_ID",
      "publisher": {
        "@type": "Organization",
        "@id": "https://himastatut.my.id#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://himastatut.my.id#organization",
      "name": "HIMASTAT-UT",
      "alternateName": "Himpunan Mahasiswa Statistika Universitas Terbuka",
      "url": "https://himastatut.my.id",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://himastatut.my.id#logo",
        "url": "/assets/image/logo-tiny.webp"
      },
      "sameAs": [
        "https://github.com/himastat-ut/himastatut_docs",
        "https://github.com/himastat-ut",
        "https://github.com/himastatut-admin",
        "https://www.facebook.com/himastatut",
        "https://www.youtube.com/@himastat_ut",
        "https://www.youtube.com/@statistikafstut",
        "https://www.linkedin.com/company/himastat-ut/",
        "https://x.com/himastat_ut",
        "https://www.twitter.com/himastat_ut",
        "https://www.snapchat.com/@himastat_ut",
        "https://www.instagram.com/himastatut",
        "https://www.instagram.com/himastat_ut/",
        "https://www.tiktok.com/@himastat_ut",
        "https://t.me/himastat_ut",
        "https://chat.whatsapp.com/HLT9mlwDF6987pavHdCBXK",
        "https://www.reddit.com/user/Smooth_Feedback_7809/",
        "https://link.me/himastat_ut",
        "https://linktr.ee/himastat_ut",
        "https://rumble.com/user/himastat_ut",
        "https://www.quora.com/profile/Himastatut",
        "https://calendly.com/himastatut",
        "https://mastodon.social/@himastat_ut",
        "https://www.twitch.tv/himastat_ut",
        "https://www.pinterest.com/himastat_ut/",
        "https://www.threads.com/@himastat_ut",
      ]
    },
  ]
});

export default defineUserConfig({
  base: "/",
  dest: './dist',
  lang: "id",
  title: "Himastatut Docs",
  description: "Dokumentasi Kegiatan Himpunan Mahasiswa Statistika",
  head: [
    ['meta', { name: 'algolia-site-verification', content: '70561EEFC0C70B02' }],
    ['meta', { name: 'msvalidate.01', content: '4077B11CAE89D53B7DAE1D82710447B0' }],
    ['meta', { name: 'yandex-verification', content: '1275725ccdfb310d' }],
    ['meta', { name: 'naver-site-verification', content: '' }],
    ['meta', { name: 'p:domain_verify', content: 'd6e8397f9d89b87750a2ce95163d6b12' }],
    ['meta', { name: 'google-adsense-account', content: 'ca-pub-6054605202730914' }],
    ['link', { rel: 'icon', href: '/assets/image/logo-tiny.webp', type: 'image/webp' }],
    ['link', { rel: 'icon', href: '/assets/image/logo-tiny.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/image/logo-tiny.webp', type: 'image/webp' }],
    ['link', { rel: 'preload', href: '/assets/image/bg/bg6-light.webp', as: 'image', type: 'image/webp', fetchPriority: 'high' }],
    ['link', { rel: 'preload', href: '/assets/image/bg/bg6-dark.webp', as: 'image', type: 'image/webp', fetchPriority: 'high' }],
    ['script', { async: true, src: 'https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js', customElement: 'amp-auto-ads' }],
    ['link', { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: '' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@himastat_ut' }],
    ['meta', { property: 'og:locale', content: 'id_ID' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['script', { type: 'application/ld+json' }, structuredData],
    ['script', { async: true, src: 'https://news.google.com/swg/js/v1/swg-basic.js' , type: 'application/javascript' }],
    [
      'script',
      {},
      `
        (self.SWG_BASIC = self.SWG_BASIC || []).push( basicSubscriptions => {
          basicSubscriptions.init({
            type: "NewsArticle",
            isPartOfType: ["Product"],
            isPartOfProductId: "CAowkMq9DA:openaccess",
            clientOptions: { theme: "light", lang: "id" },
          });
        });
      `
    ],
    ['script', { type: 'text/javascript' }, `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "qw4oa5q3a0");
    `],
  ],
  theme,
  shouldPrefetch: false,
  plugins: [
    openGraphPlugin({
      host: 'https://himastatut.my.id',
    }),
    // pwaPlugin({}),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: 'Konten baru tersedia.',
          buttonText: 'Muat Ulang',
        },
      },
    }),
    webpackBundler({
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: 'bundle-report.html',
          openAnalyzer: false,
        }),
      ],
    }),
  ],
});