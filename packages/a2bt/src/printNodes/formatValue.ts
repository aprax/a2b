/**
 * Color formats a string using ANSI escape codes.
 *
 * @param character The string to be color formatted.
 * @param ansiColorCode A value between 30-37 and 90-97 inclusive. See https://en.wikipedia.org/wiki/ANSI_escape_code#Colors.
 *
 * @return The color formatted string.
 */
export default (character: string, ansiColorCode?: number) =>
  ansiColorCode
    ? `\x01\x1b[${ansiColorCode}m${character.trim()}\x1b[39m\x02`
    : character.trim();
