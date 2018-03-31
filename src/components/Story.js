import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import theme from '../theme.js';

export default class Story extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageBlock}>
          <Image style={{height:'100%', width: '100%'}} source={require('../images/Lenna.jpg')} />
        </View>
        <View style={styles.article}>
          <Text style={styles.articalContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.themeColorLight
  },
  imageBlock: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').width
  },
  article: {
    width: '100%',
    padding: 40
  },
  articalContent: {
    color: theme.themeColorDark
  }
});
