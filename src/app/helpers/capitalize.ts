export const capitalize = (string: string) => {
  if (!string.length) {
    return ''
  }

  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()
}
