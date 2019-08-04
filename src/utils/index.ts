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
// This method generate and HTML list from string array
// @argument elements[] -> Strings array to render
// @argument style -> String with list style ['disc', 'circle', 'square', 'none']
// getHtmlList :: (string[], string) -> string

export const getHtmlList = (
  elements: string[],
  style: string = 'none'
): string => {
  let output: string = ''
  elements.map(el => (output += `<li>${el}</li>`))

  return `<ul style="list-style-type:${style};">${output}</ul>`
}
