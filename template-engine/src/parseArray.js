import renderTemplate from './renderTemplate'

export default (token, list) => {
  return list.reduce((total, current) => (total += renderTemplate(token, current)), '')
}
