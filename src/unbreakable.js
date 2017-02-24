export default function (str) {
  return [...str.replace(/ /g, '\u00a0')].join('\u2060')
}
