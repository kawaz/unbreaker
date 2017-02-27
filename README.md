# unbreaker

[![NPM](https://nodei.co/npm/unbreaker.png)](https://nodei.co/npm/unbreaker/)
[![Build Status](https://travis-ci.org/kawaz/unbreaker.svg?branch=master)](https://travis-ci.org/kawaz/unbreaker)
[![Coverage Status](https://coveralls.io/repos/github/kawaz/unbreaker/badge.svg?branch=master)](https://coveralls.io/github/kawaz/unbreaker?branch=master)

Create line unbreakable character sequence from breakable strings.

# Features

- [x] Convert breakable character sequence to unbreakable
- [x] Don't join explicit newline
- [x] Don't destroy combining character sequence like this "ఠ్ఠ"
- [x] Don't destroy emoji character
- [x] Support CLI
- [ ] Support reverting to breakable from unbreakable

# Install

```
npm install unbreaker
```

# Example

```javascript
var unbreaker = require('unbreaker');
[
  'This is not breakable.',
  'ヽ(=´▽`=)ﾉ',
  '•̀.̫•́✨'
].forEach(function(breakable) {
  console.log( unbreaker(breakable) )
});
```

You can copy and paste the output to TextEdit or html, etc...

# CLI

You can use cli.

```console
$ unbreaker '(*´ω｀*)' あいうえお
(*⁠´ω⁠｀⁠*)
あ⁠い⁠う⁠え⁠お
```

# Screenshot

![unbreaker-demo](https://cloud.githubusercontent.com/assets/156236/23367668/7050a68c-fd4e-11e6-9b7a-21567e335b1f.gif)

# References

- [Dango - Unbreakable Kaomoji](http://getdango.com/unbreakable-kaomoji/)


