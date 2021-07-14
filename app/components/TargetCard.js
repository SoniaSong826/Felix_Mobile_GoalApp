import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TitleText from './TitleText';
import ContentText from './ContentText';
import axios from 'axios';
import basicUrl from '../config/basicUrl';
import IndicatorCard from '../components/IndicatorCard';
import icons from '../config/icons';

function TargetCard({ goalID, targetId, description }) {
	const [indicatorsList, setIndicatorsList] = useState([]);

	useEffect(() => {
		axios
			.get(basicUrl.url + 'Indicator/List', {})
			.then((response) => {
				const filterIndicator = [];

				for (let i in response.data) {
					if (response.data[i].target === targetId) {
						filterIndicator.push(response.data[i]);
					}
				}

				setIndicatorsList(filterIndicator.sort((a, b) => b.code - a.code));
			})
			.catch(function (error) {
				console.warn(error);
			});
	});

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<MaterialCommunityIcons
					name={icons.iconList[goalID - 1]}
					size={25}
					color={colors.white}
				></MaterialCommunityIcons>
				<TitleText> Target {targetId}</TitleText>
			</View>
			<ContentText style={styles.description}>{description}</ContentText>
			<FlatList
				contentContainerStyle={styles.container}
				data={indicatorsList}
				keyExtractor={(item) => `${item}`}
				renderItem={(indicator) => (
					<IndicatorCard
						indicatorId={indicator.item.code}
						description={indicator.item.description}
					></IndicatorCard>
				)}
			></FlatList>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	description: {
		textAlign: 'justify',
	},
	titleContainer:{
    flexDirection:"row",
    alignItems:"center",
  }
});

export default TargetCard;
