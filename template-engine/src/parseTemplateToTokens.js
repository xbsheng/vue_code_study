import Scanner from './Scanner'
import nestTokens from './nestTokens'

export default templateStr => {
  const scanner = new Scanner(templateStr)
  const tokens = []
  while (!scanner.eos()) {
    const str1 = scanner.scanUtil('{{')
    if (str1) {
      tokens.push(['text', str1])
    }
    scanner.scan('{{')
    const str2 = scanner.scanUtil('}}')
    if (str2) {
      tokens.push(['name', str2])
    }
    scanner.scan('}}')
  }
  return nestTokens(tokens)
}
