const config = {
    title: 'p5.js Brasil',
    tagline: 'Documentação interativa de p5.js em português',
    url: 'https://seu-site.com',
    baseUrl: '/',
    organizationName: 'seu-github',
    projectName: 'p5js-docs',
    
    themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
    
    themeConfig: {
      navbar: {
        title: 'p5.js Brasil',
        items: [
          {
            type: 'doc',
            docId: 'intro/index',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'reference/index',
            position: 'left',
            label: 'Referência',
          },
          {
            type: 'doc',
            docId: 'examples/index',
            position: 'left',
            label: 'Exemplos',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
    },
  };
  
  module.exports = config;