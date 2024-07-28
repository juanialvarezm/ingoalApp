const {mergeConfig,getDefaultConfig} = require('@react-native/metro-config');

// const { getDefaultConfig } = require('expo/metro-config')

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname, {
//   // [Web-only]: Enables CSS support in Metro.
//   isCSSEnabled: true,
// })

// // add nice web support with optimizing compiler + CSS extraction
// const { withTamagui } = require('@tamagui/metro-plugin')
// module.exports = withTamagui(config, {
//   components: ['tamagui'],
//   config: './tamagui.config.ts',
//   outputCSS: './tamagui-web.css',
// })



/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 * 
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
