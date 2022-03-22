import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import alias from '@rollup/plugin-alias'

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
        },
      },
    ],
    external: ['react', 'react-dom', 'styled-components'],
    plugins: [
      resolve({ extensions: ['.jsx', '.js', '.tsx'] }),
      postcss({
        plugins: [],
        minimize: true,
      }),
      alias({
        resolve: ['.jsx', '.js'],
        entries: [
          {
            find: '@/components',
            replacement: '../components',
          },
          {
            find: '@/utils',
            replacement: '../../../utils',
          },
          {
            find: '@/constants',
            replacement: '../../../constants',
          },
          {
            find: '@/ToastService',
            replacement: '../ToastService',
          },
        ],
      }),
      babel({
        exclude: 'node_modules/**',
        presets: [['@babel/preset-react']],
      }),
      commonjs({
        ignoreGlobal: true,
        include: /\/node_modules\//,
        namedExports: {
          react: Object.keys(require('react')),
          'react-is': Object.keys(require('react-is')),
        },
      }),
      external(),
    ],
  },
]
