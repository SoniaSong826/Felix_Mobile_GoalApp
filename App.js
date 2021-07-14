import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './app/screens/HomeScreen';
import TargetScreen from './app/screens/TargetScreen';
import colors from './app/config/colors';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
	const Stack = createStackNavigator();
	let [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<>
						<Stack.Screen
							name="Home"
							component={HomeScreen}
							options={{
								headerStyle: {
									backgroundColor: colors.lightBlue,
								},
								title: 'THE 17 GOALS',
								headerTintColor: colors.white,
								headerTitleStyle: {
									fontSize: 20,
									fontFamily: 'Roboto_700Bold',
								},
							}}
						/>
						<Stack.Screen
							name="Target"
							component={TargetScreen}
							options={({ route }) => ({
								headerStyle: {
									backgroundColor: colors.cardColors[route.params.goalId - 1],
								},
								title: 'GOAL ' + route.params.goalId,
								headerTintColor: colors.white,
								headerTitleStyle: {
									fontSize: 20,
									fontFamily: 'Roboto_700Bold',
								},
								headerBackTitleStyle: {
									fontFamily: 'Roboto_400Regular',
								},
							})}
						/>
					</>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
