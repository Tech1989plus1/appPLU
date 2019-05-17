/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {styles} from './style/appStyles';
//import {index} from './component/indexView';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style= {styles.container}>
        <Text style= {styles.welcome}>PLU'S</Text>
        <Text style = {styles.instructions}>by Derrick Marshall</Text>
      </View>
    );
  }
}

