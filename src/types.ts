import type { DSVRowString } from 'd3-dsv'

/**
 * A valid `picomatch` glob pattern, or array of patterns.
 */
export type FilterPattern = ReadonlyArray<string | RegExp> | string | RegExp | null

export interface Options {
  // define your plugin options here
  include?: FilterPattern
  exclude?: FilterPattern
  processRow?: ((row: DSVRowString<string>, id: string) => DSVRowString<string>) | null
}
