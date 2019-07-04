const puppeteer = require('puppeteer');

const isHeadless = true;

const main = async () => {
    const browser = await puppeteer.launch({headless: isHeadless, slowMo: 100, args: ['--no-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});

    await browser.close();
};


(async () => {
    await main()
})();
