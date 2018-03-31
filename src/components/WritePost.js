import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions, Button, TouchableOpacity, TextInput} from 'react-native';
import theme from '../theme.js';

export default class WritePost extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageBlock}>
          <Button title={"Upload Photo"} style={styles.btn} color={theme.themeColorDark} />
        </View>
        <View style={styles.article}>
        <TextInput
          style={{height: 150, borderColor: 'gray', borderWidth: 1}} multiline = {true} editable = {true}  numberOfLines = {10}
          //onChangeText={(text) => console.log(text)}
          //value={}
        />
        </View>
        <View style={styles.buttonsPanel}>
          <TouchableOpacity style={styles.btn}>
              <Text style={{'color': '#F9A602'}}>Post</Text>
          </TouchableOpacity>
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
    backgroundColor: theme.themeColorLight,
    margin:15,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5

  },
  imageBlock: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').width,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  article: {
    width: '100%',
    padding: 30,

  },
  articalContent: {
    color: theme.themeColorDark
  },
  buttonsPanel:{
    height: 80,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  btn: {

  }
});
