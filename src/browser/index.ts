import puppeteer, { Browser, Page } from 'puppeteer';

/**
 * 
 * @param { string } url - The url you want to navigate to. 
 * @returns { Page | undefined }  
 * Browser and page are returned. Use browser if you want to run `browser.close()`.
 * Use the desired async methods in page.
 */
export const puppeteerBrowser = async (url: string): Promise<{ browser: Browser, page: Page } | undefined> => {
  try {
    const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    // set headers to simulate a real browser
    await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
    });
    await page.goto(url);
    // returning browser to close it if necessary
    return { browser, page };

  } catch (err) {
    return undefined;
  }
}