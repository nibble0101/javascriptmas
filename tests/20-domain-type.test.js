const { domainType } = require('../solutions/20-domain-type');

const domains = ['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'];
const result = ['organization', 'commercial', 'network', 'information'];

describe('20-domain-type.test.js', () => {
  test('expect domainType to be a function', () => {
    expect(typeof domainType === 'function').toBe(true);
  });
  test('expect domainType not to throw an error', () => {
    expect(() => domainType(domains)).not.toThrow();
  });
  test(`expect domainType(${JSON.stringify(domains)}) to return ${JSON.stringify(result)}`, () => {
    expect(domainType(domains)).toEqual(result);
  });
  test(`expect domainType(${JSON.stringify(domains)}) to return array`, () => {
    expect(Array.isArray(domainType(domains))).toBe(true);
  });
  test(`expect domainType(${JSON.stringify(domains)}) to return array of length 4`, () => {
    expect(domainType(domains).length).toEqual(4);
  });
});
