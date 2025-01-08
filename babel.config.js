module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        ['babel-preset-expo', { jsxRuntime: 'automatic' }],
        // '@babel/preset-react'
      ],
      plugins: [
        'react-native-reanimated/plugin',
        // 'expo-router/babel'
      ],
    };
  };