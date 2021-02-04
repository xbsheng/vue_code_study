import lookup from './lookup'
import parseArray from './parseArray'
import removeSpaces from './removeSpaces'

export default (tokens, data) => {
  const str = tokens.reduce((total, current) => {
    const [type, value, children] = current
    switch (type) {
      case 'text':
        return (total += value)
      case 'name':
        if (value === '.') {
          return (total += data)
        } else {
          return (total += lookup(data, value))
        }
      case '#':
        return (total += parseArray(children, lookup(data, value)))
      default:
        break
    }
  }, '')
  return removeSpaces(str)
}
