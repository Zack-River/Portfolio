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

  return html;
}

function buildStaticPages() {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error("dist/index.html not found! Run build first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8');

  // Basic Routes
  const basicRoutes = [
    { path: 'about', title: `About | ${PERSONAL_INFO.name} (${PERSONAL_INFO.website.split('.')[0]})` },
    { path: 'services', title: `Services | ${PERSONAL_INFO.name}` },
    { path: 'projects', title: `Projects | ${PERSONAL_INFO.name}` },
  ];

  basicRoutes.forEach(route => {
    const routeDir = path.join(DIST_DIR, route.path);
    ensureDir(routeDir);
    const html = generateHtml(baseHtml, {
      title: route.title,
      description: PERSONAL_INFO.bio,
      url: `https://www.zackriver.com/${route.path}`,
      type: 'website'
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
  });
  
  console.log("Static HTML generation complete!");
}

buildStaticPages();
