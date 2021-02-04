import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate'

window.templateEngine = {
  render(templateStr, data) {
    const tokens = parseTemplateToTokens(templateStr)
    return renderTemplate(tokens, data)
  }
}
