import { getPackageJSON, resolvePackgePath, getBaseRollupPlugins } from './utils'

const { name, module } = getPackageJSON('react')

// 输入
const pkgPath = resolvePackgePath(name)
// 产物
const pkgDistPath = resolvePackgePath(name, true)

export default [
  // react
  {
    input: `${pkgPath}/${module}`,
    output: {
      file: `${pkgDistPath}/index.js`,
      name: 'index.js',
      format: 'umd',
    },
    plugins: getBaseRollupPlugins()
  },
]
