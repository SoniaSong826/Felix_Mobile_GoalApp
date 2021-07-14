import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, FlatList } from 'react-native';
import colors from '../config/colors';
import basicUrl from '../config/basicUrl';
import GoalCard from '../components/GoalCard';
import axios from 'axios';

function HomeScreen({ navigation }) {
	const [goalList, setGoalList] = useState([]);

	useEffect(() => {
		axios
			.get(basicUrl.url + 'Goal/List', {})
			.then((response) => {
				setGoalList(response.data);
			})
			.catch(function (error) {
				console.warn(error);
			});
	});

	return (
		<ImageBackground style={styles.backGround}>
			<FlatList
				contentContainerStyle={styles.container}
				data={goalList}
				keyExtractor={(item) => `${item}`}
				numColumns={2}
				renderItem={(goal) => (
					<GoalCard
						navigation={navigation}
						goalId={goal.item.code}
						title={goal.item.title}
						description={goal.item.description}
					></GoalCard>
				)}
			></FlatList>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	backGround: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: colors.lightBlue,
	},
});

export default HomeScreen;
