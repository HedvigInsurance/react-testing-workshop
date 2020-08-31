import React from 'react'
import { mount } from 'enzyme'
import { CountryName, CountryQuery } from './CountryName'
import { MockedProvider } from '@apollo/client/testing'
import { act } from 'react-dom/test-utils'

const nextTickAsync = () =>
  new Promise<void>((resolve) => setTimeout(resolve, 0))

it('renders without 💥', async () => {
  const wrapper = mount(
    <MockedProvider
      mocks={[
        {
          request: { query: CountryQuery, variables: { code: '' } },
          result: { data: {} },
        },
      ]}
    >
      <CountryName />
    </MockedProvider>,
  )

  expect(wrapper.find('div').at(1).text()).toBe('...')

  await act(() => nextTickAsync())

  expect(wrapper.find('div').at(1).text()).toBe('')
})

it('finds a country when searching for a correct country code', async () => {
  const wrapper = mount(
    <MockedProvider
      mocks={[
        {
          request: { query: CountryQuery, variables: { code: '' } },
          result: { data: {} },
        },
        // TODO: add a 2nd query
      ]}
    >
      <CountryName />
    </MockedProvider>,
  )

  expect(wrapper.find('div').at(1).text()).toBe('...')
  await act(() => nextTickAsync())

  // TODO: simulate user input

  expect(wrapper.find('div').at(1).text()).toBe('Name: Sweden')
})
