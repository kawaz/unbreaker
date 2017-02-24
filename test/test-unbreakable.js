import test from 'ava'
import 'babel-core/register'
import unbreakable from '../src/unbreakable.js'

const NBSP = '\u00a0'
const WJ = '\u2060'

test('If it is already unbreakable, do not anything', t => {
  t.is('xyz', unbreakable('xyz'))
})

test('If it includes space, replace spaceto NBSP', t => {
  const original = 'a b c'
  const expect = `a${NBSP}b${NBSP}c`
  t.is(expect, unbreakable(original))
})

test('If it is only breakable character sequence, insert WJ to each one character', t => {
  const original = 'あいうえお'
  const expect = `あ${WJ}い${WJ}う${WJ}え${WJ}お`
  t.is(expect, unbreakable(original))
})

test('If breakable and not breakable are mixed, insert WJ to only break point', t => {
  {
    const original = 'なすなすじゃないもん(T^T)'
    const expect = [
      'なすなす'.split('').join(WJ),
      'じゃ', // this is not breakable
      'ないもん'.split('').join(WJ),
      '(T^T)' // this is not breakable
    ].join(WJ)
    t.is(expect, unbreakable(original))
  }
  {
    const original = `(´・ω・｀)`
    const expect = `(´・${WJ}ω・${WJ}｀)`
    t.is(expect, unbreakable(original))
  }
  {
    const original = 'lorem ipsum...'
    const expect = `lorem${NBSP}ipsum...`
    t.is(expect, unbreakable(original))
  }
})

test('If it includes explicit newline, do not join it', t => {
  const original = `lorem ipsum...\nthis is a pen.`
  const expect = `lorem${NBSP}ipsum...\nthis${NBSP}is${NBSP}a${NBSP}pen.`
  t.is(expect, unbreakable(original))
})

test('If includes combining character sqeuence, not insert WJ', t => {
  const original = '(ఠ్ఠ ˓̭ ఠ్ఠ)'
  const expect = `(ఠ్ఠ${NBSP}˓̭${NBSP}ఠ్ఠ)`
  t.is(expect, unbreakable(original))
})

test('Treat one emoji character as one character ()', t => {
  {
    const original = `🍎🍊🍉`
    const expect = `🍎${WJ}🍊${WJ}🍉`
    t.is(expect, unbreakable(original))
    t.true([...original].length == 3)
    t.true([...expect].length == 5)
  }
})
