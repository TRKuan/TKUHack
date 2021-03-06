import React from 'react';
import {StyleSheet, Text, View, Button, Dimensions, Image, ScrollView} from 'react-native';
import theme from '../theme.js';
import Story from './Story.js'
import WritePost from './WritePost.js'
import ChooseStoryPage from './ChooseStoryPage.js'
import ClockPage from './ClockPage.js'
import {connect} from 'react-redux';
import {toChooseStory, postStory, skipStory, joinStory} from '../states/today-actions.js';

class Main extends React.Component {
  static navigationOptions = {
    title: "Today's Story",
  };




  render() {

    return (
        <ScrollView>
          {this.props.screenMode=='startJourney'?<ClockPage/>:<View></View>}
          {this.props.screenMode=='chooseStory'||this.props.screenMode=='postStory'?<ChooseStoryPage/>:<View></View>}
          {this.props.screenMode=='postStory'?<WritePost/>:<View></View>}
        </ScrollView>
    );
  }
}

const size = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  clockPanel: {
    flex: 2,
    paddingTop: 20,
    //padding: 30
    //margin: 30
  },
  buttonPanel: {
    flex: 1
  },
  imageBlock: {
    flex: 1,
    alignSelf: 'stretch',
    //width: '100%',
    //height: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default connect((state, ownProps) => ({
    ...state.today,
}))(Main);
