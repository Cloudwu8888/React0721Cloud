/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import MobileCenter from 'mobile-center';
import crashes from 'mobile-center-crashes';
import analytics from 'mobile-center-analytics';
import push from 'mobile-center-push';
import React, { Component } from 'react';
import {
  Button,
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
Push.setEventListener({
  pushNotificationReceived: function (pushNotification) {
    let message = pushNotification.message;
    let title = pushNotification.title;

    if (message === null || message === undefined) {
      // Android messages received in the background don't include a message. On Android, that fact can be used to
      // check if the message was received in the background or foreground. For iOS the message is always present.
      title = "Android background";
      message = "<empty>";
    }

    // Custom name/value pairs set in the Mobile Center web portal are in customProperties
    if (pushNotification.customProperties && Object.keys(pushNotification.customProperties).length > 0) {
      message += '\nCustom properties:\n' + JSON.stringify(pushNotification.customProperties);
    }

    if (AppState.currentState === 'active') {
      Alert.alert(title, message);
    }
    else {
      // Sometimes the push callback is received shortly before the app is fully active in the foreground.
      // In this case you'll want to save off the notification info and wait until the app is fully shown
      // in the foreground before displaying any UI. You could use AppState.addEventListener to be notified
      // when the app is fully in the foreground.
    }
  }
});

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
