import React,{Component} from 'react';
import {View,Text,Button,Animated,Easing} from 'react-native';
import {styles} from './styles';

class AnimTwo extends Component {
    constructor(){
        super();
        this.state = {
            square1: new Animated.Value(1),
            square2: new Animated.ValueXY(0,0),
            square3: new Animated.Value(1),
            text1: new Animated.Value(1)
        };
    }

    animate1 = () => {
        Animated.timing(this.state.square1,{
            toValue: 0,
            delay: 200,
            duration: 1000
        }).start();
    };

    animate2 = () => {
        Animated.timing(this.state.square2,{
            toValue: {x:100,y:10},
            delay: 200,
            duration: 1000,
            easing: Easing.elastic(10)
        }).start();
    };

    animate3 = () => {
        Animated.timing(this.state.square3,{
            toValue: 0,
            delay: 200,
            duration: 1000
        }).start();
    };

    textAnimate1 = () => {
        Animated.timing(this.state.text1,{
            toValue: 0,
            delay: 100,
            duration: 2000
        }).start();
    };

    render(){
        return (
        <View>
            <Text>second animation component :)</Text>
            <Animated.View style={{
                opacity: this.state.square1,
                //left: this.state.square1.interpolate({
                  //  inputRange: [0,1],
                    //outputRange: [300,0]
                transform: [{
                    rotateX: this.state.square1.interpolate({
                        inputRange: [0,0.5,1],
                        outputRange: ['0deg','180deg','0deg']
                    })
                }]
                }}>
                <View style={styles.oSquare}></View>
            </Animated.View>
            <Button title="interpolate mutli value rotate with opacity value" onPress={this.animate1} />
            <Animated.View style={this.state.square2.getLayout()}>
                <View style={styles.oSquare}></View>
            </Animated.View>
            <Button title="animate second" onPress={this.animate2} />
            <Animated.View style={{
                opacity: this.state.square3,
                left: this.state.square3.interpolate({
                    inputRange:[0,1],
                    outputRange: [300,0]
                })
            }}>
                <View style={{width: 100,height: 100,backgroundColor: 'green'}}></View>
            </Animated.View>
            <Button title="interpolate left with opacity value" onPress={this.animate3} />
            <Animated.Text style={{
                fontSize: this.state.text1.interpolate({
                    inputRange: [0,0.5,1],
                    outputRange: [20,5,30]
                })
            }}>
                <Text>HAAAAAAAALOOOOOOO :)</Text>
            </Animated.Text>
            <Button title="animate font" onPress={this.textAnimate1} />
        </View>);
    }
}

export default AnimTwo;