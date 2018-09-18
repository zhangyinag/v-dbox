/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g
export const camelize = (str: string): string => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
}

/**
 * Capitalize a string.
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Hyphenate a camelCase string.
 */
const hyphenateRE = /\B([A-Z])/g
export const hyphenate = (str: string): string => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}


/**
 * Check if value is primitive
 */
export function isPrimitive (value: any): boolean {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * generate a order array from a specific start and end point.
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
export function range (start: number, end: number): number[] {
  return Array(end - start + 1).fill(0).map((v, i) => i + start)
}