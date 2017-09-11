import React, { Component } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../styles';

/**
 *************************************
 *        Naviagtor Component        *
 *************************************
 */
class Home extends Component {
  constructor(props) {
    super(props);
    /* component state */
    this.state = {};
    /* navigation params */
    this.params = this.props.navigation.state.params;
    /* bindings */
    // this.meth = this.meth.bind(this);
  }

  /* +-------------------------------------------------------------------------------------
   * | navigationOptions
   * +------------------------------------------------------------------------------------- */
  static navigationOptions = ({ navigation }) => ({
    title: `Home` //`$ {navigation.state.params.var }`
    // headerRight: <Button title="Info" onPress={() => Alert.alert('Info nav clicked!') } />,
  });

  /* +-------------------------------------------------------------------------------------
   * | render
   * +------------------------------------------------------------------------------------- */
   render() {
     return (
       <View style={styles.container}>
         <Text>Open up 'src/navigators/Home.js' to start working on your app!</Text>
         <Text>Changes you make will automatically reload.</Text>
         <Text>Shake your phone to open the developer menu.</Text>
         <Text>To add a new navigation item simply create a new file.</Text>
         <Text>Export the created file and include it in 'src/navigators/index.js'</Text>
         <Button
            raised
            icon={{ name: 'heart', type: 'font-awesome' }}
            title="Custom Button"
            onPress={() => Alert.alert('Yay!')}
          />
       </View>
     );
   }
  }
}

export default Home;
