import path from 'path'
import fs from 'fs'
import ts from 'rollup-plugin-typescript2'
import cjs from '@rollup/plugin-commonjs'

// eslint-disable-next-line no-undef
export const pkgPath = path.resolve(__dirname, '../../packages')
// eslint-disable-next-line no-undef
export const distPath = path.resolve(__dirname, '../../dist/node_modules')

export function resolvePackgePath(pkgName, isDist) {
  if (isDist) {
    return `${distPath}/${pkgName}`
  }
  return `${pkgPath}/${pkgName}`
}

export function getPackageJSON(pkgName) {
  const path = `${resolvePackgePath(pkgName)}/package.json`
  const str = fs.readFileSync(path, { encoding: 'utf-8' })
  return JSON.parse(str)
}

export function getBaseRollupPlugins({ typescriptConfig = {} } = {}) {
  return [
    cjs(),
    ts(typescriptConfig)
  ]
}
