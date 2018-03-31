import React from 'react';
import {BackHandler} from 'react-native';

import {StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import theme from './theme.js';


import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {Provider, connect} from 'react-redux';
import StoryBoard from './components/StoryBoard.js';
import StoryScreen from './components/StoryScreen.js';

import {TabNavigator, NavigationActions, addNavigationHelpers} from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const AppNavigator = TabNavigator({
    TodayStory: {screen: StoryScreen},
    StoryBoard: {screen: StoryBoard}
},
{
    tabBarPosition: 'top',
    tabBarOptions: {
        activeTintColor: theme.themeColorLight,
        indicatorStyle: {
            backgroundColor: theme.themeColorLight
        },
        style: {
            backgroundColor: theme.themeColorDark
        },
        upperCaseLabel: false
    },
    initialRouteName: 'StoryBoard'
});

class AppWithStyleAndNavigator extends React.Component {
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <AppNavigator navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener,
                })}/>
            </StyleProvider>
        );
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            const {dispatch, nav} = this.props;
            if (nav.index === 0)
                return false;
            dispatch(NavigationActions.back())
            return true;
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }
}

const AppWithNavState = connect(state => ({
    nav: state.nav
}))(AppWithStyleAndNavigator);

// Nav reducer
const initialState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'TodayStory'}));
const nav = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const addListener = createReduxBoundAddListener("root");

// Create Redux store
const store = createStore(combineReducers({
    nav
}), compose(applyMiddleware(reactNavigationMiddleware, thunkMiddleware, loggerMiddleware)));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavState/>
            </Provider>
        );
    }
}
