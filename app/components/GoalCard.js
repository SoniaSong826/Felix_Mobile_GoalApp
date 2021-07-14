import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Dimensions,
	ScrollView,
} from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TitleText from './TitleText';
import ContentText from './ContentText';
import shortTitles from '../config/shortTitles';
import icons from '../config/icons';
import MoreButton from './MoreButton';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;
function GoalCard({ navigation, goalId, title, description }) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<React.Fragment>
			<TouchableOpacity onPress={() => setModalVisible(true)}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.backGround}
						source={{
							uri: `https://sdgs.un.org/themes/custom/porto/assets/goals/images/img-goal-${goalId}.jpg`,
						}}
					></Image>
					<View style={[styles.colorBox, { backgroundColor: colors.cardColors[goalId - 1] }]}>
						<TitleText>{goalId}</TitleText>
						<TitleText numberOfLines={2} style={styles.title}>
							{shortTitles.titles[goalId - 1]}
						</TitleText>
						<MaterialCommunityIcons
							name={icons.iconList[goalId - 1]}
							size={50}
							color={colors.white}
						></MaterialCommunityIcons>
					</View>
				</View>
			</TouchableOpacity>
			<Modal
				isVisible={modalVisible}
				transparent={true}
				onBackdropPress={() => setModalVisible(false)}
				onSwipeComplete={() => setModalVisible(false)}
				animationIn="slideInLeft"
				animationOut="slideOutLeft"
				backdropOpacity={0}
			>
				<View style={[styles.modal, { backgroundColor: colors.cardColors[goalId - 1] }]}>
					<TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
						<View style={styles.downButton}>
							<MaterialCommunityIcons
								name="close"
								size={30}
								color={colors.white}
							></MaterialCommunityIcons>
						</View>
					</TouchableWithoutFeedback>
					<View>
						<TitleText>Goal: {goalId}</TitleText>
						<ScrollView>
							<TitleText style={styles.detailedTitle}>{title}</TitleText>
							<ContentText style={styles.description}>{description}</ContentText>
						</ScrollView>
					</View>
					<MoreButton
						onPress={() => {
							setModalVisible(false);
							navigation.navigate('Target', { goalId });
						}}
						style={styles.button}
						title={'Learn More >'}
					></MoreButton>
				</View>
			</Modal>
		</React.Fragment>
	);
}
const styles = StyleSheet.create({
	backGround: {
		width: (windowWidth - 30) / 2,
		height: (windowWidth - 30) / 2 / 0.6,
	},
	imageContainer: {
		margin: 5,
	},
	colorBox: {
		width: (windowWidth - 30) / 3,
		height: (windowWidth - 30) / 3,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'space-between',
		bottom: 8,
		left: 8,
		padding: 5,
		borderRadius: 10,
	},
	title: {
		fontSize: 16,
		textAlign:"center"
	},
	detailedTitle: {
		fontSize: 16,
		textAlign: 'justify',
		marginVertical: 10,
	},
	modal: {
		flex: 1,
		marginHorizontal: 50,
		marginVertical: 200,
		borderRadius: 20,
		padding: 15,
	},
	button: {
		bottom: 10,
		right: 10,
		position: 'absolute',
	},
	description: {
		textAlign: 'justify',
	},
	downButton: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
});

export default GoalCard;
