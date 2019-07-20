import React,{Component} from 'react';
import {ScrollView,View,Text} from 'react-native';
import {styles} from './src/styles';
import AnimOne from './src/anim_1';
import AnimTwo from './src/anim_2';
import AnimThree from './src/anim_3';

class App extends Component{
  render(){
    return (<ScrollView>
      <View style={styles.container}>
        <AnimThree />
        <AnimOne />
        <AnimTwo />
      </View>
    </ScrollView>);
  }
}

export default App;