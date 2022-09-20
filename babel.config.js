module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            screens: './src/screens',
            components: './src/components',
            navigation: './src/navigation.ts',
          },
        },
      ],
    ],
  };
};
