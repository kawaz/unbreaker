import LineBreaker from 'linebreak'

export default function (str) {
  const str_nbsp = str.replace(/ /g, '\u00a0')
  const parts = []
  const breaker = new LineBreaker(str_nbsp)
  let last = 0, bk = breaker.nextBreak()
  while(bk) {
    const word = str_nbsp.slice(last, bk.position)
    parts.push(word)
    if (!bk.required && bk.position != str_nbsp.length) {
      parts.push('\u2060')
    }
    last = bk.position
    bk = breaker.nextBreak()
  }
  return parts.join('')
}
