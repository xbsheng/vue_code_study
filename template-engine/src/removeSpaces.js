export default str => {
  let isInTag = false
  return str.split('').reduce((total, current) => {
    if (current === '<') isInTag = true
    if (current === '>') isInTag = false
    if (current !== ' ' || isInTag) {
      return total + current
    } else {
      return total
    }
  }, '')
}
