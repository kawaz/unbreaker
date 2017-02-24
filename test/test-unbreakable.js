import test from 'ava'
import 'babel-core/register'
import unbreakable from '../src/unbreakable.js'

test('simple case', t => {
  t.not('ヽ(=´▽`=)ﾉ', unbreakable('ヽ(=´▽`=)ﾉ'))
  t.is('ヽ\u2060(\u2060=\u2060´\u2060▽\u2060`\u2060=\u2060)\u2060ﾉ', unbreakable('ヽ(=´▽`=)ﾉ'))
})

test('If includes space, replace to nbsp', t => {
  t.not('ヽ(=´▽ `=)ﾉ', unbreakable('ヽ(=´▽ `=)ﾉ'))
  t.is('ヽ\u2060(\u2060=\u2060´\u2060▽\u2060\u00a0\u2060`\u2060=\u2060)\u2060ﾉ', unbreakable('ヽ(=´▽ `=)ﾉ'))
})

test('If includes combining character sqeuence, not insert WJ in it', t => {
  const kaomoji = '(ఠ్ఠ ˓̭ ఠ్ఠ)'
  const expect = [
    '(',
    'ఠ్ఠ',
    '',
    '\u00a0',
    '˓̭',
    '\u00a0',
    'ఠ్ఠ',
    ')',
  ].join('\u2060')
  t.is(expect, unbreakable(kaomoji))
})
