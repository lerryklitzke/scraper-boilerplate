import { Page, ElementHandle } from 'puppeteer';
import { ElementInfo } from '../../types';

export const selectElement = async (params: { parentElement: Page | ElementHandle<Element>, elementInfo: ElementInfo }): Promise<ElementHandle<Element> | undefined> => {
  const { parentElement, elementInfo } = params;
  try {
    const identifier = elementInfo.type + elementInfo.identifier;
    const collectionOfElements = await parentElement.$$(identifier);
    const element = collectionOfElements[elementInfo.index];
    return element;

  } catch (err) {
    console.log(`selectElementFromPage function.\n${elementInfo}\n${err}`);
    return undefined;
  }
}