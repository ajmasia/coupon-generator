// padNumber :: (string, number, string) -> string
/**
 * Pad number with char
 * padNumber :: (string, number, string) -> string
 * @param value
 * @param width
 * @param fill
 */

export const padNumber = (
  value: string,
  width: number,
  fill: string = '0'
): string => {
  if (value.length <= width) {
    return new Array(width - value.length + 1).join(fill) + value
  } else {
    return value
  }
}

/**
 * Get HTML list method
 * This method generate and HTML list from string arr
 * getHtmlList :: (string[], string) -> string
 * @param elements
 * @param style
 */

export const getHtmlList = (
  elements: string[],
  style: string = 'none'
): string => {
  let output: string = ''
  elements.map(el => (output += `<li>${el}</li>`))

  return `<ul style="list-style-type:${style};">${output}</ul>`
}

/**
 * Get the highest number of n digits
 * getHighestNumOf :: (number) -> number
 * @param digits
 */

export const getHighestNumOf = (digits: number): number => {
  return Number(new Array(digits + digits.toString().length).join('9'))
}
