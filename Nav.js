import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AddExScreen from './screens/AddExScreen';
import GroupsScreen from './screens/GroupsScreen';
import DetailsScreen from './screens/DetailsScreen';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './data/Reducer';
import { Icon } from '@rneui/themed';

function NavSkeleton() {
    const Stack = createNativeStackNavigator();
    const store = configureStore({
        reducer: rootReducer,
    }); //We might need this later

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login'
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Login' component={LoginScreen} />
                    <Stack.Screen name='HomeSet' component={HomeSet} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

function GroupsTabStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='GroupsHome'>
            <Stack.Screen name='GroupsHome' component={GroupsScreen}></Stack.Screen>
            <Stack.Screen name='Details' component={DetailsScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

function HomeSet() {
    const Tabs = createBottomTabNavigator();
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Icon
                                name="home"
                                color={color}
                                size={size}
                            />
                        );
                    }
                }} />
            <Tabs.Screen name="Add Expense"
                component={AddExScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Icon
                                name="add-circle"
                                color={color}
                                size={size}
                            />
                        );
                    }
                }} />
            <Tabs.Screen name="Groups"
                component={GroupsTabStack}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Icon
                                name="groups"
                                color={color}
                                size={size}
                            />
                        );
                    }
                }} />
        </Tabs.Navigator>
    );
}
export default NavSkeleton;