# crc32-universal

CRC32 slice-by-16 implementation in JS with an optional native binding to speed it up even futher.
When used with Webpack/Browserify etc, it bundles the JS version.

``` js
npm install crc32-universal
```

JS version is provided by https://gist.github.com/101arrowz/e58695f7ccfdf74f60ba22018093edea (thank you to [@andrewosh](https://github.com/andrewosh) for finding that) and the C version is provided by https://github.com/stbrumme/crc32.

For payloads smaller than 256 bytes the JS version is always used as that's faster than context switching to C (Javascript is really fast!).

PR welcome that support the SSE4/Neon optimisations for Intel/ARM for even faster speedup.

## Usage

``` js
const crc32 = require('crc32-universal')
const uint = crc32(Buffer.from('hello'))
console.log(uint) // 907060870
```

## License

MIT
