import { StyleSheet } from 'react-native';

import color from './_partials/_colors.js';
import components from './_partials/_components.js';

import home from './_home';

/**
 ******************************************
 *        Application's StyleSheet        *
 ******************************************
 */
export const styles = StyleSheet.create({
  // General Styling
    wrapper: {
      flex: 1,
      paddingTop: 23,
    },
    container: {
      flex: 1,
      padding: 5,
      backgroundColor: color.white,
    },
    ...components, // contains styling for custom components
    ...home, // contains home styling
});
