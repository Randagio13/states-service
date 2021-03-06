import { SortType } from './index'

export function dataFiltered<D, F extends keyof D>(
  data: D[],
  filters: Record<F, any>
): D[] {
  let dataFiltered = data
  for (const filter of Object.keys(filters)) {
    dataFiltered = dataFiltered.filter((item) => {
      return Array.isArray(filters[filter as F])
        ? filters[filter as F].includes(item[filter as F])
        : filters[filter as F] === item[filter as F]
    })
  }
  return dataFiltered
}

type O = {
  mode: SortType
  key?: any
}

export function sorter<D, S extends O>(data: D[], options: S): D[] {
  switch (options.mode) {
    case 'alphabetical':
      return data.sort((a: any, b: any) =>
        a[options.key as string].localeCompare(b[options?.key as string])
      )
    case 'desc':
      return data.reverse()
    default:
      return data.sort()
  }
}
