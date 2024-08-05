declare module '*.csv' {
  const value: Record<string, unknown>
  export default value
}

declare module '*.tsv' {
  const value: Record<string, unknown>
  export default value
}

declare module '*.csv?raw' {
  const value: string
  export default value
}

declare module '*.tsv?raw' {
  const value: string
  export default value
}
