import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth4801Navigator from '../features/EmailAuth4801/navigator';
import EmailAuth4800Navigator from '../features/EmailAuth4800/navigator';
import EmailAuth4799Navigator from '../features/EmailAuth4799/navigator';
import EmailAuth4798Navigator from '../features/EmailAuth4798/navigator';
import EmailAuth4789Navigator from '../features/EmailAuth4789/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth4801: { screen: EmailAuth4801Navigator },
EmailAuth4800: { screen: EmailAuth4800Navigator },
EmailAuth4799: { screen: EmailAuth4799Navigator },
EmailAuth4798: { screen: EmailAuth4798Navigator },
EmailAuth4789: { screen: EmailAuth4789Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
