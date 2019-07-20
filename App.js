import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {styles} from './src/styles';
import AnimOne from './src/anim_1';
import AnimTwo from './src/anim_2';

class App extends Component{
  render(){
    return <View style={styles.container}>
       <AnimOne />
       <AnimTwo />
       <Text>Haaaaaloooo :)</Text>
    </View>
  }
}

export default App;