module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-flow',
    ],
    plugins: [
      '@babel/plugin-syntax-flow',
      '@tamagui/babel-plugin',
      'babel-plugin-transform-inline-environment-variables',
      'react-native-reanimated/plugin',
    ],
  };
};
