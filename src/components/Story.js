import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import theme from '../theme.js';

export default class Story extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image}
            source={require('../images/rocket.png')}
        />
        <Text>Hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.themeColorLight,
  },
  image: {
    flex: 1,
    width: '100%'
  }
});
