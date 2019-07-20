import React,{Component} from 'react';
import {ScrollView,View,Text} from 'react-native';
import {styles} from './src/styles';
import AnimOne from './src/anim_1';
import AnimTwo from './src/anim_2';

class App extends Component{
  render(){
    return (<ScrollView>
      <View style={styles.container}>
        <AnimOne />
        <AnimTwo />
      </View>
    </ScrollView>);
  }
}

export default App;