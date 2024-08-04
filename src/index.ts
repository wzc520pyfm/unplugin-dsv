import { extname } from 'node:path'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { DSVRowArray } from 'd3-dsv'
import { csvParse, tsvParse } from 'd3-dsv'
import toSource from 'tosource'
import { createFilter } from '@rollup/pluginutils'
import type { Options } from './types'

const defaults = {
  include: null,
  exclude: null,
  processRow: null,
}

const parsers = { '.csv': csvParse, '.tsv': tsvParse }

export const unpluginFactory: UnpluginFactory<Options | undefined> = (rawOptions = {}) => {
  const options = Object.assign({}, defaults, rawOptions)
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'unplugin-dsv',
    transform(code, id) {
      if (!filter(id))
        return null

      const ext = extname(id)
      if (!(ext in parsers))
        return null

      let rows = parsers[ext as keyof typeof parsers](code)

      if (options.processRow)
        rows = rows.map(row => (options.processRow as Options['processRow'])?.(row, id) || row) as DSVRowArray<string>

      return {
        code: `export default ${toSource(rows)};`,
        map: { mappings: '' },
      }
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
