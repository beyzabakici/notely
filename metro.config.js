const exclusionList = require('metro-config/src/defaults/exclusionList');
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    blacklistRE: exclusionList([/db.json\/.*/]),
  },
};
