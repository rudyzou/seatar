/* eslint-disable @typescript-eslint/no-var-requires */
const { name, version } = require('./package.json')

const library = 'AntdLowcode'

module.exports = {
  sourceMap: false,
  alias: {
    '@': './src',
    lowcode: './lowcode'
  },
  plugins: [
    [
      '@seatar/build-plugin-lowcode',
      {
        noParse: true,
        engineScope: '@alilc',
        library,
        npmInfo: {
          package: name,
          version
        },
        lowcodeDir: 'lowcode',
        entryPath: 'src/index.tsx',
        categories: ['通用', '导航', '信息输入', '信息展示', '信息反馈'],
        baseUrl: {
          prod: `https://unpkg.com/${name}@${version}`,
          daily: `https://unpkg.com/${name}@${version}`
        },
        builtinAssets: [
          {
            packages: [
              {
                package: 'moment',
                version: '2.24.0',
                urls: [
                  'https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'
                ],
                library: 'moment'
              },
              {
                package: 'dayjs',
                version: '1.11.7',
                urls: ['https://unpkg.com/dayjs@1.11.7/dayjs.min.js'],
                library: 'dayjs'
              },
              {
                package: 'lodash',
                library: '_',
                urls: [
                  'https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'
                ]
              },
              {
                package: 'iconfont-icons',
                urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js'
              },
              {
                package: '@ant-design/icons',
                version: '5.0.1',
                urls: [
                  'https://unpkg.com/@ant-design/icons@5.0.1/dist/index.umd.min.js'
                ],
                library: 'icons'
              },
              {
                package: 'antd',
                version: '5.1.7',
                urls: ['https://unpkg.com/antd@5.1.7/dist/antd.min.js'],
                library: 'antd'
              }
            ],
            components: []
          }
        ]
      }
    ]
  ]
}
