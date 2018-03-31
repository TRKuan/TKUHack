import React from 'react';
import {StyleSheet, ScrollView, Text, View } from 'react-native';
import theme from '../theme.js';
import Post from './Post.js';

export default class Story extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Post />
        <Post />
        <Post />
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
