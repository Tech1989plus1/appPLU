/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import App from './App';
import {name as appName} from './app.json';


import {index} from './component/indexView';

class PLUS extends Component{
    constructor(props){
        super(props);
        this.state = {show: "start"}
    }

    render(){
        let content = null;

        switch(this.state.show){
            case "show":
                content = <index name = {}/>;
                break;

            default:
                content = <View><Text>Warning something went wrong!!!</Text></View>
        }
    }
}

AppRegistry.registerComponent(appName, () => App);
