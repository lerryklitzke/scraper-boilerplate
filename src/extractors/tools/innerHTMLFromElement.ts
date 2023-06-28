import { Page, ElementHandle } from 'puppeteer';

export const innerHTMLFromElement = async (params: { page: Page, element: ElementHandle<Element> }): Promise<string | undefined> => {
  const { page, element } = params;
  try {
    const inner = await page.evaluate((el) => el.innerHTML, element);
    return inner;

  } catch (err) {
    console.log(`innerHTMLFromElement function.\n${err}`);
    return undefined;
  }
}