import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList119718Navigator from '../features/ArticleList119718/navigator';
import ArticleList119717Navigator from '../features/ArticleList119717/navigator';
import ArticleList119716Navigator from '../features/ArticleList119716/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList119718: { screen: ArticleList119718Navigator },
ArticleList119717: { screen: ArticleList119717Navigator },
ArticleList119716: { screen: ArticleList119716Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
