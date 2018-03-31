import React from 'react';
import {Button, StyleSheet, ScrollView, Text, View } from 'react-native';
import theme from '../theme.js';
import Post from './Post.js';
import {connect} from 'react-redux';
import {seeUnfinished, seeFinished, toProfile} from '../states/storyBoard-actions.js';

class Story extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Button title={"Back"} style={styles.btn} color={theme.themeColorDark} onPress={() => this.props.dispatch(toProfile())}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  btn: {
    marginTop: 30,
    justifyContent:'center',
    alignSelf: 'center'
  }
});

export default connect((state, ownProps) => ({
    ...state.storyBoard,
}))(Story);
