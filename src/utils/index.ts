// padNumber :: (string, number, string) -> string
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

// Get HTML list method
// getHtmlList :: (string[], string) -> string

// This method generate and HTML list from string array
// @argument elements[] -> Strings array to render
// @argument style -> String with list style ['disc', 'circle', 'square', 'none']

export const getHtmlList = (
  elements: string[],
  style: string = 'none'
): string => {
  let output: string = ''
  elements.map(el => (output += `<li>${el}</li>`))

  return `<ul style="list-style-type:${style};">${output}</ul>`
}

// Get the largest number fr
// getLargestNum
export const getHighestNumOf = (digits: number): number => {
  return Number(new Array(digits + digits.toString().length).join('9'))
}
