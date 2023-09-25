export function dateFormat(timestampString: string) {
  const timestampNumber = parseInt(timestampString, 10)

  const date = new Date(timestampNumber * 1000)

  const dateFormatted = date.toLocaleDateString()

  return dateFormatted
}
