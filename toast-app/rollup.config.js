import babel from '@rollup/plugin-babel'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'
import path from 'path'

const projectRootDir = path.resolve(__dirname)

export default {
  input: 'src/index.js',
  output: {
    name: 'index',
    file: 'dist/index.js',
    format: 'esm',
    globals: { react: 'React', 'react-dom': 'ReactDom' },
  },
  external: ['react', 'react-dom'],
  plugins: [
    postcss({
      extract: true,
      minimize: true,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
      plugins: ['@babel/plugin-syntax-jsx'],
    }),
    svgr(),
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(
            projectRootDir,
            './src',
          ),
        },
        {
          find: '@assets',
          replacement: path.resolve(
            projectRootDir,
            './public/assets',
          ),
        },
      ],
    }),
    resolve({
      browser: true,
      preferBuiltins: true,
    }),
    commonjs({
      ignoreGlobal: true,
      include: /\/node_modules\//,
      namedExports: {
        react: Object.keys(require('react')),
        'react-is': Object.keys(require('react-is')),
        'node_modules/react/react.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement',
        ],
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
  ],
}
