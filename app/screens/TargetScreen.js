import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, FlatList } from 'react-native';
import colors from '../config/colors';
import basicUrl from '../config/basicUrl';
import TargetCard from '../components/TargetCard';
import axios from 'axios';
import ListItemSeparator from '../components/ListItemSeparator';

function TargetScreen({ route }) {
	const [targetList, setTargetList] = useState([]);
	const goalId = route.params.goalId;
	useEffect(() => {
		axios
			.get(basicUrl.url + 'Target/List', {})
			.then((response) => {
				const filterTarget = [];
				for (let i in response.data) {
					if (response.data[i].goal === goalId) {
						filterTarget.push(response.data[i]);
					}
				}

				setTargetList(filterTarget);
			})
			.catch(function (error) {
				console.warn(error);
			});
	});

	return (
		<ImageBackground style={[styles.backGround, { backgroundColor: colors.cardColors[goalId - 1] }]}>
			<FlatList
				data={targetList}
				keyExtractor={(index) => `${index.toString()}`}
				ItemSeparatorComponent={() => <ListItemSeparator />}
				renderItem={(target) => (
					<TargetCard
						goalID={goalId}
						targetId={target.item.code}
						description={target.item.title}
					></TargetCard>
				)}
			></FlatList>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backGround: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		fontSize: 40,
		paddingLeft: 10,
	},
});
export default TargetScreen;
