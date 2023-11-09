export default {
  preset: 'ts-jest',
  transform: {
      "^.+\\.tsx?$": "ts-jest" 
  // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '/test/__ mocks __/fileMock.js',
      "^@components$": "/src/components/"
  },
  setupFiles: ['./jest.setup.js']
}