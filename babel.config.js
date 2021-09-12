module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~app': './src/app',
          '~screens': './src/app/components/screens',
          '~shared': './src/app/components/shared',
          '~helpers': './src/app/helpers',
          '~redux': './src/app/redux',
        },
      },
    ],
  ],
};
