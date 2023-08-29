export const getTitle = (title, index) => {
  if (title) {
    return index === 3 ? title.toUpperCase() : title.charAt(0).toUpperCase() + title.slice(1)
  }

  return ''
}
