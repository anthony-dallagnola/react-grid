/**
 * Checks whether the variable is primitive or not
 *
 * @param {any} value value we want to check
 * @returns {boolean} true if variable is primitive false otherwise
 */
function isPrimitive(value: any): boolean {
  return ['string', 'number', 'boolean'].includes(typeof value);
}

export {
  isPrimitive,
};
