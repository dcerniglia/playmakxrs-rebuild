const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://playmakxrs-preview-production.up.railway.app';
const artifactsDir = '/Users/developer/.gemini/antigravity-ide/brain/4b256fb5-446b-4a92-92c3-c7da6984506b';

async function capture() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(baseUrl, { waitUntil: 'networkidle2' });

  // extract all internal links on the homepage
  const hrefs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a'))
      .map(a => a.href)
      .filter(href => href.startsWith(document.location.origin) && !href.includes('#'));
  });

  // Unique links + base url
  const urlsToVisit = [...new Set([baseUrl, ...hrefs])];
  console.log(`Found ${urlsToVisit.length} urls to visit.`);

  const screenshotPaths = [];

  for (let i = 0; i < urlsToVisit.length; i++) {
    const url = urlsToVisit[i];
    console.log(`Visiting ${url}`);
    
    try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        
        // Basic full page scrolling to trigger lazy loads
        await page.evaluate(async () => {
            await new Promise((resolve) => {
                let totalHeight = 0;
                let distance = 200;
                let timer = setInterval(() => {
                    let scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    if(totalHeight >= scrollHeight - window.innerHeight){
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        });
        
        await new Promise(r => setTimeout(r, 1000));
        
        const urlObj = new URL(url);
        let pageName = urlObj.pathname.replace(/[^a-zA-Z0-9]/g, '_');
        if (pageName === '_' || pageName === '') pageName = 'home';
        if (pageName.startsWith('_')) pageName = pageName.substring(1);

        const screenshotName = `screenshot_${pageName}.png`;
        const screenshotPath = path.join(artifactsDir, screenshotName);
        
        await page.screenshot({ path: screenshotPath, fullPage: true });
        console.log(`Saved screenshot to ${screenshotPath}`);
        screenshotPaths.push({ url, path: screenshotName, title: pageName });
    } catch (e) {
        console.log(`Failed to capture ${url}: ${e.message}`);
    }
  }

  await browser.close();
  
  // Create GEMINI.MD content
  let mdContent = `# Playmakxrs Website Overview (Temporary)\n\n`;
  mdContent += `*This is a temporary section containing an overview of the current https://playmakxrs-preview-production.up.railway.app website prior to rebuilding.* \n\n`;
  
  screenshotPaths.forEach(s => {
    mdContent += `## ${s.url}\n\n`;
    mdContent += `![${s.title} page](file://${path.join(artifactsDir, s.path)})\n\n`;
  });

  fs.writeFileSync(path.join('/Users/developer/Projects/antigravity/playmakxrs_concept', 'GEMINI.MD'), mdContent);
  console.log('GEMINI.MD created successfully.');
}

capture().catch(console.error);
