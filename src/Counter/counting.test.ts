import { decrement, increment } from './counting'

it('increments a number', () => {
  expect(increment(0)).toBe(1)
})

it('decrements a number', () => {
  expect(decrement(1)).toBe(0)
})

it("doesn't decrement negative number", (done) => {
  done.fail('Write this test')
})
