{
  "targets": [{
    "target_name": "turbo_crc32",
    "include_dirs": [
      "<!(node -e \"require('napi-macros')\")",
    ],
    "sources": [
      "./binding.cc",
    ],
    'xcode_settings': {
      'OTHER_CFLAGS': [
        '-O3',
      ]
    },
    'cflags': [
      '-O3',
    ],
    'conditions': [
      ['OS=="win"', {
        'link_settings': {
          'libraries': [
            '-lws2_32.lib'
          ]
        }
      }]
    ],
  }]
}
