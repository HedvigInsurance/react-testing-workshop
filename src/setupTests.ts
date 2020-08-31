const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
require('jest')
require('@babel/polyfill')

configure({ adapter: new Adapter() })

const { createSerializer } = require('enzyme-to-json')

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))
