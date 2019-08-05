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

export const getAlphanumericCode = (digits: number, pattern: string) => {
  let mask: string = ''
  let result: string = ''

  if (pattern.indexOf('a') > -1) {
    mask += 'abcdefghijklmnopqrstuvwxyz'
  }

  if (pattern.indexOf('A') > -1) {
    mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  if (pattern.indexOf('#') > -1) {
    mask += '0123456789'
  }

  if (pattern.indexOf('!') > -1) {
    mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\'
  }

  for (let i = digits; i > 0; --i) {
    result += mask[Math.round(Math.random() * (mask.length - 1))]
  }

  return result
}
