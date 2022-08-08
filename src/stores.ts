import { writable, type Writable } from 'svelte/store'
import { request, gql } from 'graphql-request'

export type countryResponse = {
  name: string,
  emoji: string,
  currency: string
}

// export const countries :Writable<any[]> = writable([]) 
export const countries = writable<countryResponse[]>([])

const query = gql`
{
    countries {
      name
      emoji
      currency
    }
  }
`

const fetchCountries = async () => {
  try {
    const res = await request('https://countries.trevorblades.com/', query)
    const data = await res.countries
    countries.set(data)
  } catch (err) {
    console.error(err)
  }
}

fetchCountries()

export const currencies = writable('EUR');



export const CountryCoinValue = writable<string[]>([])


