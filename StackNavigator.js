import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import LoginScreen from './src/screens/LoginScreen';
import useAuth from './src/hooks/useAuth';
import ModalScreen from './src/screens/ModalScreen';
import MatchedScreen from './src/screens/MatchedScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { user } = useAuth();
    return (
        <Stack.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>
            {user ? (
                <>
                    <Stack.Group>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Chat" component={ChatScreen} />
                        
                    </Stack.Group>
                    <Stack.Group screenOptions={ { presentation: 'modal' }}>
                        <Stack.Screen name="Modal" component={ModalScreen} />
                        <Stack.Screen name="Matched" component={MatchedScreen} />
                    </Stack.Group>
                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}


        </Stack.Navigator>
    )
}

export default StackNavigator