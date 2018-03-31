import React from 'react';
import {StyleSheet, Text, View, Button, Dimensions, Image} from 'react-native';
import theme from '../theme.js';
import Story from './Story.js'
import WritePost from './WritePost.js'
import ImagePicker from 'react-native-image-crop-picker';
export default class Main extends React.Component {
  static navigationOptions = {
    title: "Today's Story",
  };

  componentDidMount(){
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }


  render() {
    const clockPage = [
      <View style={styles.container}>
        <View style={styles.clockPanel}>
          <View style={styles.imageBlock}>
            <Image style={{height:'80%', width: '80%'}} source={require('../images/rocket-2.png')} />
          </View>
        </View>
        <View style={styles.buttonPanel}>
        <View style={styles.imageBlock}>
          <Button title={"Start Your Jouney!"} style={styles.btn} color={theme.themeColorDark} />
        </View>
        </View>
      </View>
    ];
    return (
      <View style={styles.container}>
        <WritePost/>
      </View>
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
