import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

export const CountryQuery = gql`
  query CountryName($code: ID!) {
    country(code: $code) {
      name
    }
  }
`

export const CountryName = () => {
  const [code, setCode] = useState('')
  const countryQuery = useQuery(CountryQuery, {
    variables: { code: code.toUpperCase() },
  })

  return (
    <>
      <div>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div>
        {countryQuery.loading && '...'}
        {countryQuery.data?.country?.name && (
          <>Name: {countryQuery.data.country.name}</>
        )}
      </div>
    </>
  )
}
