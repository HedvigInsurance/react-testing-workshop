import { mount } from 'enzyme'
import { Counter } from './Counter'
import React from 'react'

it('renders without 💥', () => {
  const wrapper = mount(<Counter />)
  expect(wrapper.find('button')).toHaveLength(2)
  expect(wrapper.find('CountShower').text()).toBe('0')
})

it('increments counter', () => {
  const wrapper = mount(<Counter />)
  expect(wrapper.find('CountShower').text()).toBe('0')

  wrapper.find('#increment').simulate('click')

  expect(wrapper.find('CountShower').text()).toBe('1')
})

it('decrements counter', (done) => {
  done.fail('Write this test')
})
