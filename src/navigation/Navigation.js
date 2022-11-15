import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LiveSession from '../modules/liveSession/LiveSession';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../modules/home/Home';
import MyRanking from '../modules/myRanking/MyRanking';
import BioMaker from '../modules/bioMaker/BioMaker';
import Profile from '../modules/profile/Profile';
import {withTheme} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {appStyles} from '../modules/utils/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const Navigation = ({theme}) => {
  const {colors} = theme;

  const setColorSize = focused => {
    return {
      size: focused ? 25 : 33,
      color: focused ? colors.background : colors.white,
      style: focused
        ? [styles.icon, {backgroundColor: colors.activeColor}]
        : null,
    };
  };

  return (
    <SafeAreaView
      style={[appStyles.container, {backgroundColor: colors.background}]}>
      <StatusBar backgroundColor={colors.background} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: [
              styles.tabBar,
              {
                backgroundColor: colors.tabBarColor,
              },
            ],
            tabBarInactiveTintColor: colors.white,
            tabBarActiveTintColor: colors.white,
            tabBarLabelStyle: styles.label,
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => {
                const {size, color, style} = setColorSize(focused);
                return (
                  <Icon name="home" size={size} color={color} style={style} />
                );
              },
            }}
          />
          <Tab.Screen
            name="Live Session"
            component={LiveSession}
            options={{
              tabBarIcon: ({focused}) => {
                const {size, color, style} = setColorSize(focused);
                return (
                  <Icon
                    name="video-wireless-outline"
                    size={size}
                    color={color}
                    style={style}
                  />
                );
              },
            }}
          />

          <Tab.Screen
            name="Bio Maker"
            component={BioMaker}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => {
                const {size, color, style} = setColorSize(focused);
                return (
                  <Icon
                    name="camera-plus-outline"
                    size={size}
                    color={color}
                    style={style}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="My Ranking"
            component={MyRanking}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: [styles.titleStyle, {color: colors.white}],
              headerTitle: 'Elites Leaderboard',
              headerRight: () => (
                <Icon
                  name="arrow-right-circle-outline"
                  size={30}
                  color={colors.white}
                />
              ),
              headerLeft: () => (
                <TouchableOpacity
                  style={[
                    styles.iconContainer,
                    {backgroundColor: colors.iconBackgroundColor},
                  ]}>
                  <Icon name="chevron-left" size={30} color={colors.white} />
                </TouchableOpacity>
              ),
              headerStyle: {backgroundColor: colors.background, elevation: 0},
              tabBarIcon: ({focused}) => {
                const {size, color, style} = setColorSize(focused);
                return (
                  <Icon name="poll" size={size} color={color} style={style} />
                );
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({tintColor, focused}) => {
                const {size, color, style} = setColorSize(focused);
                return (
                  <Icon
                    name="account"
                    size={size}
                    color={color}
                    style={style}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default withTheme(Navigation);

const styles = StyleSheet.create({
  tabBar: {height: 60},
  label: {fontSize: 12, paddingTop: 0, marginTop: 0},
  titleStyle: {fontWeight: '200'},
  iconContainer: {
    height: 30,
    width: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {borderRadius: 20, padding: 5, marginTop: 2},
});
