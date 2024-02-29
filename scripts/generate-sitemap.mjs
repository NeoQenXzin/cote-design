// scripts/generate-sitemap.mjs
import fs from 'fs';
import * as globby from 'globby'; // Importez globby comme un module entier

const generateSitemap = async () => {
  const pages = await globby.globby([
    // Adjust paths to include in the sitemap according to your project structure
    'src/pages/*{.js,.jsx,.ts,.tsx}',
    'src/pages/**/*{.js,.jsx,.ts,.tsx}',
    '!src/pages/_*{.js,.jsx,.ts,.tsx}', // Exclude special Next.js files and API routes
    '!src/pages/api', // Exclude API routes
    '!src/pages/projects/[id].js', // Exclude dynamic paths
  ]);

  console.log(pages); // This will log out the pages found to the console

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((page) => {
    const path = page
      .replace('src/pages', '')
      .replace(/(.js|.jsx|.ts|.tsx)$/, '')
      .replace('/index', '');
    const route = path === '/index' ? '' : path;
    return `
          <url>
            <loc>${`http://www.cotedesign06.com${route}`}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `;
  }).join('')}
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap.trim());
};

generateSitemap();
