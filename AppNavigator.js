import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from './Home';
import Friends from './Friends';

const AppNavigator = createAppContainer(createStackNavigator({
    Home: {screen: Home},
    Friends: {screen: Friends}
}));

export default AppNavigator;
