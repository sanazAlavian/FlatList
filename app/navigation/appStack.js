import React, {component} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import styles from '../styles/styles';
import Landing from '../pages/landing';


let {width, height} = Dimensions.get('window');
if (width > height) {
    let t = width;
    width = height;
    height = t;
}

let headerHeight = height / 6;

const AppRoutes = {

    Landing: {
        screen: Landing,
        navigationOptions: ({navigation}) => ({
            headerStyle: styles.headerStyle,
            headerLeft: HeaderBackButton(navigation, true),
            headerRight: HeaderEmptyButton(),
            gesturesEnabled: false
        }),
    },

};
