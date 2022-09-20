const MetroConfig = require('@ui-kitten/metro-config');

const evaConfig = {
  evaPackage: '@eva-design/material',
  // Optional, but may be useful when using mapping customization feature.
  // customMappingPath: './custom-mapping.json',
};

module.exports = MetroConfig.create(evaConfig, {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
});
