import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import theme from '../theme.js';

export default class Main extends React.Component {
  static navigationOptions = {
    title: "Today's Story",
  };


  render() {
    return (
      <View style={styles.container}>
        <Button title={"Start"} style={styles.btn} color={theme.themeColorDark} />
      </View>
    );
  }
}

const size = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.themeColorLight,
  }
});
