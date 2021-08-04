const crc32js = require('./browser')

try {
  const crc32native = require('node-gyp-build')(__dirname).turbo_crc32
  // ~256 bytes of data seems to be the sweetspot where C is faster...
  module.exports = (b) => b.byteLength >= 256 ? crc32native(b) : crc32js(b)
} catch {
  module.exports = crc32js
}
