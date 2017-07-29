import React from 'react';
import { View, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { styles } from '../styles';

/**
 * Custom Button component
 * @param {title, onPress (optional: styles.button, styles.buttonText)} props
 */
const Button = (props) => {
  return (
    <TouchableNativeFeedback
        background={ Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : '' }
        onPress={props.onPress}>
      <View style={props.button || styles.button}>
        <Text style={props.buttonText || styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Button;
