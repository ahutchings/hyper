const {decorateConfig} = require('../');

describe('decorateConfig', () => {
  it('should make the backgroundColor transparent', () => {
    const actual = decorateConfig({backgroundColor: '#1b2b34'}).backgroundColor;
    expect(actual).toEqual('rgba(27, 43, 52, 0.85)');
  });
});
