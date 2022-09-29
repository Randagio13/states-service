import { States } from '../lib/cjs'

describe('States.getStates', () => {
  it('Get all states', () => {
    const c = States.getStates()
    expect(c).toBeDefined()
    expect(c[0]).toHaveProperty('name')
  })
  it('Get all states with localization', () => {
    const c = States.getStates({
      locale: 'it',
    })
    expect(c).toBeDefined()
    expect(c[0]).toHaveProperty('name')
  })
  it('Get states by country_code', () => {
    const c = States.getStates({
      filters: {
        country_code: 'IT',
      },
    })
    expect(c).toBeDefined()
    expect(c[0]).toHaveProperty('name')
    expect(c[0].name).toBe('Abruzzo')
  })
  it('Get states by an array of country_code', () => {
    const c = States.getStates({
      filters: {
        country_code: ['IT', 'US'],
      },
    })
    expect(c).toBeDefined()
    expect(c[0]).toHaveProperty('name')
    expect(c[0].name).toBe('Abruzzo')
  })
  it('Get italians regions and locale', () => {
    const c = States.getStates({
      filters: {
        country_code: 'IT',
        is_region: true,
      },
      locale: 'it',
    })
    expect(c).toBeDefined()
    expect(c[0]).toHaveProperty('name')
    expect(c[0].name).toBe('Abruzzo')
    expect(c).toHaveLength(20)
  })
  it('Get italians provinces and locale', () => {
    const c = States.getStates({
      filters: {
        country_code: 'IT',
        is_region: false,
      },
    })
    expect(c).toBeDefined()
    expect(c[0]).toHaveProperty('name')
  })
  it('Get italians provinces and locale', () => {
    const c = States.getStates({
      filters: {
        country_code: 'IT',
        is_region: false,
      },
      locale: 'it',
    })
    expect(c).toBeDefined()
    expect(c[0]).toHaveProperty('name')
  })
  it('Get one italian province and locale', () => {
    const c = States.getStates({
      filters: {
        country_code: 'IT',
        is_region: false,
        state_code: 'GE',
      },
      locale: 'it',
    })
    expect(c).toBeDefined()
    expect(c[0]).toHaveProperty('name')
    expect(c[0].name).toBe('Provincia di Genova')
    expect(c).toHaveLength(1)
  })
  it('Get one italian provinces sort by asc', () => {
    const c = States.getStates({
      filters: {
        country_code: 'IT',
        is_region: false,
      },
      locale: 'it',
      sort: {
        mode: 'asc',
      },
    })
    expect(c).toBeDefined()
    expect(c[0]).toHaveProperty('name')
  })
  it('Get one italian provinces sort by desc', () => {
    const c = States.getStates({
      filters: {
        country_code: 'IT',
        is_region: false,
      },
      locale: 'it',
      sort: {
        mode: 'desc',
      },
    })
    expect(c).toBeDefined()
    expect(c[0]).toHaveProperty('name')
  })
  it('Get one italian provinces sort by alphabetic state_code', () => {
    const c = States.getStates({
      filters: {
        country_code: 'IT',
        is_region: false,
      },
      locale: 'it',
      sort: {
        mode: 'alphabetical',
        key: 'state_code',
      },
    })
    expect(c).toBeDefined()
    expect(c[0]).toHaveProperty('name')
  })
  it('Get state of the US filter by country and state code', () => {
    const c = States.getStates({
      filters: {
        country_code: 'US',
        state_code: 'DC',
      },
    })
    expect(c).toBeDefined()
    expect(c[0]).toHaveProperty('name')
  })
})
