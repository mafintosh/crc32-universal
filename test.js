const tape = require('tape')
const crc32 = require('./')
const browser = require('./browser')
const crypto = require('crypto')

tape('basic', function (t) {
  const a = crc32(Buffer.from('hello'))
  const b = browser(Buffer.from('hello'))

  t.same(a, b)
  t.same(a, 907060870)
  t.end()
})

tape('bunch of random buffers', function (t) {
  for (let i = 0; i < 1e5; i++) {
    const buf = crypto.randomBytes(i)
    const a = crc32(buf)
    const b = browser(buf)
    if (a !== b) {
      t.same(a, b, 'same crc32')
      t.end()
      return
    }
  }

  t.pass('all crc32s were equal')
  t.end()
})
