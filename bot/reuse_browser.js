const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    console.log('reuse service started')

    const browser = await puppeteer.launch({
        headless: true,
        args: [ '--use-fake-ui-for-media-stream'],
        ignoreDefaultArgs: ['--mute-audio']});
    const page = await browser.newPage();
    
    await page.goto('http://collaborate.blackboard.com/go?CTID=d83e9915-9912-42a5-b54f-289b3e310135G');
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
    let browserWSEndpoint = await browser.wsEndpoint()

    fs.writeFileSync('./models/browser_endpoints.txt', browserWSEndpoint);

})();

