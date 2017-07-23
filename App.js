import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import AppNavigator from './src/navigators';
import { styles } from './src/styles';

class App extends React.Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <AppNavigator ref={nav => { this.navigation = nav; }} />
      </View>
    );
  }

}


AppRegistry.registerComponent('Template', () => App);

export default App;
