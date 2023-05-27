module.exports = {
  alias: {
    '@': './src'
  },
  plugins: [
    [
      '@seatar/build-plugin-lowcode',
      {
        engineScope: '@alilc',
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
              },
              {
                package: '@seatar/antd-materials',
                version: '1.0.10',
                library: 'AntdLowcode',
                urls: [
                  'https://unpkg.com/@seatar/antd-materials@1.0.10/build/lowcode/view.js',
                  'https://unpkg.com/@seatar/antd-materials@1.0.10/build/lowcode/view.css'
                ],
                editUrls: [
                  'https://unpkg.com/@seatar/antd-materials@1.0.10/build/lowcode/view.js',
                  'https://unpkg.com/@seatar/antd-materials@1.0.10/build/lowcode/view.css'
                ]
              },
              {
                package: '@ant-design/pro-components',
                version: '2.3.54',
                library: 'ProComponents',
                urls: [
                  'https://unpkg.com/@ant-design/pro-components@2.3.54/dist/pro-components.min.js'
                ],
                editUrls: [
                  'https://unpkg.com/@ant-design/pro-components@2.3.54/dist/pro-components.min.js'
                ]
              }
            ],
            components: [
              {
                exportName: 'AlilcAntdLowcodeMaterialsMeta',
                npm: {
                  package: '@seatar/antd-materials',
                  version: '1.0.10'
                },
                url: 'https://unpkg.com/@seatar/antd-materials@1.0.10/build/lowcode/meta.js',
                urls: {
                  default:
                    'https://unpkg.com/@seatar/antd-materials@1.0.10/build/lowcode/meta.js'
                }
              }
            ],
            sort: {
              groupList: ['精选组件', '原子组件'],
              categoryList: [
                '通用',
                '导航',
                '反馈',
                '其他',
                '表单',
                '数据展示',
                '基础',
                '布局'
              ]
            },
            groupList: ['精选组件', '原子组件'],
            ignoreComponents: {}
          }
        ]
      }
    ]
  ]
}
