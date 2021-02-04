export default (target, keyStr) => {
  if (typeof target !== 'object' && keyStr === '.') {
    return target
  }
  const keys = keyStr.split('.')
  return keys.reduce((total, current) => total[current], target)
}
