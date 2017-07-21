/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import MobileCenter from 'mobile-center';
import crashes from 'mobile-center-crashes';
import analytics from 'mobile-center-analytics';
import React, { Component } from 'react';
import {
  Alert,
  AppState,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
Analytics.trackEvent("my first event");
Analytics.trackEvent("my second event");
function ClickBtn(){
  alert("Welcome");
}
function ChangeDisable(){
  this.setState({
    disabled:this.state.disabled ?false:true
  });
  throw new Error("This is a test javascript crash!");
}
export default class react0721Cloud extends Component {
  constructor(props){
    super(props);
    this.state={disabled:false,}
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
                 onPress={ClickBtn}
                 title="Learn More"
                 color="green"
                 disabled={this.state.disabled}
                 accessibilityLabel="Learn more about this purple button"/>
        <Button 
                onPress={ChangeDisable.bind(this)}
                title="change"
                color="gray"
                accessibilityLabel="Learn more about this purple button"/>

       /* <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>*/
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('react0721Cloud', () => react0721Cloud);
