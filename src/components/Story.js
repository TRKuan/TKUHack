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
        <Post photo={require('../images/Lenna.jpg')} />
        <Post photo={require('../images/bd81df7d46559b29e9b3bc666b9a119e.jpg')} />
        <Post photo={require('../images/aba49dc0f3ef557d0d33b99fc88b1b5d.jpg')} />
        <Post photo={require('../images/4127228daeb6e44158d0ea326c8bcd5d.jpg')} />
        <Post photo={require('../images/965621c8282f41405872f8fbd5019e98.jpg')} />
        <Post photo={require('../images/948c25de33e4c6e8d9310b225c873c94.jpg')} />
        <Post photo={require('../images/737e228833ecefb343f574b55d202d31.jpg')} />
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
