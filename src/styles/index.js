import { StyleSheet } from 'react-native';

const components = require('./_partials/_components.js');
const color = require('./_partials/_colors.js');
const home = require('./_home');

export const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 23,
    flex: 1,
  },
  ...components,
  ...home,
});
