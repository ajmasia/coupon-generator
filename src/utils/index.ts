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
