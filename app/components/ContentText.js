import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ContentText({ children, style, ...otherProps }) {
	return (
		<Text {...otherProps} style={[styles.text, style]}>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Roboto_400Regular',
		fontSize: 15,
		color: colors.white,
	},
});
export default ContentText;
