import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PROJECTS, PERSONAL_INFO } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function generateHtml(baseHtml: string, metadata: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  customHeadTags?: string;
}) {
  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${metadata.title}</title>`);
  
  // Replace Description
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${metadata.description}" />`);
  
  // Replace Canonical
  html = html.replace(/<!-- Canonical is managed per-page by react-helmet-async -->/i, `<link rel="canonical" href="${metadata.url}" />`);
  
  // Replace Open Graph Tags
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${metadata.title}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${metadata.description}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${metadata.url}" />`);
  
  if (metadata.type) {
    html = html.replace(/<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:type" content="${metadata.type}" />`);
  }

  if (metadata.image) {
    html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="https://www.zackriver.com${metadata.image}" />`);
  }

  if (metadata.customHeadTags) {
    html = html.replace('</head>', `${metadata.customHeadTags}\n  </head>`);
  }

  return html;
}

function buildStaticPages() {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error("dist/index.html not found! Run build first.");
    process.exit(1);
  }

  let baseHtml = fs.readFileSync(indexPath, 'utf-8');
  // Inline CSS to prevent render-blocking
  const assetsDir = path.join(DIST_DIR, 'assets');
  if (fs.existsSync(assetsDir)) {
    const cssFiles = fs.readdirSync(assetsDir).filter(file => file.endsWith('.css'));
    if (cssFiles.length > 0) {
      const mainCssFile = cssFiles[0];
      const cssContent = fs.readFileSync(path.join(assetsDir, mainCssFile), 'utf-8');
      
      // Replace the link tag with the inline style tag
      const cssLinkRegex = new RegExp(`<link[^>]*href="/assets/${mainCssFile}"[^>]*>`, 'i');
      baseHtml = baseHtml.replace(cssLinkRegex, `<style>${cssContent}</style>`);
      
      // Also write back to index.html to ensure the root route is inlined too
      fs.writeFileSync(indexPath, baseHtml);
      console.log(`Inlined ${mainCssFile} into index.html`);
    }
  }
  // Basic Routes
  const basicRoutes = [
    { path: 'about', title: `About | ${PERSONAL_INFO.name} (${PERSONAL_INFO.website.split('.')[0]})` },
    { path: 'services', title: `Services | ${PERSONAL_INFO.name}` },
    { path: 'projects', title: `Projects | ${PERSONAL_INFO.name}` },
    { path: 'contact', title: `Contact | ${PERSONAL_INFO.name}` },
  ];

  basicRoutes.forEach(route => {
    const routeDir = path.join(DIST_DIR, route.path);
    ensureDir(routeDir);
    const customHeadTags = route.path === 'projects' 
      ? `<link rel="preload" as="image" href="${PROJECTS[0].thumbImage || PROJECTS[0].image}" fetchPriority="high" />`
      : undefined;

    const html = generateHtml(baseHtml, {
      title: route.title,
      description: PERSONAL_INFO.bio,
      url: `https://www.zackriver.com/${route.path}`,
      type: 'website',
      customHeadTags
    });
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    console.log(`Generated HTML for /${route.path}`);
  });

  // Project Routes
  PROJECTS.forEach(project => {
    if (!project.id) return;
    
    const projectDir = path.join(DIST_DIR, 'projects', project.id);
    ensureDir(projectDir);
    
    const title = `${project.title} | ${PERSONAL_INFO.name}`;
    const description = project.subtitle || `Case study for ${project.title}, a project by Abdallah Wageeh.`;
    const url = `https://www.zackriver.com/projects/${project.id}`;

    const html = generateHtml(baseHtml, {
      title,
      description,
      url,
      image: project.image,
      type: 'article'
    });

    fs.writeFileSync(path.join(projectDir, 'index.html'), html);
    console.log(`Generated HTML for /projects/${project.id}`);

    if (project.id === 'abjad') {
      const arabicProjectDir = path.join(projectDir, 'ar');
      ensureDir(arabicProjectDir);
      const arabicHtml = generateHtml(baseHtml, {
        title: `أبجد | ${PERSONAL_INFO.name}`,
        description: 'حكاية هندسية عن تحويل النص العربي المشكّل إلى درس رسم قابل للإعادة، مع الحفاظ على TrueType outline وتصدير deterministic.',
        url: 'https://www.zackriver.com/projects/abjad/ar',
        image: project.image,
        type: 'article'
      });
      fs.writeFileSync(path.join(arabicProjectDir, 'index.html'), arabicHtml);
      console.log('Generated HTML for /projects/abjad/ar');
    }

    if (project.id === 'streamflow') {
      const arabicProjectDir = path.join(projectDir, 'ar');
      ensureDir(arabicProjectDir);
      const arabicHtml = generateHtml(baseHtml, {
        title: `Streamflow | ${PERSONAL_INFO.name}`,
        description: 'دراسة حالة موثقة عن انتقال Streamflow من نموذج بث موسيقي إلى منصة متكاملة للهوية والوسائط والتشغيل والبحث والإشراف.',
        url: 'https://www.zackriver.com/projects/streamflow/ar',
        image: project.image,
        type: 'article'
      });
      fs.writeFileSync(path.join(arabicProjectDir, 'index.html'), arabicHtml);
      console.log('Generated HTML for /projects/streamflow/ar');
    }
  });
  
  console.log("Static HTML generation complete!");
}

buildStaticPages();
