import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import fetch from 'node-fetch';

const CONTENT_DIR = './src/content';

async function checkLink(url) {
  try {
    const response = await fetch(url, { method: 'HEAD', timeout: 5000 });
    return response.ok;
  } catch (e) {
    return false;
  }
}

async function main() {
  console.log('🔍 Starting Link-Guardian: Verifying proofs...');
  let brokenLinks = [];

  // We only care about the 'projects' and 'blog' folders for proofs
  const folders = ['projects', 'blog', 'competencies'];

  for (const folder of folders) {
    const dirPath = path.join(CONTENT_DIR, folder);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
      const { data } = matter(content);

      // Check proofs array in projects
      if (data.proofs && Array.isArray(data.proofs)) {
        for (const proof of data.proofs) {
          const isValid = await checkLink(proof.url);
          if (!isValid) {
            brokenLinks.push({ file, label: proof.label, url: proof.url });
          }
        }
      }

      // Also check for external links in the blog content (optional but good)
      if (folder === 'blog') {
        const urlRegex = /https?:\/\/[^\s)]+/g;
        const matches = content.match(urlRegex) || [];
        for (const url of matches) {
          const isValid = await checkLink(url);
          if (!isValid) {
            brokenLinks.push({ file, label: 'Content Link', url });
          }
        }
      }
    }
  }

  if (brokenLinks.length > 0) {
    console.error('❌ Broken links found:');
    brokenLinks.forEach(link => {
      console.error(`- [${link.file}] ${link.label}: ${link.url}`);
    });
    process.exit(1);
  } else {
    console.log('✅ All proofs are valid. Credibility intact.');
    process.exit(0);
  }
}

main().catch(err => {
  console.error('Unexpected error during link check:', err);
  process.exit(1);
});
