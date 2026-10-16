const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const files = [
    'client_mockup.html',
    'mockup_institutions.html',
    'mockup_families.html',
    'mockup_sponsors.html',
    'mockup_about.html',
    'mockup_contact.html'
];

(async () => {
    console.log('Starting headless browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const pdfDoc = await PDFDocument.create();

    for (const file of files) {
        const page = await browser.newPage();
        await page.setViewport({ width: 1440, height: 900 });
        
        const filePath = 'file://' + path.join(__dirname, file);
        console.log(`Loading ${file}...`);
        
        // Wait for networkidle0 to ensure Tailwind CDN and Google Fonts load completely
        await page.goto(filePath, { waitUntil: 'networkidle0' });
        
        // Take a full page screenshot
        const screenshotBuffer = await page.screenshot({ fullPage: true });
        
        // Embed the PNG into the PDF
        const pngImage = await pdfDoc.embedPng(screenshotBuffer);
        const pngDims = pngImage.scale(1);
        
        // Create a PDF page that is the exact height and width of the screenshot
        const pdfPage = pdfDoc.addPage([pngDims.width, pngDims.height]);
        pdfPage.drawImage(pngImage, {
            x: 0,
            y: 0,
            width: pngDims.width,
            height: pngDims.height,
        });
        
        await page.close();
        console.log(`Successfully rendered ${file} and embedded into PDF.`);
    }

    await browser.close();

    console.log('Saving final PDF...');
    const pdfBytes = await pdfDoc.save();
    const outputPath = path.join(__dirname, 'Playmakxrs_Client_Presentation.pdf');
    fs.writeFileSync(outputPath, pdfBytes);
    console.log(`PDF successfully generated at: ${outputPath}`);
})();
