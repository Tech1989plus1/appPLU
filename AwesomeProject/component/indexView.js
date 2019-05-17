import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {styles} from './style/appStyles';

class indexView extends Component{
    constructor(props){
        super(props);
        this.state = {
            appHeader = this.props.title,
            appCreat = this.props.name
        }

        render(){
            return (
                <View style= {styles.container}>
                    <Text style= {styles.welcome}>PLU'S</Text>
                    <Text style = {styles.instructions}>by Derrick Marshall</Text>
                 </View>
            );
        }
    }

}

export {indexView}