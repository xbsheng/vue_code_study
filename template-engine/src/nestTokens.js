export default tokens => {
  // 结果数组
  const nestedTokens = []
  // 栈结构，存放小tokens，栈顶（靠近端口的，最新进入的）的tokens数组中当前操作的这个tokens小数组
  const sections = []
  // 收集器，天生指向nestedTokens结果数组，引用类型值，所以指向的是同一个数组
  // 收集器的指向会变化，当遇见#的时候，收集器会指向这个token的下标为2的新数组
  let collector = nestedTokens
  tokens.forEach(token => {
    const [type, value] = token
    if (type === 'text') {
      collector.push(token)
    } else {
      const [flag] = value
      switch (flag) {
        case '#':
          token[0] = flag
          token[1] = value.substring(1)
          sections.push(token)
          collector.push(token)
          collector = token[2] = []
          break
        case '/': {
          sections.pop()
          collector = sections.length ? sections[sections.length - 1][2] : nestedTokens
          break
        }
        default:
          collector.push(token)
          break
      }
    }
  })

  return nestedTokens
}
