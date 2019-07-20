import React,{Component} from 'react';
import {View,Button,Text,Animated} from 'react-native';
import {styles} from './styles';

class AnimThree extends Component {
    state = {
        square1: new Animated.Value(1),
        square2: new Animated.ValueXY(0,0),
        square3: new Animated.ValueXY(0,1)
    };

    runAnimation = () => {
        Animated.sequence([
            Animated.timing(this.state.square1,{
                toValue: 0
            }),
            Animated.spring(this.state.square2,{
                toValue: {x:200,y:300}
            }),
            Animated.spring(this.state.square3,{
                toValue: {x:100,y:-200}
            })
        ]).start();
    };

    render(){
        return (<View>
            <Animated.View style={{opacity: this.state.square1}}>
                <View style={styles.square1}></View>
            </Animated.View>
            <Animated.View style={this.state.square2.getLayout()}>
                <View style={styles.square2}></View>
            </Animated.View>
            <Animated.View style={this.state.square3.getLayout()}>
                <View style={styles.square3}></View>
            </Animated.View>
            <Button title="animate all here!" onPress={this.runAnimation} />
            <View style={{height: 50}}></View>
        </View>);
    }
}

export default AnimThree;