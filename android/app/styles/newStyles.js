// TODO: What the faaaaaaaaaaaaaaaaaz?
import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {
	static Dimensions(width, height) {
		return StyleSheet.create({
			pageSize: {
				width: width,
				height: height,
			},
		});
	}
	static Landing(width, height) {
		return StyleSheet.create({
			buttonCol: {
				width: width / 10,
				margin: 10,
			},
		});
	}
}
