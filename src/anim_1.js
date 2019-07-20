import React,{Component} from 'react';
import {Button,View,Text,Animated,Easing} from 'react-native';
import {styles} from './styles';

class AnimOne extends Component{
    constructor(){
        super();
        this.state = {
            redSquare: new Animated.ValueXY(0,0),
            doSquare: new Animated.Value(1)
        };
    }

    animate = () => {
        Animated.timing(this.state.redSquare,{
            toValue:{x:200,y:400},
            delay: 200,
            duration: 2000,
            easing: Easing.elastic(8)
        }).start();
    }

    onlyAnimate = () => {
        Animated.timing(this.state.doSquare,{
            toValue:0,
            delay: 200,
            duration: 500,
            //easing: Easing.elastic(8)
        }).start();
    }

    render(){
        return (
        <View>
            <Animated.View style={this.state.redSquare.getLayout() /*left:this.redSquare.x,top:this.redSquare.y*/}>
                <View style={styles.square1}></View>
            </Animated.View>
            <Button title="animate" onPress={this.animate}/>
            <Animated.View style={{opacity: this.state.doSquare}}>
                <View style={styles.square1}></View>
            </Animated.View>
            <Button title="opacity" onPress={this.onlyAnimate} />
        </View>);
    }
}

export default AnimOne;