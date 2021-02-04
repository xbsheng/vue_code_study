export default class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr
    this.pos = 0
    this.tail = templateStr
  }

  scan(tag) {
    if (this.tail.indexOf(tag) !== 0) return
    const length = tag.length
    this.pos += length
    this.tail = this.templateStr.substring(this.pos)
  }

  scanUtil(tag) {
    const startPos = this.pos
    while (this.tail.indexOf(tag) !== 0 && !this.eos()) {
      this.pos++
      this.tail = this.templateStr.substring(this.pos)
    }
    const str = this.templateStr.substring(startPos, this.pos)
    return str.trim()
  }

  eos() {
    return this.pos >= this.templateStr.length
  }
}
