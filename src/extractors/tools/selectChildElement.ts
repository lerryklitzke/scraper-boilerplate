import { Page, ElementHandle } from 'puppeteer';
import { ChildElementInfo } from '../../types';
import { selectElement } from './selectElement';

export const selectChildElement = async (params: { page: Page, childElementInfo: ChildElementInfo }): Promise<ElementHandle<Element> | undefined> => {
  const { page, childElementInfo } = params;
  try {
    const parentElement = await selectElement({ parentElement: page, elementInfo: childElementInfo.parent });
    if (parentElement) {
      const childElement = await selectElement({ parentElement, elementInfo: childElementInfo.child });
      return childElement;
    }

  } catch (err) {
    console.log(`selectChildElement function.\n${childElementInfo}\n${err}`);
    return undefined;
  }
}