const {decorateConfig} = require('../');

describe('decorateConfig', () => {
  it('should make the backgroundColor transparent', () => {
    expect(decorateConfig({backgroundColor: '#1b2b34'})).toEqual({
      backgroundColor: 'rgba(27, 43, 52, 0.85)',
    });
  });
});
