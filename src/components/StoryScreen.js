import React from 'react';
import {StyleSheet, ScrollView, Text, View } from 'react-native';
import theme from '../theme.js';
import Story from './Story.js';

export default class StoryScreen extends React.Component {
  static navigationOptions = {
    title: "Today's Story",
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Story />
        <Story />
        <Story />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.themeColorLight,
  }
});
