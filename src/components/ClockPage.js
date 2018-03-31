import React from 'react';
import {StyleSheet, Text, View, Button, Dimensions, Image, ScrollView} from 'react-native';
import theme from '../theme.js';


import {connect} from 'react-redux';
import {toChooseStory, postStory, skipStory, joinStory} from '../states/today-actions.js';

class ClockPage extends React.Component {



  render() {

    return (
      <View style={styles.container}>
        <View style={styles.clockPanel}>
          <View style={styles.imageBlock}>
            <Image style={{height:300, width: 300}} source={require('../images/rocket-2.png')} />
          </View>
        </View>
        <View style={styles.buttonPanel}>
          <View style={styles.imageBlock}>
            <Button title={"Start Your Jouney!"} style={styles.btn} color={theme.themeColorDark} onPress={() => this.props.dispatch(toChooseStory())}/>
          </View>
        </View>
      </View>
    );
  }
}

const size = 16;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  clockPanel: {
    marginTop: 50,
    flexGrow: 2,
    paddingTop: 20,
    //padding: 30
    //margin: 30
  },
  buttonPanel: {
    flexGrow: 1,
    paddingTop: 50,
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
}))(ClockPage);
