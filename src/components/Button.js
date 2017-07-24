import React from 'react';
import { View, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { styles } from '../styles';

const Button = (props) => {
  return (
    <TouchableNativeFeedback
        background={ Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : '' }
        onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Button;
