/**
 * HTML identifier. Use `''` for tag, `'.'` for class, and `'#'` for id.
 */
type IdentifierType = '' | '.' | '#';

export interface ElementInfo {
  /**
   * This is the HTML element identifier.
   * It must be a single id, class, or tag. 
   * Do not add dot (.) or hash (#) at the beginning.
   */
  identifier: string;
  /**
   * This is the identifier type.
   * Use `'#'` if the identifier is an id,
   * `'.'` if it is a class and 
   * `''` if it is a tag.
   */
  type: IdentifierType;
  /**
   * The element will be queried by querySelectorAll; an array will return.
   * Assign the element index to this property.
   */
  index: number;
}

export interface ChildElementInfo {
  /**
   * Parent can be any parent element (it is recommended to be the closest).
   */
  parent: ElementInfo;
  /**
   * The child info must be related to the parent element defined in this interface.
   * If the parent has 3 `<div>` tags inside of it, and you want to select the second one, your child will look like this (look at the index property):
   * 
   * `child: {
   *   identifier: 'div',
   *   type: '',
   *   index: 1
   * }`
   */
  child: ElementInfo;
}