import React from 'react';
import AppStack from './appStack';
import { StackNavigator } from 'react-navigation';

const MainRoutes = {
	AppStack: {
		screen: AppStack,
	},
};

const DrawerStack = StackNavigator(MainRoutes, { headerMode: 'none' });
export default DrawerStack;
