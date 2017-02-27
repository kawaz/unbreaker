# unbreaker

[![Build Status](https://travis-ci.org/kawaz/unbreaker.svg?branch=master)](https://travis-ci.org/kawaz/unbreaker)
[![Coverage Status](https://coveralls.io/repos/github/kawaz/unbreaker/badge.svg?branch=master)](https://coveralls.io/github/kawaz/unbreaker?branch=master)

Convert line breakable string to non-breakable character sequence.

![](demo.gif)

# Features

- [x] Convert breakable character sequence to unbreakable
- [x] Don't join explicit newline
- [x] Don't destroy combining character sequence like `xx`
- [x] Don't destroy emoji character
- [ ] Support CLI
- [ ] Support reverting to breakable from unbreakable

# Install

```
npm install unbreaker
```

# Usage

## CLI

```
$ npm install -g unbreaker
$ unbreaker '(*´ω｀*)' 'This is unbreakable.'
(*´ω｀*)
This is unbreakable.
```

You can copy and paste the output to Notes or HTML, etc...

## Code

```javascript
var unbreaker = require('unbreaker');
var kaomoji = '(*´ω｀*)';
console.log(unbreaker(kaomoji));
```

# Thanks
[]()


