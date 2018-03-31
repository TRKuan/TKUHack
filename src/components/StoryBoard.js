import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import theme from '../theme.js';

export default class StoryBoard extends React.Component {
  static navigationOptions = {
    title: "Story Board",
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Story Board</Text>
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
  },
  title: {
    fontSize: size*2,
    color: theme.themeColorDark,
  }
});
