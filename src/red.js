import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
import {getArticles} from './actions';

class RedComponent extends Component {
    componentDidMount(){
        this.props.dispatch(getArticles());
    }

    render(){
        return (<View>
            <Text>redux component here eheh :)</Text>
        </View>);
    }
}

function mapStateToProps(state){
    //console.warn(state);
    return{
        articles: state.articles
    }
}

export default connect(mapStateToProps)(RedComponent);