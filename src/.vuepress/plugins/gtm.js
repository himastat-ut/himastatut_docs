module.exports = (options, app) => {
  return {
    name: 'google-tag-manager-noscript',
    clientConfigFile: (app) => ({
      enhanceAppFiles: [
        {
          name: 'gtm-noscript',
          content: `
            export default ({ router }) => {
              if (typeof window !== 'undefined') {
                const noscript = document.createElement('noscript');
                noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9LFKNB8" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
                document.body.insertBefore(noscript, document.body.firstChild);
              }
            };
          `,
        },
      ],
    }),
  };
};