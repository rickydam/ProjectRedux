import React from "react";
import AppNavigator from "./AppNavigator";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            possibleFriends: ["Husky", "Chihuahua", "Beagle"],
            currentFriends: []
        };
    }

    addFriend = (index) => {
        const {currentFriends, possibleFriends} = this.state;
        const addedFriend = possibleFriends.splice(index, 1); // Pull friend out of possibleFriends
        currentFriends.push(addedFriend); // And put friend in currentFriends
        this.setState({currentFriends, possibleFriends}); // Finally, update our app state
    };

    render() {
        return (
            <AppNavigator
                screenProps={{
                    currentFriends: this.state.currentFriends,
                    possibleFriends: this.state.possibleFriends,
                addFriend: this.addFriend
                }}
            />
        );
    }
}
