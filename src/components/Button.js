import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { styles } from '../styles';

class Button extends Component {

  render() {
    return (
      <TouchableNativeFeedback
          background={ Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : '' }
          onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

}

export default Button;
