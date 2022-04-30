/**
 * Color formats a string.
 *
 * @param {string} character
 * @param {number} ansiColorCode A value between 30-37 and 90-97 inclusive.
 *
 * @return {string}
 */
export default (character: string, ansiColorCode?: number) =>
  ansiColorCode
    ? `\x01\x1b[${ansiColorCode}m${character.trim()}\x1b[39m\x02`
    : character.trim();
