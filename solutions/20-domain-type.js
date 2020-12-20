/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

function domainType(domains) {
  return domains.map((domain) => {
    const domainNameComponents = domain.split('.');
    const TLD = domainNameComponents[domainNameComponents.length - 1];
    switch (TLD) {
      case 'com':
        return 'commercial';
      case 'org':
        return 'organization';
      case 'net':
        return 'network';
      case 'info':
        return 'information';
      default:
    }
  });
}

module.exports = { domainType };
