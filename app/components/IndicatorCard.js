import React from 'react';
import { View, StyleSheet } from 'react-native';
import TitleText from './TitleText';
import ContentText from './ContentText';

function IndicatorCard({ indicatorId, description }) {
	return (
		<View style={styles.container}>
			<TitleText style={styles.title}>{indicatorId}</TitleText>
			<ContentText style={styles.description}>{description}</ContentText>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
		marginVertical: 5,
	},
	title: {
		fontSize: 18,
	},
	description: {
		textAlign: 'justify',
	},
});

export default IndicatorCard;
