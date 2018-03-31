import React from 'react';
import {StyleSheet, Text, View, Button, Dimensions, Image} from 'react-native';
import theme from '../theme.js';
import Story from './Story.js'

export default class Main extends React.Component {
  static navigationOptions = {
    title: "Today's Story",
  };


  render() {
    const lala = [
      <View style={styles.imageBlock}>
        <Image style={{height:'100%', width: '100%'}} source={require('../images/Lenna.jpg')} />
        <Button title={"Start"} style={styles.btn} color={theme.themeColorDark} />
      </View>
    ];
    return (
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
    );
  }
}

const size = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.themeColorLight,
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
