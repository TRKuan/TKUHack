import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image, Row, ImageBackground, TouchableOpacity, Modal} from 'react-native';
import theme from '../theme.js';
import {connect} from 'react-redux';
import {seeUnfinished, seeFinished, toProfile} from '../states/storyBoard-actions.js';
import Story from './Story.js'

class StoryBoard extends React.Component {
  static navigationOptions = {
    title: "Story Board",
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
           animationType="slide"
           transparent={false}
           visible={this.props.screenMode=='unFinishedList'||this.props.screenMode=='finishedList'}
           onRequestClose={() => {
             this.props.dispatch(toProfile())
           }}>
          <Story />

        </Modal>
        <View style={styles.profile}>
          <View style={styles.profileHeader}>
            <ImageBackground source={require('../images/profile-header-background.png')} style={styles.profileBackgroundImage}>
              <View style={styles.profileName}>
                  <View style={ styles.loginForm }>
                      <Text style={styles.profileNameText}>Leeeee</Text>
                  </View>
              </View>
              <View style={styles.profileNameEmpty}></View>
            </ImageBackground>
          </View>
          <View style={styles.profileInfo}>
            <View style={styles.profileInfoText}>
              <Text>Stories Completed: 10</Text>
            </View>
            <View style={styles.profileInfoEmpty}></View>
          </View>
        </View>
        <View style={styles.profilePicBox}>
          <Image style={styles.profilePic} source={require('../images/Lenna.jpg')} />
        </View>

        <View style={styles.unfinishedStories}>
          <View style={styles.unfinishedStoriesHeader}>
            <View style={styles.unfinishedText}>
              <Text>Unfinished Stories</Text>
            </View>
            <View style={styles.unfinishedEmpty}></View>
            <TouchableOpacity style={styles.unfinishedSeeAll} onPress={()=>this.props.dispatch(seeUnfinished())}>
                <Text style={{'color': '#F9A602'}}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal contentContainerStyle={styles.storiesScrollContent} style={styles.unfinishedStoriesScroll}>
            <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna_grey.jpg')} /></View>
            <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna_grey.jpg')} /></View>
            <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna_grey.jpg')} /></View>
            <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna_grey.jpg')} /></View>
            <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna_grey.jpg')} /></View>
            <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna_grey.jpg')} /></View>
            <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna_grey.jpg')} /></View>

          </ScrollView>
        </View>

        <View style={styles.finishedStories}>
          <View style={styles.finishedStoriesHeader}>
            <View style={styles.finishedText}>
              <Text>Finished Stories</Text>
            </View>
            <View style={styles.finishedEmpty}></View>
            <TouchableOpacity style={styles.unfinishedSeeAll} onPress={()=>this.props.dispatch(seeFinished())}>
                <Text style={{'color': '#F9A602'}}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal contentContainerStyle={styles.storiesScrollContent} style={styles.finishedStoriesScroll}>
          <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna.jpg')} /></View>
          <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna.jpg')} /></View>
          <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna.jpg')} /></View>
          <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna.jpg')} /></View>
          <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna.jpg')} /></View>
          <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna.jpg')} /></View>
          <View style={styles.previewImageContainer}><Image style={styles.previewImage}source={require('../images/Lenna.jpg')} /></View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

const size = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: theme.themeColorLight,
  },
  profile: {
    //backgroundColor: 'blue',
    flex: 1,

  },
  forOverflow: {
    backgroundColor: 'transparent',
  },
  profileHeader: {
    flex: 2,
  },
  profileBackgroundImage: {
    flex: 1,
    flexDirection: 'row',
    //resizeMode: 'cover', // or 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginForm: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileName:{
    flex: 1,
  },
  profileNameText:{
    color: theme.themeColorLight,
    fontSize: 30
  },
  profileNameEmpty:{
    flex: 1,
  },
  profilePicBox: {
    position: 'absolute',
    top: 85,
    right: 30
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: theme.themeColorLight
  },
  profileInfo: {
    flex: 1,
    //backgroundColor: 'darkblue',
    flexDirection: 'row',
    borderBottomWidth:1,
    borderBottomColor: 'lightgrey'
  },
  profileInfoText:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileInfoEmpty:{
    flex: 1
  },
  unfinishedStories:{
    //backgroundColor: 'green',
    flex: 1,
    flexDirection: 'column'
  },
  unfinishedStoriesHeader:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    //borderBottomWidth:1,
    //borderBottomColor: 'lightgrey'
  },
  unfinishedText:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  unfinishedEmpty:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  unfinishedSeeAll:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  unfinishedStoriesScroll:{
    flexGrow: 4,
    //backgroundColor: 'darkgreen',
    borderBottomWidth:1,
    borderBottomColor: 'lightgrey'
  },
  finishedStories:{
    //backgroundColor: 'red',
    flex: 1,
    flexDirection: 'column'
  },
  finishedStoriesHeader:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    //borderBottomWidth:1,
    //borderBottomColor: 'lightgrey'
  },
  finishedText:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  finishedEmpty:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  finishedSeeAll:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  finishedStoriesScroll:{
    flexGrow: 4,
    //backgroundColor: 'darkred',
  },
  storiesScrollContent:{
    //flexGrow: 4,
    justifyContent: 'center',
    //alignItems:'center'
  },
  previewImagesContainer:{

    //justifyContent: 'center',
    //alignItems:'center'
  },
  previewImage:{
    width: 120,
    height:120,
    margin: 10,
    marginTop: 2,
    borderRadius:5
  }

});

export default connect((state, ownProps) => ({
    ...state.storyBoard,
}))(StoryBoard);
