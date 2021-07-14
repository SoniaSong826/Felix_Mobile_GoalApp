import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

function TitleText({ children, style, ...otherProps }) {
	return (
		<Text {...otherProps} style={[styles.text, style]}>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Roboto_700Bold',
		fontSize: 28,
		color: colors.white,
	},
});
export default TitleText;
