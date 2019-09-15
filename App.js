import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import friendReducer from './FriendReducer';
import AppNavigator from './AppNavigator';

const store = createStore(friendReducer);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            possibleFriends: ['Husky', 'Chihuahua', 'Beagle'],
            currentFriends: []
        };
    }

    render() {
        return (
            <Provider store={store}>
                <AppNavigator
                />
            </Provider>
        );
    }
}
